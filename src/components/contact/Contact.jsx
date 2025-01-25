import React from 'react'

const Contact = () => {
  return <section className='contact'>
   <form>
    <h2>CONTACT US</h2>
    <input type ="text" placeholder='Name'></input>
    <input type = "email" placeholder = "Email"></input>
    <textarea placeholder='message'cols ="30" rows='10'></textarea>
    <button type ="submit">Send</button>
   </form>

  </section>
   
}

export default Contact
