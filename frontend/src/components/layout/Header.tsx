import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars, FaTimes } from 'react-icons/fa';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-primary-700">عائشـة صالـح</span>
            <span className="ml-2 text-sm text-gray-600">Aisha Saleh</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`font-medium ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              } transition duration-300`}
            >
              {t('about')}
            </Link>
            <Link
              to="/resume"
              className={`font-medium ${
                isActive('/resume') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              } transition duration-300`}
            >
              {t('resume')}
            </Link>
            <Link
              to="/portfolio"
              className={`font-medium ${
                isActive('/portfolio') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              } transition duration-300`}
            >
              {t('portfolio')}
            </Link>
            <Link
              to="/gallery"
              className={`font-medium ${
                isActive('/gallery') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              } transition duration-300`}
            >
              {t('gallery')}
            </Link>
            <Link
              to="/contact"
              className={`font-medium ${
                isActive('/contact') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              } transition duration-300`}
            >
              {t('contact')}
            </Link>
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-medium ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                } transition duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <Link
                to="/resume"
                className={`font-medium ${
                  isActive('/resume') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                } transition duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('resume')}
              </Link>
              <Link
                to="/portfolio"
                className={`font-medium ${
                  isActive('/portfolio') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                } transition duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('portfolio')}
              </Link>
              <Link
                to="/gallery"
                className={`font-medium ${
                  isActive('/gallery') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                } transition duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('gallery')}
              </Link>
              <Link
                to="/contact"
                className={`font-medium ${
                  isActive('/contact') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
                } transition duration-300`}
                onClick={() => setIsMenuOpen(false)}
              >
                {t('contact')}
              </Link>
              <div className="pt-2">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
