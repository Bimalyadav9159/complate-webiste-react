import React from 'react'
import './home.scss'
import Buttons from '../components/button/Buttons'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import Practices from '../components/practices/Practices'


const Home = () => {
  return (
    <>
      <div className="home">
        <div className="home-img">
          <img src="./images/homeimg.jpg" alt="" />
          <div className="row">
            <div className="container">
              <div className="home-content">
                <h1>Legal Insight. <br />
                  Business Success.</h1>

                <p className='para'>We are a leading law firm in financial & business industry. <br />
                  With more than 20 years of experience </p>

                <div className="button">
                  <Buttons>FREE CONSULTATION</Buttons>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <About />
      <Practices/>
      <Services/>
      <Contact/>
      
    </>

  )
}

export default Home
