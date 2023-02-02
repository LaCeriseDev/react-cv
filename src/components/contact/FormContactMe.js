import React from 'react'
import Phone from './Phone.js';

const FormContactMe = () => {
return(
  <section className="formContact formContact">
    <h2>CONTACT ME</h2>

    <form className="contactme">
      <input className="name" type="text" name="name" placeholder="Firstname *" pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)" />
      <input className="email" type="email" name="email" placeholder="Email *" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
      <Phone className="tel"/>
      <input className="subject " type="text" name="subject" placeholder="Subject *" />
      <textarea className="message" name="message" cols="" rows="" placeholder="Message *" ></textarea>
      <input className="submit " type="submit" name="submit" value="Send message!"/>
    </form>
  </section>
  )
}
export default FormContactMe
