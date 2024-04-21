import React from 'react';
import './PrintTypes.css';
import SLA from '../../assets/SLA.webp';
import FDM from '../../assets/FDM.webp';

const PrintTypes = () => {
  return (
    <div className='print-types' id='types'>
        <div className='sla-container'>
            <div className='sla-text-container'> 
              <h6>SLA 3D Printing</h6>
              <p><strong>Examples of implementation:</strong> miniatures and figurines, prototypes of parts and mechanisms, jewelry</p>
              <ul>
                <li>High surface quality and detail</li>
                <li>Minimal post-processing required</li>
                <li>High cost</li>
              </ul>
            </div>
            <div className='sla-image-container'> {/* Corrected class name */}
              <img src={SLA} alt='SLA printer' loading='lazy'/>
            </div>
        </div>

        <h1>VS</h1>

        <div className='fdm-container'>
          <div className='fdm-image-container'> {/* Corrected class name */}
            <img src={FDM} alt='FDM printer' loading='lazy'/>
          </div>
          <div className='fdm-text-container'> 
              <h6>FDM 3D Printing</h6>
              <p><strong>Examples of application:</strong> gears and mechanical parts, casings and shells, cosplay costume elements</p>
              <ul>
                <li>Wide range of materials available</li>
                <li>Ability to print large objects</li>
                <li>Affordability of materials</li>
              </ul>

          </div>
        </div>
    </div>
  );
}

export default PrintTypes;
