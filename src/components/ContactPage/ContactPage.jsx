import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import i18n from '../../i18n'; // Adjust the path to match where your i18n setup file is located
import './ContactPage.css';

function ContactPage() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const [formErrors, setFormErrors] = useState({});
  const [fileName, setFileName] = useState(t('contact.uploadSpan')); // Set initial state with translation
  const fileInputRef = useRef(null);

  useEffect(() => {
    const pathLng = location.pathname.split('/')[1]; // Get language code from URL
    const language = pathLng === 'el' ? 'el' : 'en';
    if (i18n.language !== language) {
      i18n.changeLanguage(language).then(() => {
        setFileName(t('contact.uploadLabel')); // Update file label after language change
      });
    }
  }, [location, i18n, t]); // React to changes in location, i18n instance, or translation function

  const [formData, setFormData] = useState({
    email: '',
    printingType: 'SLA', // Default to SLA
    message: '',
    file: null,
  });

  const handleInvalid = (e) => {
    e.preventDefault(); // Prevent the browser from showing default error bubble / hint
    const fieldName = e.target.name;
    let message = t('contact.validEmailMessage'); // Assuming you have a translation for this
    setFormErrors({ ...formErrors, [fieldName]: message });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file: file });
      setFileName(file.name);
    } else {
      setFormData({ ...formData, file: null });
      setFileName(t('contact.chooseFile'));  // Translation for default file label
    }
  };


  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent default form submission if the button is within a form
    fileInputRef.current.click(); // Trigger click on the actual file input
  };

  return (
    <div className="contact-form-container" id='contact'>
      <div className="contact-info">
        <h2 className='headline-gallery'>{t('contact.headline')}</h2>
        <div className='contact-text-block'>
          <a href='https://t.me/CreativeLayer'><p><strong>Telegram:</strong> @CreativeLayer</p></a>
          <a href='https://wa.me/35797816242'><p><strong>WhatsApp:</strong> https://wa.me/35797816242</p></a>
          <a href='https://www.instagram.com/lulupu.3d/'><p><strong>Instagram:</strong> https://www.instagram.com/lulupu.3d/</p></a>
        </div>
      </div>
      <h2>{t('contact.or')}</h2>  {/* Assuming 'or' is also translated */}

      <form className="contact-form2" action="https://formsubmit.co/073b02508c4ba23d7356487802268a1d" enctype="multipart/form-data" method="POST">
        <input type="hidden" name="_url" value="https://creative-layer.com/"></input>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'invalid' : ''}
          onInvalid={handleInvalid}
          placeholder={t('contact.emailPlaceholder')}
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        {formErrors.email && <div className="error-message">{formErrors.email}</div>}

        <p>{t('contact.uploadLabel')}</p>

        <div className="file-upload">
          <input
            id="attachment"
            type="file"
            name="attachment"
            className="inputfile"
            onChange={handleFileChange}
            accept=".stl"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <label htmlFor="attachment" className="file-upload-label">
            <span>{fileName}</span>
            <button type="button" onClick={handleButtonClick}>Browse</button>
          </label>
        </div>

        <div className='radio-buttons'>
          <label>
            <input
              type="radio"
              name="printingType"
              value="SLA"
              checked={formData.printingType === 'SLA'}
              onChange={handleChange}
            />
            {t('SLA')}
          </label>
          <label>
            <input
              type="radio"
              name="printingType"
              value="FDM"
              checked={formData.printingType === 'FDM'}
              onChange={handleChange}
            />
            {t('FDM')}
          </label>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={t('contact.messagePlaceholder')}
        ></textarea>

        <p>{t('contact.privacyPolicy')}</p>
        <button type="submit" className="submit-button">{t('contact.submitButtonText')}</button>
      </form>
    </div>
  );
}

export default ContactPage;
