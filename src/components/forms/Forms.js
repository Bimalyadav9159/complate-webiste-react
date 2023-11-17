import React from 'react'
import './form.scss'
import { useForm } from "react-hook-form"
import Buttons from '../button/Buttons'
const Forms = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
   
    <div className="input-form">
    <form  onSubmit={handleSubmit(onSubmit)}>    
           
      
      <input type='text' id='name' placeholder='FullName' />
      {errors.fullName && <p className='req'>Fullname is required.</p>}
      <input type='number' {...register('phone', { required: true })} placeholder='Phone' />
      {errors.phone && <p className='req'>Phone is required.</p>}
      <input {...register('address', { required: true })} placeholder='Address' />
      {errors.address && <p className='req'>Last name is required.</p>}
      <input {...register('subject', { required: true })} placeholder='Subject' />
      {errors.subject && <p className='req'>Last name is required.</p>}
      <input {...register('email', { required: true })} placeholder='Email' />
      {errors.email && <p className='req'>Last name is required.</p>}
      
      <div className="button">
      <Buttons type='submit'>Submit</Buttons>
      </div>
    
    </form>
  </div>   
             
            
  
  )
}

export default Forms
