import React from 'react';
import './PrintTypes.css';
import SLA from '../../assets/SLA.jpg';
import FDM from '../../assets/FDM.jpg';

const PrintTypes = () => {
  return (
    <div className='print-types'>
        <div className='sla-container'>
            <div className='sla-text-container'> 
              <h6>SLA 3D Printing</h6>
              <p>Welcome to the world of SLA printing magic! Here, dreams take shape as liquid resin solidifies under the mesmerizing glow of ultraviolet light. With precision that'll make your dentist question their skills. So, get ready to witness your imagination come to life with every layer!</p>
            </div>
            <div className='sla-image-container'> {/* Corrected class name */}
              <img src={SLA} alt='SLA printer'/>
            </div>
        </div>

        <h1>VS</h1>

        <div className='fdm-container'>
          <div className='fdm-image-container'> {/* Corrected class name */}
            <img src={FDM} alt='FDM printer'/>
          </div>
          <div className='fdm-text-container'> 
              <h6>FDM 3D Printing</h6>
              <p>Now, meet the FDM printing powerhouse! Its DIY delight meets superhero strength as thermoplastic filaments weave wonders layer by layer. Need a prototype for doomsday or a gadget to amaze your cat? FDM's got your back. So, get ready for a wild ride where creativity reigns supreme!</p>
          </div>
        </div>
    </div>
  );
}

export default PrintTypes;
