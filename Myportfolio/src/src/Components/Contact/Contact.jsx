import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { themeContext } from '../../Context'; 
import { useContext } from 'react';

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('Yservice_10c0j2h', 'template_rxm0dnl', form.current, 'Egk8UB9XGJYdPy-VJ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode? 'white': ''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" 
                style={{background: "#ABF1FF9" }}
                ></div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder="Name" />
                <input type="email" name="user_email" className="user" placeholder="Email"/>
                <textarea name="message" className="user" placeholder="Message"/>
                <input type="submit" value="Send" className="button"/>
                <span>{done && "Thanls for contactin me!"}</span>
                <div
                className="blur c-blur1"
                style={{ blackground:"var(--purple)"}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact