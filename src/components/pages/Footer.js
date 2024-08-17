import React from 'react'

const Footer = () => {
  return (
    <>
      {/* 
    - #FOOTER
  */}
  <footer className="footer" style={{backgroundImage: 'url("./assets/images/footer-bg.png")'}}>
  <div className="footer-top section">
    <div className="container grid-list">
      <div className="footer-brand">
        <a href="#" className="logo">
          <img src="../img/logo.png" width={62} height={50} alt="Amit IAS logo" />
        </a>
        <p className="footer-brand-text">
          Amit IAS <span className="span">WHERE KNOWLEDGE
            MEETS SUCCESS &gt;&gt;&gt;&gt;
          </span>
        </p>
        <div className="wrapper">
          <span className="span">Add:</span>
          <address className="address">Old Rajinder Nagar, NEW DELHI</address>
        </div>
        <div className="wrapper">
          <span className="span">Call:</span>
          <a href="tel:+011234567890" className="footer-link">+917303301193</a>
        </div>
        <div className="wrapper">
          <span className="span">Email:</span>
          <a href="mailto:info@eduweb.com" className="footer-link">info@amitias.com</a>
        </div>
      </div>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Online Platform</p>
        </li>
        <li>
          <a href="#" className="footer-link">About</a>
        </li>
        <li>
          <a href="#" className="footer-link">Courses</a>
        </li>
        <li>
          <a href="#" className="footer-link">Instructor</a>
        </li>
        <li>
          <a href="#" className="footer-link">Events</a>
        </li>
        <li>
          <a href="#" className="footer-link">Instructor Profile</a>
        </li>
      </ul>
      <ul className="footer-list">
        <li>
          <p className="footer-list-title">Links</p>
        </li>
        <li>
          <a href="#" className="footer-link">Contact Us</a>
        </li>
        <li>
          <a href="#" className="footer-link">Gallery</a>
        </li>
        <li>
          <a href="#" className="footer-link">News &amp; Articles</a>
        </li>
        <li>
          <a href="#" className="footer-link">FAQ's</a>
        </li>
        <li>
          <a href="#" className="footer-link">Sign In/Registration</a>
        </li>
      </ul>
      <div className="footer-list">
        <p className="footer-list-title">Contacts</p>
        <p className="footer-list-text">
          Enter your email address to register to our newsletter subscription
        </p>
        <form action className="newsletter-form">
          <input type="email" name="email_address" placeholder="Your email" required className="input-field" />
          <button type="submit" className="btn has-before">
            <span className="span">Subscribe</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
          </button>
        </form>
        <ul className="social-list">
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-linkedin" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <ion-icon name="logo-youtube" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <p className="copyright">
      Copyright &copy; 2024-25 All Rights Reserved &nbsp; | &nbsp; This site is designed and developed by &nbsp; 
        <a href="#" className="copyright-link">&nbsp;&nbsp;Thakur Rajat Tomar &nbsp;&nbsp;</a>
        &
        <a href="https://cvsumitkumarcoder.onrender.com/" target='_blank' className="copyright-link">&nbsp;&nbsp; Sumit Kumar</a>
      </p>
    </div>
  </div>
</footer>
{/* 
- #BACK TO TOP
*/}
<a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
  <ion-icon name="chevron-up" aria-hidden="true" />
</a>
    </>
  )
}

export default Footer