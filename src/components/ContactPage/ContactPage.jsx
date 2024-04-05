import React, { useState }  from 'react'
import './ContactPage.css'


function ContactPage() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleInvalid = (e) => {
    e.preventDefault(); // Prevent the browser from showing default error bubble / hint
    const fieldName = e.target.name;
    let message = '';
    if (!e.target.validity.valid) {
      switch (fieldName) {
        case 'email':
          message = "contact.errors.validEmail";
          break;
        case 'firstName':
          message = "contact.errors.firstName";
          break;
        case 'lastName':
          message = "contact.errors.lastName";
          break;
        case 'phoneNumber':
          message = "contact.errors.phoneNumber";
          break;
        default:
          message = "contact.errors.requiredField";
      }
    }
    setFormErrors({ ...formErrors, [fieldName]: message });
  };



  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    time: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreeToPrivacyPolicy: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Update the form data state
    setFormData({
      ...formData,
    });
  
    // Clear the error message for this input
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: "9dee5aad-0a3f-4497-a111-b9bb8e1a3219",
          ...formData,
        }),
      });
  
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form fields here if necessary
        setFormData({
          firstName: '',
          lastName: '',
          time: '',
          email: '',
          phoneNumber: '',
          message: '',
          agreeToPrivacyPolicy: true,
        });
        // Optionally hide the popup after some time
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        // Handle server errors or invalid responses
        alert("Submission failed, please try again.");
      }
    } catch (error) {
      // Handle network errors
      console.error("Error during submission:", error);
      alert("Submission failed, please check your internet connection and try again.");
    }
  };


  return (
    <div className="contact-form-container" id='contact'>
      <div className="contact-info">
        <h2>Contact me!</h2>
        <p><strong>Telegram:</strong> contactInfo.address</p>
        <p><strong>Email:</strong> contactInfo.phone'</p>
        <p><strong>Instagram:</strong> contactInfo.email'</p>
      </div>

      <h1>OR</h1>

      <form  className="contact-form2" onSubmit={handleSubmit}>
      <div className="input-row">
          <div>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={formErrors.firstName ? 'invalid' : ''}
              onInvalid={handleInvalid} // Add this prop to all inputs
              placeholder='contact.firstNamePlaceholder'
              required
            />
            {formErrors.firstName && <div className="error-message">{formErrors.firstName}</div>}
          </div>

          <div>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={formErrors.lastName ? 'invalid' : ''}
            onInvalid={handleInvalid} // Add this prop to all inputs
            placeholder='contact.lastNamePlaceholder'
            required
          />
            {formErrors.lastName && <div className="error-message">{formErrors.lastName}</div>}
          </div>
        </div>
      
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'invalid' : ''}
          onInvalid={handleInvalid} // Add this prop to all inputs
          placeholder='contact.emailPlaceholder'
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        {formErrors.email && <div className="error-message">{formErrors.email}</div>}


        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className={formErrors.phoneNumber ? 'invalid' : ''}
          onInvalid={handleInvalid} // Add this prop to all inputs

          placeholder='contact.phoneNumberPlaceholder'
          required
          pattern="\+?[0-9]{7,15}"

        />
        {formErrors.phoneNumber && <div className="error-message">{formErrors.phoneNumber}</div>}


        <input
          type="text"
          name="time"
          value={formData.time}
          onChange={handleChange}
          placeholder='contact.callTimePlaceholder'
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='contact.messagePlaceholder'

        ></textarea>

        <p>contact.privacyPolicy'</p>

        <button type="submit" className="submit-button">contact.submitButton'</button>
        {isSubmitted && <div className="success-popup"> contact.successMessage' </div>}

      </form>
    </div>
  )
}

export default ContactPage