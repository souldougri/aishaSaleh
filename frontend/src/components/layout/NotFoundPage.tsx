import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container-custom py-20 text-center">
      <h1 className="text-6xl font-serif font-bold text-primary-700 mb-4">404</h1>
      <h2 className="text-3xl font-serif font-bold text-gray-800 mb-6">{t('notFound')}</h2>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        {t('notFoundMessage', 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.')}
      </p>
      <Link
        to="/"
        className="btn-primary inline-flex items-center"
      >
        {t('backToHome')}
      </Link>
    </div>
  );
};

export default NotFoundPage;
