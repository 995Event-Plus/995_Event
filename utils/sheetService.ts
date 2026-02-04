import { PortfolioItem } from '../types';

const SHEET_ID = '1UDuvb9n47enjPx5fg3xDraP6g5n8JJCTb0mVNXCWJog';
const SHEET_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv&gid=0`;

function convertGoogleDriveUrl(url: string): string {
  if (url.includes('drive.google.com/file/d/')) {
    const fileIdMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
    if (fileIdMatch) {
      const fileId = fileIdMatch[1];
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  return url;
}

function convertPostImgUrl(text: string): string {
  const srcMatch = text.match(/src='([^']+)'/);
  if (srcMatch) {
    return srcMatch[1];
  }
  return text;
}

export const fetchPortfolioData = async (): Promise<PortfolioItem[]> => {
  try {
    // Try proxy first to avoid CORS issues often found with direct sheet CSV access in browser
    const PROXY_URL = `https://api.allorigins.win/get?url=${encodeURIComponent(SHEET_URL)}`;
    const response = await fetch(PROXY_URL);
    const data = await response.json();
    
    if (!data.contents) throw new Error("No content");
    
    const rows = data.contents.split('\n').filter((row: string) => row.trim());
    
    // Assuming CSV structure based on user script: Col B = Image, Col C = Description/Title
    // We map the first 4 rows to "sports" category as per original script logic
    const items: PortfolioItem[] = [];
    
    rows.forEach((row: string, index: number) => {
      if (index >= 4) return; // Limit to 4 for the demo logic
      
      const cols = row.split(',');
      if (cols.length < 3) return;

      let imageUrl = cols[1] ? cols[1].replace(/"/g, '').trim() : '';
      const title = cols[2] ? cols[2].replace(/"/g, '').trim() : '';
      
      imageUrl = convertGoogleDriveUrl(imageUrl);
      imageUrl = convertPostImgUrl(imageUrl);

      if (title) {
        items.push({
          id: `sheet-${index}`,
          title: title,
          image: imageUrl || `https://picsum.photos/600/400?random=${index}`,
          category: 'sports' // The script specifically loaded these into the sports section
        });
      }
    });

    return items;
  } catch (error) {
    console.error("Failed to fetch sheet data", error);
    // Fallback data
    return [
      { id: '1', title: 'Air Force Run', image: 'https://picsum.photos/600/400?random=1', category: 'sports' },
      { id: '2', title: 'Cycling For Health', image: 'https://picsum.photos/600/400?random=2', category: 'sports' },
      { id: '3', title: 'We Can Run', image: 'https://picsum.photos/600/400?random=3', category: 'sports' },
      { id: '4', title: 'Sports Expo 2024', image: 'https://picsum.photos/600/400?random=4', category: 'sports' },
    ];
  }
};
