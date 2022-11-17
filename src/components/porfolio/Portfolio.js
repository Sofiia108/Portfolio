import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [

  {
    id: 1, 
    image: IMG1,
    title: 'Cursor Frontend Course',
    github: "https://github.com/Sofiia108/Sofiia108.github.io",
    //demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
  },
  {
    id: 2,
    image: IMG2, 
    title: 'SoftServe React Marathon',
    github: "https://github.com/Sofiia108/softserve-react-marathon-2021",
    demo: "https://dribbble.com/shots/16588766-Orion-UI-kit-Charts-templates-infographics-in-Figma"
  },
  {
    id: 3, 
    image: IMG3,
    title: 'React Hooks Project',
    github: "https://github.com", 
    demo: "https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-Ul-kit-for-data-design-web-apps"
  },

];


const Portfolio = () => {
  return (
    <section id='portfolio'>
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>

          <div className="container portfolio__container">
            {
              data.map(({id, image, title, github, demo}) => {
                return(
                  <article className='portfolio__item'>
                  <div className="portfolio__item-image">
                    <img src={image} alt={title}/>
                  </div>
                    <h3 className='portfolio__item-text'>{title}</h3>
                    <div className="portfolio__item-cta">
                      <a href={github} className='btn' target={demo}>Github</a>
                    </div>
                </article>
                ) 
              })
            }
            
          </div>
        </section>
  
    
  )
}

export default Portfolio