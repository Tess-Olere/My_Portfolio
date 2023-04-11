import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function ContactPage() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qaq2f0j', 
    'template_p0a04j8', form.current, 
    '-U4YRK9kDsD-IvQdF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact-me'>
         <div className='navbar'>
     <h2>Port<span className='folio'>folio</span></h2>
     </div>
         <form ref={form} onSubmit={sendEmail} className='form1'>
      <input type="text" name="to_name" placeholder='Name' className='form-input'/><br />
      <input type="email" name="from_email" placeholder='Email' className='form-input'/><br />
      <textarea name="message" placeholder='Message' className='form-textarea'/><br />
      <input className='form-btn' type="submit" value="Send" />
    </form>
    </div>
  )
}
