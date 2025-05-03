import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">عائشـة صالـح</h3>
            <p className="text-gray-300 mb-4">
              The Founder of Eta Media Production Company<br />
              News Presenter on tchad24_tv<br />
              trtarabi Correspondent 🇹🇩🇱🇾🇹🇷
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-primary-400 transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  {t('resume')}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  {t('portfolio')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  {t('gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary-400 transition duration-300">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">{t('contactInfo')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <strong>{t('email')}:</strong> aichasaleh2812@gmail.com
              </li>
              <li>
                <strong>{t('location')}:</strong> N'Djamena, Chad
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {currentYear} عائشـة صالـح (Aisha Saleh). {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
