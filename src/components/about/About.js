import React from 'react'
import './about.css'
import aboutMe from '../../assets/aboutMe.jpg'
import { FaAward } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
        <h5>Get to Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={aboutMe} alt='About image'/>
            </div>
          </div>

          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Bachelor's degree in Math</h5>
                <small>Lviv National Univercity</small>
              </article>
             
              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Frontend Courses</h5>
                <small>Cursor <br />SoftServe React Marathon</small>
              </article>
            </div>
            
            <p>
              Hello, I'm Sofia! <br />
            I'm young and motivated Frontend Developer with creative mind. 
            I've been into professional   classic music for a 10 years,
            but decided to have bachelor of math then to mix my art with more strategic mind.
            </p>
            
            <a href='#contact' className='btn btn-primary'>Let's talk</a>
          </div>
        </div>
    </section>
  )
}

export default About