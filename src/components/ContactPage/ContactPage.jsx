import React, { useState, useRef } from 'react';
import './ContactPage.css'


function ContactPage() {
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState('Choose file...');
  const fileInputRef = useRef(null);


  const [formData, setFormData] = useState({
    email: '',
    printingType: 'SLA', // Default to SLA
    message: '',
    file: null,
  });

  const handleInvalid = (e) => {
    e.preventDefault(); // Prevent the browser from showing default error bubble / hint
    const fieldName = e.target.name;
    let message = `contact.errors.${fieldName}`;
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
      setFileName('Choose file...');
    }
  };

  const handleSubmit = async (e) => {
  };
  

     

  const handleButtonClick = (e) => {
    // Prevent default form submission if the button is within a form
    e.preventDefault();
    // Trigger click on the actual file input
    fileInputRef.current.click();
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


        <form className="contact-form2" onSubmit={handleSubmit} action="https://formsubmit.co/0f7a399f9b3d9f7d41d894007f0f80f8" encType="multipart/form-data" method="POST">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={formErrors.email ? 'invalid' : ''}
          onInvalid={handleInvalid}
          placeholder='Enter your email'
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        {formErrors.email && <div className="error-message">{formErrors.email}</div>}

        <div className="file-upload">
          <input
            id="attachment"
            type="file"
            name="attachment"
            className="inputfile"
            onChange={handleFileChange}
            ref={fileInputRef} // Add this line to reference the input
            style={{ display: 'none' }} // Hide the actual file input
          />
          <label htmlFor="attachment" className="file-upload-label">
            <span>{fileName}</span>
            {/* Attach the click handler to the button */}
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
            SLA
          </label>
          <label>
            <input
              type="radio"
              name="printingType"
              value="FDM"
              checked={formData.printingType === 'FDM'}
              onChange={handleChange}
            />
            FDM
          </label>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder='Type your message here'
        ></textarea>

        

        <button type="submit" className="submit-button">Submit</button>
        {isSubmitted && <div className="success-popup">Thank you for your submission!</div>}
      </form>
    </div>
  )
}

export default ContactPage