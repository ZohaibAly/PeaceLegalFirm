import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { theme } from '../../constants/theme';
import Logo from '../assets/images/website-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const location = useLocation(); // Current route ko track karne ke liye

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleService = () => setIsServiceOpen(!isServiceOpen);

  const serviceItems = [
    { name: 'Criminal Law', path: 'services/Criminal-Law' },
    { name: 'Company Law', path: 'services/Company-Law' },
    { name: 'Civil Law', path: '/services/Civil-Law' },
    { name: 'Property Law', path: '/services/Property-Law' },
    { name: 'Family Law', path: '/services/Family-Law' },
    { name: 'Banking Law', path: '/services/Banking-Law' },
    { name: 'Corporate Law/NOC', path: '/services/Corporate-Law' },
  ];

  // Check if current path is a service page
  const isServiceActive = serviceItems.some(item => location.pathname === item.path);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-12 pt-4 md:pt-6">
      <div className="max-w-[1920px] mx-auto bg-white rounded-full shadow-lg px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={Logo} 
              alt="Peace Law Firm" 
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="px-6 py-2 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: location.pathname === '/' ? theme.colors.secondary : 'transparent',
                color: location.pathname === '/' ? 'white' : theme.colors.primary,
                fontFamily: theme.fonts.body,
                fontWeight: '500'
              }}
            >
              HOME
            </Link>

            {/* Service Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 transition-colors duration-300 font-medium hover:text-orange-500"
                style={{ 
                  color: isServiceActive ? theme.colors.secondary : theme.colors.primary,
                  fontFamily: theme.fonts.body
                }}
              >
                <span>SERVICES</span>
                <ChevronDown size={16} />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
              >
                {serviceItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-6 py-3 hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                    style={{ 
                      fontFamily: theme.fonts.body,
                      color: location.pathname === item.path ? theme.colors.secondary : theme.colors.primary,
                      fontWeight: location.pathname === item.path ? '600' : 'normal'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/Our-Lawyers" 
              className="transition-colors duration-300 font-medium hover:text-orange-500"
              style={{ 
                color: location.pathname === '/Our-Lawyers' ? theme.colors.secondary : theme.colors.primary,
                fontFamily: theme.fonts.body
              }}
            >
              OUR LAWYERS
            </Link>

            <Link 
              to="/Get-Free-Consultation" 
              className="transition-colors duration-300 font-medium hover:text-orange-500"
              style={{ 
                color: location.pathname === '/Get-Free-Consultation' ? theme.colors.secondary : theme.colors.primary,
                fontFamily: theme.fonts.body
              }}
            >
              GET FREE CONSULTATION
            </Link>

              <Link 
              to="/About-Us" 
              className="transition-colors duration-300 font-medium hover:text-orange-500"
              style={{ 
                color: location.pathname === '/About-Us' ? theme.colors.secondary : theme.colors.primary,
                fontFamily: theme.fonts.body
              }}
            >
              ABOUT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="lg:hidden p-2"
            style={{ color: theme.colors.primary }}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 lg:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleMenu}
        style={{ top: '0' }}
      />

      {/* Mobile Menu Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={toggleMenu}
              style={{ color: theme.colors.primary }}
            >
              <X size={28} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-2 px-6">
            <Link 
              to="/" 
              onClick={toggleMenu}
              className="px-6 py-3 rounded-full text-center font-medium"
              style={{ 
                backgroundColor: location.pathname === '/' ? theme.colors.secondary : 'transparent',
                color: location.pathname === '/' ? 'white' : theme.colors.primary,
                fontFamily: theme.fonts.body
              }}
            >
              HOME
            </Link>

            {/* Mobile Service Dropdown */}
            <div>
              <button 
                onClick={toggleService}
                className="w-full flex items-center justify-between px-6 py-3 font-medium"
                style={{ 
                  color: isServiceActive ? theme.colors.secondary : theme.colors.primary,
                  fontFamily: theme.fonts.body
                }}
              >
                <span>SERVICE</span>
                <ChevronDown 
                  size={16} 
                  className={`transform transition-transform duration-300 ${
                    isServiceOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  isServiceOpen ? 'max-h-96' : 'max-h-0'
                }`}
              >
                {serviceItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={toggleMenu}
                    className="block px-12 py-2 hover:bg-gray-50"
                    style={{ 
                      fontFamily: theme.fonts.body,
                      color: location.pathname === item.path ? theme.colors.secondary : theme.colors.primary,
                      fontWeight: location.pathname === item.path ? '600' : 'normal'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              to="/Our-Lawyers" 
              onClick={toggleMenu}
              className="px-6 py-3 font-medium"
              style={{ 
                color: location.pathname === '/Our-Lawyers' ? theme.colors.secondary : theme.colors.primary,
                fontFamily: theme.fonts.body
              }}
            >
              OUR LAWYERS
            </Link>

            <Link 
              to="/Get-Free-Consultation" 
              onClick={toggleMenu}
              className="px-6 py-3 font-medium"
              style={{ 
                color: location.pathname === '/Get-Free-Consultation' ? theme.colors.secondary : theme.colors.primary,
                fontFamily: theme.fonts.body
              }}
            >
               GET FREE CONSULTATION
            </Link>

              <Link 
              to="/About-Us" 
              onClick={toggleMenu}
              className="px-6 py-3 font-medium"
              style={{ 
                color: location.pathname === '/About-Us' ? theme.colors.secondary : theme.colors.primary,
                fontFamily: theme.fonts.body
              }}
            >
             ABOUT US
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;