import React from 'react';
import './PrintTypes.css';
import SLA from '../../assets/SLA.webp';
import FDM from '../../assets/FDM.webp';

const PrintTypes = () => {
  return (
    <div className='print-types' id='types'>
        <div className='sla-container'>
            <div className='sla-text-container'> 
              <h6>Εκτύπωση SLA 3D</h6>
              <p>Η εκτύπωση SLA παράγει λεπτομερή μοντέλα με λείες επιφάνειες, ιδανικά για ακριβή πρωτότυπα, εξυπηρετώντας πελάτες που αναζητούν ποιότητα και ακρίβεια.</p>
              <p><strong>Παραδείγματα εφαρμογής:</strong> μινιατούρες και γλυπτά, πρωτότυπα εξαρτημάτων και μηχανισμών, κοσμήματα</p>
              <ul>
                <li>Υψηλή ποιότητα επιφάνειας και λεπτομέρεια</li>
                <li>Ελάχιστη μετεπεξεργασία απαιτείται</li>
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
              <h6>Εκτύπωση FDM 3D</h6>
              <p>Η εκτύπωση FDM προσφέρει ευελιξία, οικονομικότητα και αντοχή, καλύπτοντας έργα που απαιτούν ροπή, λειτουργικά πρωτότυπα και τελικά εξαρτήματα.</p>
              <p><strong>Παραδείγματα εφαρμογής:</strong> γρανάζια και μηχανικά εξαρτήματα, καλύμματα και θήκες, στοιχεία κοστουμιών cosplay</p>
              <ul>
                <li>Ευρεία γκάμα υλικών διαθέσιμη</li>
                <li>Δυνατότητα εκτύπωσης μεγάλων αντικειμένων</li>
                <li>Οικονομικότητα υλικών</li>
              </ul>

          </div>
        </div>
    </div>
  );
}

export default PrintTypes;
