import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
const Signin = () => {
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
      <div id="login-container">
      <form id="login-form">
          <h2 className="form-heading">Login</h2>
          <div className="form-group">
              <label htmlFor="username">Email</label>
              <input type="email" id="email" placeholder='Enter Email id' className="form-input" required />
          </div>
          <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" placeholder='Enter password' id="password" className="form-input" required />
          </div>
          <div className="form-group">
              <button type="submit" id="login-button" className="btn-submit">Login</button>
          </div>
          <div className="form-footer">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </div>
      </form>
  </div>
    
    </>
  )
}

export default Signin