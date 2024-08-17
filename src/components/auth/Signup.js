import React from 'react'
import { Link } from 'react-router-dom';
import './Register.css';

const Signup = () => {
  return (
    <>
    <br /><br />
    <section className="heading-page header-text" id="top" style={{
      backgroundImage: `url(./img/log.png)`,
      backgroundSize: 'cover', // Optional: adjust as needed
      backgroundPosition: 'center', // Optional: adjust as needed
      height: '60vh', // Optional: adjust as needed
      width: '100%', // Optional: adjust as needed
    }}>
      <div className="container" >
        <div className="row">
          <div className="col-lg-12">
            <br /><br /><br /><br />
            <br /><br /><br /><br />
            <h1 style={{ color: "white", fontWeight: "1000", textAlign: "center" }} >Login Authentication </h1>
          </div>
        </div>
      </div>
    </section>
    <div id="register-container">
    <form id="register-form">
        <h2 className="form-heading">Register</h2>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" placeholder='Enter username'  id="username" className="form-input" required />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email'  id="email" className="form-input" required />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password'  id="password" className="form-input" required />
        </div>
        <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" placeholder='Enter Confirm Password'  id="confirm-password" className="form-input" required />
        </div>
        <div className="form-group">
            <button type="submit" id="register-button" className="btn-submit">Register</button>
        </div>
        <div className="form-footer">
            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
        </div>
    </form>
</div>
    </>
  )
}

export default Signup