import React from 'react'

const MoreCourseStore = () => {
  return (
    <>
    <li>
    <div className="course-card">
        <figure className="card-banner img-holder" style={{ width: 370, height: 220 }}>
            <img src="./assets/images/course-3.jpg" width={370} height={220} loading="lazy" alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
        </figure>
        <div className="abs-badge">
            <ion-icon name="time-outline" aria-hidden="true" />
            <span className="span">3 Weeks</span>
        </div>
        <div className="card-content">
            <h3 className="h3">
                <a href="#" className="card-title">Current affaires Foundation</a>
            </h3>
            <div className="wrapper">
                <div className="rating-wrapper">
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                    <ion-icon name="star" />
                </div>
                <p className="rating-text">(4.9 /7 Rating)</p>
            </div>
            OFFLINE
            <data className="price" value={35}>₹14,000 + GST
            </data>
            ONLINE
            <data className="price" value={35}>₹8,000 + GST
            </data>
            <ul className="card-meta-list">
                <li className="card-meta-item">
                    <ion-icon name="library-outline" aria-hidden="true" />
                    <span className="span">13 Lessons</span>
                </li>
                <li className="card-meta-item">
                    <ion-icon name="people-outline" aria-hidden="true" />
                    <span className="span">18 Students</span>
                </li>
            </ul>
        </div>
    </div>
</li>
    </>
  )
}

export default MoreCourseStore