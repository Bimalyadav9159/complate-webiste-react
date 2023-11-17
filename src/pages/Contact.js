import React from 'react'
import { useForm } from 'react-hook-form';
import Forms from '../components/forms/Forms';
import './contact.scss'
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="contact">
      <div className="row">
        <div className="container">
          <div className="form-item">
            <div className="form-content">
              <div className="form-title">
                <p>Free Consultation</p>
                <h1>Get In Touch With Us</h1>
              </div>
              <Forms/>
              
            </div>
          </div>
          <div className="form-item">
            <div className="form-title">
              <p className='sec'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a libero.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, necessitatibus!</p>
              <div className="inpur-form">
                <form action="">
                <textarea  placeholder='Message' name="" id=""  rows="10"></textarea>
                </form>
               
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
