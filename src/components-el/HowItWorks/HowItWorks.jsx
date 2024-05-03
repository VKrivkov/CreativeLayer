import React from 'react'
import './HowItWorks.css'
import UploadIcon from '../../assets/Upload.svg'
import PriceIcon from '../../assets/PriceIcon.svg'
import InvoiceIcon from '../../assets/InvoiceIcon.svg'
import RecieveIcon from '../../assets/RecieveIcon.svg'

import Card from './Card'

const HowItWorks = () => {
  return (
    <div className='how-it-works'>
      <div className='how-heading'> 
        <h2 className='headline-gallery'>Πώς λειτουργεί?</h2>
        <p> Υποβάλετε το μοντέλο σας, επιβεβαιώστε την παραγγελία, και εμείς θα χειριστούμε την εκτύπωση 3D. Απλό και αποτελεσματικό, το στούντιο μας εξασφαλίζει ποιοτικά αποτελέσματα κάθε φορά. Ξεκινήστε με την εκτύπωση 3D στην Κύπρο σήμερα - αποτελεσματική, αξιόπιστη και τοπική. Αν χρειάζεστε βοήθεια ή έχετε ερωτήσεις, απλά επικοινωνήστε μαζί μας.</p>
      </div>
      <div className='cards-container'>
        <Card
            img={UploadIcon}
            alt="Υποβολή του 3D μοντέλου"
            h='Υποβολή του μοντέλου'
            // p="Δημιουργήστε το 3D μοντέλο σας, ή κατεβάστε το και ανεβάστε το αρχείο εκτύπωσης 3D στη φόρμα μας παρακάτω. Δεν έχετε ένα αρχείο 3D; Μπορούμε να βοηθήσουμε."
            num='1'
        /> 
        <Card
            img={PriceIcon}
            alt="Λάβετε την τιμή και επιβεβαιώστε την παραγγελία"
            h='Επιβεβαίωση την παραγγελία'
            // p='Θα σας δώσουμε μια τιμή βασισμένη στο 3D μοντέλο σας και το υλικό που επιλέγετε.'
            num='2'
        />  
        <Card
          img={InvoiceIcon}
          alt="Διαδικασία εκτύπωσης 3D"
          h='Διαδικασία εκτύπωσης 3D'
          // p='Με τις υπηρεσίες εκτύπωσης 3D μας δημιουργούμε το 3D μοντέλο σας και επεξεργαζόμαστε το προϊόν σας.'
          num='3'
        /> 
        <Card
          img={RecieveIcon}
          alt="Παραλάβετε το εκτυπωμένο μοντέλο"
          h='Παραλάβετε το μοντέλο'
          // p='Η εκτύπωση 3D σας είναι έτοιμη και μπορείτε να την παραλάβετε από το πλησιέστερο σημείο παραλαβής, έτοιμη για χρήση.'
          num='4'
        /> 
        </div>
    </div>
  )
}

export default HowItWorks
