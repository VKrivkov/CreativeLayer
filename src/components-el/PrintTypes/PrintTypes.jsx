import React from 'react';
import './PrintTypes.css';
import SLA from '../../assets/SLA.webp';
import FDM from '../../assets/FDM.webp';

const PrintTypes = () => {
  return (
    <div className='print-types' id='types'>
        <div className='sla-container'>
            <div className='sla-text-container'> 
              <h2>Τι είναι η 3D εκτύπωση SLA;</h2>
              <p>Η εκτύπωση 3D με τη μέθοδο SLA (Στερεολιθογραφία) χρησιμοποιεί υπεριώδες φως για να σκληρύνει ακριβώς υγρό ρητίνης σε υψηλής ποιότητας στερεά αντικείμενα. Η SLA παράγει λεπτομερή μοντέλα με ομαλές επιφάνειες.</p>
              <p><strong>Παραδείγματα υλοποίησης:</strong> μινιατούρες και φιγούρες, υψηλής λεπτομέρειας μοντέλα και μηχανισμοί, κοσμήματα</p>
              <ul>
                <li>Υψηλή ποιότητα επιφάνειας και λεπτομέρειας</li>
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
              <h2>Τι είναι η 3D εκτύπωση FDM;</h2>
              <p>Η εκτύπωση 3D με τη μέθοδο FDM (Συγκολλητική Απόθεση Εκτύπωσης) κατασκευάζει αντικείμενα θέρμανσης και εκτόξευσης πλαστικού μέσω μιας μικρής ακονισμένης ακτίνας, στρώμα προς στρώμα. Η FDM παράγει ανθεκτικά αντικείμενα χρησιμοποιώντας μια ποικιλία υλικών.</p>
              <p><strong>Παραδείγματα εφαρμογής:</strong> πρωτότυπα, θήκες και καλύμματα, στοιχεία κοστουμιών cosplay</p>
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
