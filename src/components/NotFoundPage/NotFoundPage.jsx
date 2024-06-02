import React from 'react'
import './NotFoundPage.css'

const NotFoundPage = () => {
  return (
    <div className='not-found-container' style={{height: '100vh', display : 'flex', flexWrap:'wrap', alignItems : 'flex-start', justifyContent : 'center', backgroundImage: "url('https://creative-layer.com/assets/BG7-BBeKZiiJ.webp')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className='how-heading'>
        <div className='main-page-headline'>
          <h2>404</h2>
        </div>      

        <h3 style={{fontSize : '24px', color : '#f5f5f5', fontFamily:'Inter', fontWeight : '500', textAlign:'center', margin:'25px 0px 10px 0px'}}>PAGE NOT FOUND </h3>

        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>

        <a href='/' style={{fontSize : '24px', fontFamily:'Inter', fontWeight : '500', textAlign:'center', margin:'15px', color : '#E99F0E'}}><strong>Go to home page</strong></a>

      </div>
    </div>
  )
}

export default NotFoundPage