import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { toggleTheme } = useContext(ThemeContext);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-xl">{t('global.welcome')}</h1>
      <div className='flex flex-wrap gap-2'>
        <button
          className="py-2 px-4 bg-gray-500 hover:bg-gray-700 transition duration-300 text-white rounded"
          onClick={() => changeLanguage('en')}
        >
          EN
        </button>
        <button
          className="py-2 px-4 bg-gray-500 hover:bg-gray-700 transition duration-300 text-white rounded"
          onClick={() => changeLanguage('es')}
        >
          ES
        </button>
        <button
          className="py-2 px-4 bg-gray-500 hover:bg-gray-700 transition duration-300 text-white rounded"
          onClick={toggleTheme}
        >
          {t("global.darkLight")}
        </button>
      </div>
    </div>
  );
};

export default Header;
