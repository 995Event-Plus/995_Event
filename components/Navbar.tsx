import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'WHY 995', href: '#why-us' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'AI CONSULTANT', href: '#ai-consultant' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-card rounded-none border-b border-t-0 border-l-0 border-r-0 border-neon-cyan shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="text-3xl font-heading font-bold text-white neon-shadow-text-cyan">995</span>
          <span className="text-xl font-heading text-neon-cyan ml-1">EVENTS</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-subheading text-sm font-medium text-gray-300 hover:text-neon-cyan transition duration-300 tracking-wider"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-xl absolute w-full border-b border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block text-center py-4 px-4 text-lg text-gray-200 hover:bg-white/5 hover:text-neon-cyan font-subheading"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
