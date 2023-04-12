import React, { useRef } from 'react'
import { Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import MediaCard from '../components/MediaCard'
import linkedin1 from '../images/linkedin1.jpeg'
import ig from '../images/ig.jpeg'
import twitter1 from '../images/twitter1.jpeg'
import tessy from '../images/tessy.jpeg'
import emailjs from '@emailjs/browser';

function MyPage() {
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
    <div className='bacground' >
      <div className='navbar'>
     <h2>Port<span className='folio'>folio</span></h2>
     </div>

     <div className='myname'>
      <div className='hello'>
        <p>Hello, I'm</p>
        <h1>Omokpo Theresa Olere</h1>
        <p>Web Developer</p>
        <NavLink to='/contact'>
        <Button>Contact Me</Button>
        </NavLink>
      </div>
      <div >
        <img src={tessy} alt='' className='tessy-pic' />
      </div>
     </div>

     <div className='about'>
      <div className='aboutme'>
        <h2>About Me</h2>
        <hr />
      </div>
      
      <div className='whoiam'>
        <h3>Who I Am?</h3>
        <p>I am a lifelong learner with a passion for reading and traveling. I approach every challenge with a can-do attitude and a belief that I can find a solution. 
          What sets me apart is my ability to think outside the box and come up with creative solutions to problems. In my free time, I enjoy woodworking and have even taught myself how to make furniture with little guidance. My ultimate goal is to become a renowned website developer, combining my problem-solving skills with my love of technology.</p>
          <a href ='Omokpo Theresa (1).pdf' download='Omokpo Theresa.pdf'><Button>Download Resume</Button></a>
      </div>
      
     </div>

<div className='creative-div'>
  <div className='creative-skill'>
    <h1>My creative skills</h1>
    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus optio quibusdam ducimus tempora ullam dolorum, neque exercitationem consectetur. 
      Sit ducimus voluptas laudantium, a vero dicta dignissimos amet eligendi omnis praesentium?</p> */}
  </div>
  <div className='percentage'>
    <div className='percent'> 
    <h1>80%</h1>
    <p>HTML</p>
    </div>
    <div className='percent'>
    <h1>70%</h1>
    <p>CSS</p>
    </div>
    <div className='percent'>
    <h1>70%</h1>
    <p>JAVASCRIPT</p>
    </div>
    <div className='percent'>
    <h1>60%</h1>
    <p>REACT</p>
    </div>
    <div className='percent'>
    <h1>50%</h1>
    <p>NODE.JS/EXPRESS</p>
    </div>
  </div>
</div>

<div className='project-div'>
  <div className='projects'>
    <h1>PROJECTS</h1>
  </div>
  <MediaCard />
</div>

<div className='contact'>
  <div className='contact-div'>
  <h1>Contact Me</h1>
  <hr className='HR'/>
  <h2>Message <span className='folio'>Me</span></h2>
  <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="to_name" placeholder='Name' className='form-input'/><br />
      <input type="email" name="from_email" placeholder='Email' className='form-input'/><br />
      <textarea name="message" placeholder='Message' className='form-textarea'/><br />
      <input className='form-btn' type="submit" value="Send" />
    </form>
  
</div>
<div className='get-in-touch'>
  <h4>Get in Touch</h4>
  <div className='social-media'>
  <Link to='https://www.linkedin.com/in/theresa-omokpo-062bb91a2'>
    <img src={linkedin1} alt='linkedin' className='linkedin-img' />
    </Link>
    <Link to='https://instagram.com/omokpotessy?igshid=ZDdkNTZiNTM='>
    <img src={ig} alt='' className='linkedin-img' />
    </Link>
    <Link to='https://twitter.com/Tess_Olere?t=SPEbFod3VtDKhIwdDUoD0Q&s=09'>
    <img src={twitter1} alt='twitter' className='linkedin-img1'/>
    </Link>
  </div>
</div>
</div>
    </div>
  )
}

export default MyPage