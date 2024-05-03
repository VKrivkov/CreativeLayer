import React from 'react';
import './PrintTypes.css';
import SLA from '../../assets/SLA.webp';
import FDM from '../../assets/FDM.webp';

const PrintTypes = () => {
  return (
    <div className='print-types' id='types'>
        <div className='sla-container'>
            <div className='sla-text-container'> 
              <h6>Εκτύπωση 3D SLA</h6>
              <p><strong>Παραδείγματα εφαρμογής:</strong> μινιατούρες και γλυπτά, πρωτότυπα μερών και μηχανισμών, κοσμήματα</p>
              <ul>
                <li>Υψηλή ποιότητα επιφάνειας και λεπτομέρεια</li>
                <li>Ελάχιστη μεταεπεξεργασία απαιτείται</li>
                <li>Υψηλό κόστος</li>
              </ul>
            </div>
            <div className='sla-image-container'>
              <img src={SLA} alt='Εκτυπωτής SLA' loading='lazy'/>
            </div>
        </div>

        <h3>VS</h3>

        <div className='fdm-container'>
          <div className='fdm-image-container'>
            <img src={FDM} alt='Εκτυπωτής FDM' loading='lazy'/>
          </div>
          <div className='fdm-text-container'> 
              <h6>Εκτύπωση 3D FDM</h6>
              <p><strong>Παραδείγματα εφαρμογής:</strong> γρανάζια και μηχανικά μέρη, καλύμματα και κελύφη, στοιχεία κοσπλέι</p>
              <ul>
                <li>Ευρύ φάσμα υλικών διαθέσιμο</li>
                <li>Δυνατότητα εκτύπωσης μεγάλων αντικειμένων</li>
                <li>Οικονομικότητα των υλικών</li>
              </ul>

          </div>
        </div>
    </div>
  );
}

export default PrintTypes;
