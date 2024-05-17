import React, { useState, useRef } from 'react';
import './PriceCalculator.css'
import QuestionIcon from '../../assets/QuestionIcon.svg'

const PriceCalculator = () => {
    const [formErrors, setFormErrors] = useState({});
    const [fileName, setFileName] = useState('Choose file (.STL)...');
    const fileInputRef = useRef(null);
    const [price, setPrice] = useState('--€');

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (!section) return;
      
        // Calculate the position of the section
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        console.log('Section ID:', sectionId, 'Section Top:', sectionTop);
    
        // Define the smooth scroll function
        const smoothScroll = (targetPosition) => {
          const startPosition = window.pageYOffset;
          const distance = targetPosition - startPosition;
          const duration = 800; // Duration of the scroll animation in milliseconds
          let startTime = null;
      
          const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const nextScrollPosition = ease(timeElapsed, startPosition, distance, duration);
      
            window.scrollTo(0, nextScrollPosition);
      
            if (timeElapsed < duration) requestAnimationFrame(animation);
          };
      
          const ease = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
          };
      
          requestAnimationFrame(animation);
        };
      
        // Execute the smooth scroll function
        smoothScroll(sectionTop);
      };


    function parseSTLFile(file) {

        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = (e) => {
                const arrayBuffer = e.target.result;
                const bytes = new Uint8Array(arrayBuffer);
    
                // Check for ASCII format by scanning the first bit of file content
                const isAscii = /solid\s/.test(String.fromCharCode.apply(null, bytes.subarray(0, 5)));
                if (isAscii) {
                    reject('ASCII STL files are not supported in this example.');
                    return;
                }
    
                // Binary STL format parsing
                let volume = 0;
                const numTriangles = (new DataView(arrayBuffer, 80, 4)).getUint32(0, true);
                let offset = 84;
    
                for (let i = 0; i < numTriangles; i++) {
                    const v1 = readVector(bytes, offset + 12);
                    const v2 = readVector(bytes, offset + 24);
                    const v3 = readVector(bytes, offset + 36);
                    const triangleVolume = signedVolumeOfTriangle(v1, v2, v3);
                    volume += triangleVolume;
                    offset += 50; // Move to the next triangle block
                }
    
                resolve(Math.abs(volume));
            };
    
            reader.onerror = (err) => {
                reject(err);
            };
    
            reader.readAsArrayBuffer(file);
        });
    }
    
    function readVector(bytes, index) {
        const dv = new DataView(bytes.buffer, index, 12);
        return {
            x: dv.getFloat32(0, true),
            y: dv.getFloat32(4, true),
            z: dv.getFloat32(8, true)
        };
    }
    
    function signedVolumeOfTriangle(v1, v2, v3) {
        return (v1.x * (v2.y * v3.z - v2.z * v3.y) +
                v1.y * (v2.z * v3.x - v2.x * v3.z) +
                v1.z * (v2.x * v3.y - v2.y * v3.x)) / 6;
    }
    const [formData, setFormData] = useState({
      email: '',
      printingType: 'FDM', 
      message: '',
      file: null,
    });
  
  
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
        e.preventDefault();
    };
    
  

    const calculatePrice = () => {
        if (!formData.file) {
            alert("Please upload a file.");
            return;
        }
        parseSTLFile(formData.file).then(volume => {
            // Example pricing adjustments
            const basePricePerCubicMM = 0.00002; // Base price per cubic mm might need to be much lower
            const slaMultiplier = 67.1; // Hypothetical multiplier for SLA to account for higher material and processing costs
            const fdmMultiplier = 28.3; // Standard multiplier for FDM
    
            let materialMultiplier = formData.printingType === 'SLA' ? slaMultiplier : fdmMultiplier;
            let effectiveVolume = volume * 0.3; // Assuming 40% of the volume is the actual material used (60% infill + supports)
    
            const calculatedPrice = effectiveVolume * basePricePerCubicMM * materialMultiplier;
            const price_min = calculatedPrice * 0.85;
            const price_max = calculatedPrice * 1.15;

            setPrice(`${price_min.toFixed(2)} -  ${price_max.toFixed(2)} €`);
        }).catch(error => {
            alert("Error processing STL file: " + error);
        });
    };


    const handleButtonClick = (e) => {
      // Prevent default form submission if the button is within a form
      e.preventDefault();
      // Trigger click on the actual file input
      fileInputRef.current.click();
    };
  
  
    return (
      <div className="price-calculator" id='price'>
        <div className='how-heading'> 
            <h2 className='headline-gallery'>Price calculator</h2>
            <p>Use our free STL Price Calculator to quickly find out how much it costs to 3D print your model in Cyprus. Just upload your .STL file, select SLA or FDM 3D printing technology, and hit "Calculate" to see the price. Our tool makes it easy to get estimates for 3D printing projects, whether you're using detailed SLA or durable FDM methods.</p>
        </div>
        <div className='price-calculator-container'>
            <form className="contact-form" onSubmit={handleSubmit} enctype="multipart/form-data" >
            <p>Upload your 3D model</p>
            <div className="file-upload">
                <input
                id="file"
                type="file"
                name="file"
                className="inputfile"
                onChange={handleFileChange}
                accept=".stl"
                ref={fileInputRef} // Add this line to reference the input
                style={{ display: 'none' }} // Hide the actual file input
                />
                <label htmlFor="file" className="file-upload-label">
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
                    value="FDM"
                    checked={formData.printingType === 'FDM'}
                    onChange={handleChange}
                />
                FDM
                </label>

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
              
                <img style={{cursor: 'pointer'}} onClick={() => scrollToSection('types')} src={QuestionIcon} alt='3D Printing types' />

                
            </div>
    
            <button type="submit" onClick={calculatePrice} className="submit-button">Calculate</button>
            </form>

            <div className='price-container'>
                <h6> Approximate price:</h6>
                {price && <div className='estimated-price'>{price}</div>}
                <p>Be aware that actual prices can vary, depending on different materials, production difficulties, etc. To recieve the evaluation of the costs for your model please fill up the form in the contact section</p>
            </div>

        </div>
      </div>
    )
  }
  

export default PriceCalculator