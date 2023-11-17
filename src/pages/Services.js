import React from 'react'
import './services.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import  {serviced } from '../Data';
const Services = () => {
  const percentage = 66;
  return (
    <section className="service">
      <div className="row">
        <div className="container">
          <div className="title">
            <h3>Team</h3>
            <h1>Our team</h1>
          </div>
          <div className="serv-content">
            <div className="serv-item">

              {serviced.map((serv,id) => (
                <div className="serv-conts" key={id} >
                  <div className="serv-img">
                    <img src={serv.img} alt="" />

                  </div>
                  <div className="serv-detals">
                    <h3>{serv.title}</h3>
                    <h4>{serv.subtitle}</h4>
                  </div>
                </div>
              ))}                           
            </div>
          </div>
          <div className="cirulare-bar">
            <div className="circular-item">
              <CircularProgressbar value={percentage} text={`${percentage}%`} />;

            </div>
          </div>

        </div>
      </div>


    </section>
  )
}

export default Services
