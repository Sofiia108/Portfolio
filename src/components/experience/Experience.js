import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experince</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML & CSS</h4>
                <small className='text-light'>Experenced</small>
              </div> 
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experenced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experenced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Matherial UI</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Redux</h4>
              <small className='text-light'>Experenced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Next JS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
          </div>
        </div>

        
        <div className='experience__other'>
        <h3>Other Technologies</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>C#</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
             <div>
             <h4>Git</h4>
              <small className='text-light'>Experenced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Experenced</small>
             </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Phaser 3</h4>
              <small className='text-light'>Experenced</small>
             </div>
            </article>
          </div>
  
        </div>
  
      </div>



    </section>


  )
}

export default Experience