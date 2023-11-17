import React from 'react'
import './about.scss'
const About = () => {
  return (
    <div className='about'>
      <div className="row">
        <div className="container">
          
            <div className="ab-img">
              <img src="./images/aboutimg.jpg" alt="" />
            </div>
        
          <div className="ab-img about-details">
            <p className='abt-title'>Professional </p>
            <h1>About  <span>US</span></h1>
            <p className='abt-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Beatae et accusamus molestias neque ipsa ducimus quod, dolorum dolore magni reprehenderit.</p>
               <p className='ab-dsc'>Etiam turpis metus, mattis vel ullamcorper sed, convallis eget tellus.
                Aliquam luctus nisl justo, iaculis maximus tortor hendrerit eget. Quisque vehicula nisl eget 
                tincidunt auctor. Donec vitae justo aliquet est luctus tincidunt eget eu mi.
                Aenean eget diam a lectus maximus pharetra. Praesent semper, est nec ornare luctus.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
