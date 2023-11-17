import React from 'react'
import './footer.scss'
import Buttons from '../components/button/Buttons'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <section className="footer">
      <div className="row">
        <div className="container">
          <div className="foo-item">
            <div className="foo-details">
              <div className="footers-img">
                <div className="foo-img">
                  <img src="./images/logo.png" alt="" />
                </div>
                <h1>Law Firm</h1>
              </div>
              <div className="foo-icon">
                <span><TwitterIcon /></span>
                <span>< FacebookOutlinedIcon /></span>
                <span><YouTubeIcon /></span>
                <span><InstagramIcon /></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="foo-item">
            <h3 className='foo-title'>Contact Info</h3>
            <ul>
              <li>1234 Street Name</li>
              <li>City, AA 99999</li>
              <li>support@mobirise.com</li>
              <li>+1 (0) 000 0000 001</li>
            </ul>
          </div>
          <div className="foo-item">
            <h3 className='foo-title'>Useful Links</h3>
            <div className="foo-db">
              <ul>
                <li>FAQS</li>
                <li>Privacy</li>
                <li>Policy</li>
                <li>Support</li>
              </ul>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Pages</li>

              </ul>
            </div>

          </div>
          <div className="foo-item">
            <h3 className='foo-title'>Support and Downloads</h3>
            <ul>
              <li>Lorem ipsum dolor sit amet,</li>
              <li>consy ect etur adipisc de elit.</li>
              <li><div className="button">
                <Buttons>APPOINTMENT</Buttons>
              </div></li>

            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Footer
