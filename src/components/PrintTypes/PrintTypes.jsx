import React from 'react';
import './PrintTypes.css';
import SLA from '../../assets/SLA.webp';
import FDM from '../../assets/FDM.webp';

const PrintTypes = () => {
  return (
    <div className='print-types' id='types'>
        <div className='sla-container'>
            <div className='sla-text-container'> 
              <h2>What is SLA 3D Printing?</h2>
              <p>SLA (Stereolithography) 3D Printing uses ultraviolet light to harden precisely liquid resin into high-quality solid objects. SLA produces detailed models with smooth finishes.</p>
              <p><strong>Examples of implementation:</strong> miniatures and figurines, highly detailed models an mechanisms, jewelry</p>
              <ul>
                <li>High surface quality and detail</li>
                <li>Minimal post-processing required</li>
                <li>High cost</li>
              </ul>
            </div>
            <div className='sla-image-container'>
              <img src={SLA} alt='SLA printer' loading='lazy'/>
            </div>
        </div>

        <h3>VS</h3>

        <div className='fdm-container'>
          <div className='fdm-image-container'>
            <img src={FDM} alt='FDM printer' loading='lazy'/>
          </div>
          <div className='fdm-text-container'> 
              <h2>What is FDM 3D Printing?</h2>
              <p>FDM (Fused Deposition Modeling) 3D Printing builds objects by heating and extruding plastic through a small nozzle, layer by layer. FDM produces durable objects using a variety of materials.</p>
              <p><strong>Examples of application:</strong> prototypes, casings and shells, cosplay costume elements</p>
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
