import "./Form.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_y3rknuj','template_byb4cni', form.current, 'oV1qfAdlWafNO-Ha4')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

    <div className="form">
      <form autoComplete="off"  ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Type Your message here" name="message"/>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}

export default Form