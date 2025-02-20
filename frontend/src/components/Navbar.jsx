import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 100;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact Us' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#181824] shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              className="text-2xl font-bold text-white hover:text-[#00D1FF] transition-colors"
            >
              NextEra
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-[#00D1FF] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="relative group"
              >
                <span className={`text-gray-300 font-medium transition-colors group-hover:text-[#00D1FF] ${
                  activeSection === href.slice(1) ? 'text-[#00D1FF]' : ''
                }`}>
                  {label}
                </span>
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00D1FF] transition-all duration-300 
                  ${activeSection === href.slice(1) ? 'w-full' : 'group-hover:w-full'}`} 
                />
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-64' : 'max-h-0'
        }`}>
          <div className="py-3 space-y-1 bg-[#1F1F2B]">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`block px-4 py-2 text-base transition-colors ${
                  activeSection === href.slice(1)
                    ? 'text-[#00D1FF] bg-[#181824]'
                    : 'text-gray-300 hover:text-[#00D1FF] hover:bg-[#181824]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 