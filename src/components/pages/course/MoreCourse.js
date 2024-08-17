import React from 'react'
import MoreCourseStore from './MoreCourseStore'

const MoreCourse = () => {
    return (
        <>
        <section className="section course" id="courses" aria-label="course">
        <div className="container">
          <h2 className="h2 section-title">Pick A Course To Get Started</h2>
          <ul className="grid-list">
            <MoreCourseStore/>
            <MoreCourseStore/>
            <MoreCourseStore/>
            <MoreCourseStore/>
            <MoreCourseStore/>
            <MoreCourseStore/>
            <MoreCourseStore/>
            <MoreCourseStore/>
          
          </ul>
        </div>
      </section>
        </>
    )
}

export default MoreCourse