import React from 'react';
import './Gallery.css';
import GalleryComponent from './GalleryComponent.jsx';
import { images } from './images.js';

const Gallery = () => {

  return (
    <div id='gallery' className='gallery-container'>
      <div className='how-heading'>
        <h2 className='headline-gallery'>Προσαρμοσμένα μοντέλα</h2>
        <div className='text-block'>
          <p>Εάν χρειάζεστε ένα προσαρμοσμένο 3D μοντέλο, ο σχεδιαστής μας στην Κύπρο είναι εδώ για να σας βοηθήσει. Θα συνεργαστούμε μαζί σας για να διαμορφώσουμε τις ιδέες σας σε ένα έτοιμο για εκτύπωση 3D μοντέλο, προσαρμόζοντας τις ανάλογα με τις προτιμήσεις σας. Ελέγξτε παραδείγματα από την προηγούμενη εργασία μας παρακάτω για να δείτε τι μπορούμε να επιτύχουμε με το στούντιο εκτύπωσης 3D μας στην Κύπρο. Έχετε ερωτήσεις; Μη διστάσετε να επικοινωνήσετε.</p>
        </div>
      </div>

      <GalleryComponent images={images}/>
    </div>
  );
};

export default Gallery;
