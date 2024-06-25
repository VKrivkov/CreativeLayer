import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './ThanxPage.css';

const ThanxPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const lang = queryParams.get('lang');
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Perform any language-specific operations here if needed
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    console.log(`Language parameter: ${lang}`);
  }, [lang, i18n]);

  return (
    <div className='thanx-container' style={{height: '100vh', display : 'flex', flexWrap:'wrap', alignItems : 'flex-start', justifyContent : 'center', backgroundImage: "url('https://creative-layer.com/assets/BG7-BBeKZiiJ.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='how-heading'>
        <div className='headline-gallery'>
          <h2>{t('thanx.thanksMessage')}</h2>
        </div>      

        <h6>{t('thanx.confirmationMessage')}</h6>

        <div className='thanx-contact' style={{fontSize : '18px', color : '#f5f5f5', fontFamily:'Inter', fontWeight : '400', display:'flex', flexDirection:'column', alignItems : 'flex-start',textAlign:'left'}}>
          <a href='https://t.me/CreativeLayer'><p><strong>Telegram:</strong> @CreativeLayer</p></a>
          <a href='https://wa.me/35797816242'><p><strong>WhatsApp:</strong> https://wa.me/35797816242</p></a>
          <a href='https://www.instagram.com/creative_layer_3d/'><p><strong>Instagram:</strong> https://www.instagram.com/creative_layer_3d/</p></a>
        </div>

        <a href='/' style={{fontSize : '20px', fontFamily:'Inter', fontWeight : '500', textAlign:'center', margin:'50px 0px 0px 0px', color : '#E99F0E'}}><strong>{t('thanx.goHome')}</strong></a>
      </div>
    </div>
  )
}

export default ThanxPage;

