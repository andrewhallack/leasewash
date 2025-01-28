import './contact.css'

import { FiPhone, FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='contact'>
      <div className='col'>
        <div className='text'>
          <h4>Get in Touch</h4>
          <p>If you have any questions or inquiries, do not hesitate to contact us! We will respond within 24 hours and if you want to talk immediately, give us a call. We will call back within the same day if unavailable.</p>
        </div>
        <a>
          <div className='icon-wrapper'>
            <FiPhone className='icon' />
          </div>
          <div className='info'>
            <h6>Phone</h6>
            <p>(000) 000-000</p>
          </div>
        </a>
        <a>
          <div className='icon-wrapper'>
            <FiMail className='icon' />
          </div>
          <div className='info'>
            <h6>Email</h6>
            <p>johndoe@mail.com</p>
          </div>
        </a>
        <a>
          <div className='icon-wrapper'>
            <IoLocationOutline className='icon' />
          </div>
          <div className='info'>
            <h6>Location</h6>
            <p>Austin, TX</p>
          </div>
        </a>
      </div>
      <div className='col'>
        <div className='form-wrapper'>
          <h4>Contact Us</h4>
          <form>
            <label for="name">NAME</label><br />
            <input type="text" id="name" name="name" /><br />
            <label for="email">EMAIL</label><br />
            <input type="text" id="email" name="email" /><br />
            <label for="phone">PHONE</label><br />
            <input type="text" id="phone" name="phone" /><br />
            <label for="message">MESSAGE</label><br />
            <input type="text" id="message" name="message" /><br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact