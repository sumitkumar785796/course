import React from 'react'

const Rank = () => {
  return (
    <>
     {/* 
        - #STATE
      */}
      <br /><br /><br />
      <section className="section stats" aria-label="stats">
        <div className="container">
          <ul className="grid-list">
            <li>
              <div className="stats-card" style={{backgroundColor:"#86f0de",color:"#009e9b"}}>
                <h3 className="card-title">29.3k</h3>
                <p className="card-text">Student Enrolled</p>
              </div>
            </li>
            <li>
              <div className="stats-card" style={{backgroundColor:"#f7d5df",color:"#f04879"}}>
                <h3 className="card-title">32.4K</h3>
                <p className="card-text">Class Completed</p>
              </div>
            </li>
            <li>
              <div className="stats-card" style={{backgroundColor:"#ababff",color:"#021869"}}>
                <h3 className="card-title">100%</h3>
                <p className="card-text">Satisfaction Rate</p>
              </div>
            </li>
            <li>
              <div className="stats-card" style={{color: '#effa23',backgroundColor:"#fafccc"}}>
                <h3 className="card-title">354+</h3>
                <p className="card-text">Top Instructors</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Rank