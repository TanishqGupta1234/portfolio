import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footertop-left">
                <img src={footer_logo} alt="" />
                <p>I am a Full stack developer from Dehradun <br />with 2+ years of experience and also worked <br />with Indian oil and cocolevio LLP.</p>
            </div>
            <div className="footertop-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' />
                    </div>
                    <div className="subscrbe-button">Subscirbe</div>    
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">2025 Tanishq Gupta. All right reserved. </p>
            <div className="footer-bottom-right">
                <p>Terms of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with Me</p>
            </div>
        </div>

    </div>
  )
}

export default Footer