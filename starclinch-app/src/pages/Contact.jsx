import React from 'react'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div id='contact-title'>
      <h2 >Contact Us</h2>
      </div>
       
      <p>Please feel free to get in touch with us if you have any questions or comments.</p>
      <div className="contact-info">
        <div className="contact-info-item">
          <h3>Address:</h3>
          <p>123 Main Street<br />Okhla Industries<br />Delhi, 110044 (India)</p>
        </div>
        <div className="contact-info-item">
          <h3>Phone:</h3>
          <p>+91 7042 88 4270</p>
        </div>
        <div className="contact-info-item">
          <h3>Email:</h3>
          <p>info@starclinch.com</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
