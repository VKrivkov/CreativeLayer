import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import i18n from '../../i18n'; // Adjust the path to match where your i18n setup file is located
import './ContactPage.css';

function ContactPage() {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate
  const [formErrors, setFormErrors] = useState({});
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
    name: '',
    email: '',
    social: '',
    message: '',
  });

  const handleInvalid = (e) => {
    e.preventDefault(); // Prevent the browser from showing default error bubble / hint
    const fieldName = e.target.name;
    let message = '';
    if (!e.target.validity.valid) {
      switch (fieldName) {
        case 'email':
          message = t("contact.errors.validEmail");
          break;
        case 'name':
          message = t("contact.errors.name");
          break;
        default:
          message = t("contact.errors.requiredField");
      }
    }
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'a99d58fa-0bd2-4d30-bec0-983f190c3bd2');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('social', formData.social);
    formDataToSend.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const currentLanguage = i18n.language;
        navigate(`/thanks?lang=${currentLanguage}`); // Navigate to the Thank You page with language parameter
      } else {
        // Handle the error
        console.error('Form submission error:', response);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
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

      <form className="contact-form2" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="a99d58fa-0bd2-4d30-bec0-983f190c3bd2"/>
        <input type="hidden" name="_url" value="https://creative-layer.com/"></input>
        <input
          type="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={formErrors.name ? 'invalid' : ''}
          onInvalid={handleInvalid}
          placeholder={t('contact.namePlaceholder')}
          required
        />
        {formErrors.name && <div className="error-message">{formErrors.name}</div>}

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
        <input
          type="social"
          name="social"
          value={formData.social}
          onChange={handleChange}
          className={formErrors.social ? 'invalid' : ''}
          onInvalid={handleInvalid}
          placeholder={t('contact.socialPlaceholder')}
          pattern="^@\w+$"
        />

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
