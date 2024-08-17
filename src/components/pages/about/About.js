import React from 'react'
import './About.css'  // Make sure to create this CSS file

const About = () => {
  return (
    <>
      {/* 
        - #ABOUT
      */}
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <figure className="about-banner">
            <div className="img-holder">
              <img src="./img/adminicon.png" loading="lazy" alt="about banner" className="amit-img-cover" />
            </div>
            <img src="./img/image.png" loading="lazy" alt="" className="shape about-shape-1" />
            <img src="./img/name.svg" loading="lazy" alt="" className="shape about-shape-2" />
            <img src="./assets/images/about-shape-3.png" loading="lazy" alt="" className="shape about-shape-3" />
          </figure>
          <div className="about-content">
            <p className="section-subtitle">About Us</p>
            <h2 className="h2 section-title">
              Over 10 Years in <span className="span">Distant learning</span> for Skill Development
            </h2>
            <p className="section-text">
              Amit IAS Institute course offerings cover all relevant subjects, topics, and materials necessary for
              effective preparation for the IAS exams. Students can expect a well-rounded educational experience
              that leaves no important areas unaddressed.
            </p>
            <ul className="about-list">
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Expert Faculty</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Personalized Attention</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Comprehensive Study Material</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Lifetime Access</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Regular Mock Tests</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Mentorship Programs</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Result-Oriented Approach</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Answer Writing Practice</span>
              </li>
              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true" />
                <span className="span">Daily News Analyses</span>
              </li>
            </ul>
            <img src="./assets/images/about-shape-4.svg" loading="lazy" alt="" className="shape about-shape-4" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
