import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import watsapp_icon from '../../assets/watsapp-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white_arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "77533681-8675-47d5-bce6-cf216a1984ef");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact' id="contact">
        <div className="contact-col" >
            <h3>Place your order <img src={msg_icon} alt="" /></h3>
            <p>
                Order or send us your feedback
            </p>
            <ul>
                <li><img src={phone_icon} alt="" /> +256 766592907</li>
                <li><img src={mail_icon} alt="" /> nashflavia@gmail.com</li>
                <li><img src={watsapp_icon} alt="" />Watsapp +256 750577971</li>
                
                <li><img src={location_icon} alt="" /> Kyato complex, along Bombo Road<br/> Shop No. A4-05, Uganda</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label>Phone Number</label>
                <input type="tel" name='phone'placeholder='Enter your phone number'
                required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'
                required></textarea>
                <button type="submit" className='btn dark-btn'>Submit now
                    <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>

    </div>
  )
}

export default Contact