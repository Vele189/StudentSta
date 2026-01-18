import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onEnquireClick: () => void;
}

export function Header({ onEnquireClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Programs', href: '#programs' },
    { label: 'Membership', href: '#membership' },
    { label: 'Excursions', href: '#excursions' },
    { label: 'Book a Tutor', href: '#tutors' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled || isMobileMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src="/logo.png" alt="StudentSta Logo" className="w-[60px] h-[60px] object-contain" />
            <span className="font-['Satoshi'] font-bold text-[20px] leading-[18px] tracking-[-0.02em]">StudentSta</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-['Satoshi'] font-medium text-[18px] hover:text-[var(--accent-yellow-hover)] transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={onEnquireClick}
            className="hidden md:block px-6 py-2.5 bg-black text-white rounded-lg hover:bg-[var(--accent-yellow)] hover:text-black transition-all duration-300 hover:shadow-lg"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg px-6 pb-6 pt-2 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left py-3 text-lg font-medium border-b border-gray-50 hover:text-gray-600 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onEnquireClick();
                }}
                className="mt-4 w-full px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-all font-medium"
              >
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
