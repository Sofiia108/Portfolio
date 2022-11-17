import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail} from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3vo5npz', 'template_35b4p7q', form.current, 'AEXabhfXBzQe0cedx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sofia.masliak@gmail.com</h5>
            <a href='mailto:sofia.masliak@gmail.com' target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>Sofia Masliak</h5>
            <a href="https://www.linkedin.com/in/sofia-masliak" target="_blank">Send a message</a>
          </article>

        </div>
        {/* End of options */}
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact