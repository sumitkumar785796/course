import React from 'react'
import CourseStore from './CourseStore'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
      <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">Popular Courses</p>
        <h2 className="h2 section-title">Pick A Course To Get Started</h2>
        <ul className="grid-list">
          
            <CourseStore
              id={1}
            />
            <CourseStore/>
            <CourseStore/>
        
        </ul>
        <Link to="/course" className="btn has-before">
          <span className="span">Browse more courses</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true" />
        </Link>
      </div>
    </section>

    <br />
    </>
  )
}

export default Course