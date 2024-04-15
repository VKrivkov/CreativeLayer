import React, { useState, useRef } from 'react';
import './PriceCalculator.css'

const PriceCalculator = () => {
    const [formErrors, setFormErrors] = useState({});
    const [fileName, setFileName] = useState('Choose file (.STL)...');
    const fileInputRef = useRef(null);
    const [price, setPrice] = useState('--$');

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
      printingType: 'SLA', // Default to SLA
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
    
            // Adjusting price calculation for a more realistic pricing
            const calculatedPrice = effectiveVolume * basePricePerCubicMM * materialMultiplier;
            setPrice(`${calculatedPrice.toFixed(2)} $`);
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
            <h1 className='headline-gallery'>Price calculator</h1>
            <p>  Use our STL Price Calculator to get an estimated cost for 3D printing your model. Simply upload your .STL file, select the printing technology (SLA or FDM), and click "Calculate" to see an approximate price.</p>
        </div>
        <div className='price-calculator-container'>
            <form className="contact-form" onSubmit={handleSubmit} enctype="multipart/form-data" >
    
            <div className="file-upload">
                <input
                id="attachment"
                type="file"
                name="attachment"
                className="inputfile"
                onChange={handleFileChange}
                accept=".stl"
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
    
            <button type="submit" onClick={calculatePrice} className="submit-button">Calculate</button>
            </form>

            <div className='price-container'>
                <h6> Estimated price:</h6>
                {price && <div className='estimated-price'>{price}</div>}
                <p>Be aware that the provided calculator just allows to have the understanding of the costs. Actual prices can vary, depending on different materials, production difficulties, etc</p>
            </div>

        </div>
      </div>
    )
  }
  

export default PriceCalculator