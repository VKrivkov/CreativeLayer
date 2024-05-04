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
        <h2 className='headline-gallery'>Πώς λειτουργεί;</h2>
        <p>Υποβάλετε το μοντέλο σας, επιβεβαιώστε την παραγγελία, και θα χειριστούμε την εκτύπωση 3D. Απλό και αποτελεσματικό, το στούντιο μας εξασφαλίζει ποιοτικά αποτελέσματα κάθε φορά. Ξεκινήστε την εκτύπωση 3D στην Κύπρο σήμερα — αποτελεσματικά, αξιόπιστα και τοπικά. Αν χρειάζεστε βοήθεια ή έχετε ερωτήσεις, επικοινωνήστε μαζί μας.</p>
      </div>
      <div className='cards-container'>
        <Card
            img = {UploadIcon}
            alt = "Υποβολή του 3D μοντέλου"
            h = 'Υποβάλλετε το 3D μοντέλο'
            // p = "Δημιουργήστε το 3D μοντέλο σας, ή κατεβάστε το και ανεβάστε το αρχείο εκτύπωσης 3D στη φόρμα μας παρακάτω. Δεν έχετε ένα αρχείο 3D; Μπορούμε να βοηθήσουμε."
            num = '1'
        /> 
        <Card
            img = {PriceIcon}
            alt = "Λήψη τιμής και επιβεβαίωση παραγγελίας"
            h = 'Επιβεβαίωση της παραγγελίας'
            // p = 'Θα σας δώσουμε μια τιμή βασισμένη στο 3D μοντέλο σας και το υλικό που επιλέγετε.'
            num = '2'
        />  
        <Card
          img = {InvoiceIcon}
          alt = "Διαδικασία εκτύπωσης 3D"
          h = 'Διαδικασία εκτύπωσης 3D'
          // p = 'Με τις υπηρεσίες μας εκτύπωσης 3D δημιουργούμε το 3D μοντέλο σας και επεξεργαζόμαστε το προϊόν σας.'
          num = '3'
        /> 
        <Card
          img = {RecieveIcon}
          alt = "Παραλαβή του εκτυπωμένου μοντέλου"
          h = 'Παραλαβή του μοντέλου'
          // p = 'Η εκτύπωση σας 3D είναι έτοιμη και μπορείτε να την παραλάβετε από τον κοντινότερο σας προορισμό πανέτοιμη για χρήση.'
          num = '4'
        /> 
        </div>
    </div>
  )
}

export default HowItWorks
