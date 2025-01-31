import React from 'react'

const Contact = () => {
  const handleformSubmit = (formData) => {
// console.log(formData.entries());
const fromInputData = Object.fromEntries(formData.entries())
console.log(fromInputData);
  
}
  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>
      <div className='contact-wrapper container'>
      <form action={handleformSubmit}>
        <input type="text" 
        className='form-control'
        placeholder='Enter Your Name'
        required
        autoComplete="off"
        name='username'
         />
         <input type="email" 
        placeholder='Enter Your E-mail'
        required
        autoComplete="off"
        name='email'
         />
         <textarea 
        className='form-flow'
        rows="10"
        placeholder='Enter Your Message'
        required
        autoComplete="off"
        name='textarea'
         ></textarea>
         <button type='submit' value="send">Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact