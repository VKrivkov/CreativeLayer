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
        <h1 className='headline-gallery'>How it works?</h1>
        <p> This is an absolutely useless text, nobody will read it anyway. But if you're genuinely interested and the information below doesn't answer all your questions, please contact us.</p>
      </div>
      <div className='cards-container'>
        <Card
            img = {UploadIcon}
            h = 'Submit the model'
            // p = "Create your 3D model, or download it and upload the 3D print file to our upload form below. Don't have a 3D file? We can help."
            num = '1'
        /> 
        <Card
            img = {PriceIcon}
            h = 'Confirm the order'
            // p = 'We will give you a price based on your 3D model and the material you choose.'
            num = '2'
        />  
        <Card
          img = {InvoiceIcon}
          h = '3D Printing process'
          // p = 'With our 3D Printing services we create your 3D Model and post-process your product.'
          num = '3'
        /> 
        <Card
          img = {RecieveIcon}
          h = 'Pick-up the model'
          // p = 'Your 3D print is ready and you can pick it from your near pickup point ready to use.'
          num = '4'
        /> 
        </div>
    </div>
  )
}

export default HowItWorks