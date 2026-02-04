import React, { useState, useEffect } from 'react';
import { GlassCard } from './ui/GlassCard';
import { PortfolioItem } from '../types';
import { fetchPortfolioData } from '../utils/sheetService';

const TABS = [
  { id: 'sports', label: 'Sports' },
  { id: 'events', label: 'Events' },
  { id: 'exhibitions', label: 'Exhibitions' },
  { id: 'influencer', label: 'Influencer & Production' }
];

const STATIC_DATA: Record<string, PortfolioItem[]> = {
  events: [
    { id: 'e1', title: 'Product Launch', image: 'https://picsum.photos/600/400?random=10', category: 'events' },
    { id: 'e2', title: 'Exhibition', image: 'https://picsum.photos/600/400?random=11', category: 'events' },
    { id: 'e3', title: 'Corporate Event', image: 'https://picsum.photos/600/400?random=12', category: 'events' },
    { id: 'e4', title: 'Art of Innovation', image: 'https://picsum.photos/600/400?random=13', category: 'events' },
  ],
  exhibitions: [
    { id: 'ex1', title: 'Art Exhibition', image: 'https://picsum.photos/600/400?random=20', category: 'exhibitions' },
    { id: 'ex2', title: 'Science Museum', image: 'https://picsum.photos/600/400?random=21', category: 'exhibitions' },
    { id: 'ex3', title: 'Trade Show', image: 'https://picsum.photos/600/400?random=22', category: 'exhibitions' },
    { id: 'ex4', title: 'Interactive Display', image: 'https://picsum.photos/600/400?random=23', category: 'exhibitions' },
  ],
  influencer: [
    { id: 'i1', title: 'Influencer Campaign', image: 'https://picsum.photos/600/400?random=30', category: 'influencer' },
    { id: 'i2', title: 'Video Production', image: 'https://picsum.photos/600/400?random=31', category: 'influencer' },
    { id: 'i3', title: 'Social Media', image: 'https://picsum.photos/600/400?random=32', category: 'influencer' },
    { id: 'i4', title: 'Live Streaming', image: 'https://picsum.photos/600/400?random=33', category: 'influencer' },
  ]
};

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('sports');
  const [sportsData, setSportsData] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadSports = async () => {
      setLoading(true);
      const data = await fetchPortfolioData();
      setSportsData(data);
      setLoading(false);
    };
    loadSports();
  }, []);

  const getCurrentData = () => {
    if (activeTab === 'sports') return sportsData;
    return STATIC_DATA[activeTab] || [];
  };

  const getTabDescription = () => {
    switch(activeTab) {
      case 'sports': return "เราดูแลทุกก้าวของการแข่งขัน สร้างประสบการณ์ที่น่าประทับใจ ด้วยประสบการณ์กว่า 8 ปี";
      case 'events': return "สร้างความสมบูรณ์แบบด้วยหัวใจและเทคโนโลยี ทุกอีเวนท์ต้องสร้างประสบการณ์ที่มีคุณค่า";
      case 'exhibitions': return "สร้างประสบการณ์การเรียนรู้และความประทับใจผ่านนิทรรศการ ผสมผสานเทคโนโลยีสมัยใหม่";
      case 'influencer': return "สร้างเนื้อหาที่สร้างแรงบันดาลใจและเชื่อมต่อกับออดิเอนซ์ เข้าใจพลังของการเล่าเรื่อง";
      default: return "";
    }
  };

  return (
    <section id="portfolio" className="py-24 relative">
       <div className="absolute inset-0 z-0">
         <div className="absolute inset-0 bg-bg-dark/95"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <h2 className="text-4xl font-heading font-bold text-center mb-12 text-white neon-shadow-text-cyan">Our Portfolio</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`glass-button px-6 py-2 rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${activeTab === tab.id ? 'active bg-neon-cyan text-bg-dark' : 'text-gray-300'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <GlassCard className="p-8 md:p-12 min-h-[600px] flex flex-col fade-in-up">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-body font-bold text-white mb-4 capitalize neon-shadow-text-cyan">
              {activeTab}
            </h3>
            <p className="text-lg md:text-xl font-body text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {getTabDescription()}
            </p>
          </div>

          {loading && activeTab === 'sports' ? (
            <div className="flex-1 flex justify-center items-center">
              <div className="w-12 h-12 border-4 border-neon-cyan border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-1">
              {getCurrentData().map((item, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-xl aspect-square mb-3 border border-white/10">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-neon-cyan text-sm font-bold">View Project</span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-body text-center text-sm group-hover:text-neon-cyan transition-colors">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <a href="#contact" className="magic-button inline-flex items-center space-x-2 px-8 py-3 rounded-full">
              <span>View More {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
