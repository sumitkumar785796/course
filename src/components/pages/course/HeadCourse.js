import React from 'react'
import MoreCourse from './MoreCourse'

const HeadCourse = () => {
    return (
        <>
            <br /><br />
            <section className="heading-page header-text" id="top" style={{
                backgroundImage: `url(./assets/images/heading-bg.jpg)`,
                backgroundSize: 'cover', // Optional: adjust as needed
                backgroundPosition: 'center', // Optional: adjust as needed
                height: '60vh', // Optional: adjust as needed
                width: '100%', // Optional: adjust as needed
            }}>
                <div className="container" >
                    <div className="row">
                        <div className="col-lg-12">
                            <br /><br /><br /><br />
                            <h1 style={{ color: "white", fontWeight: "900", textAlign: "center" }} >All Course</h1>
                        </div>
                    </div>
                </div>
            </section>
            <MoreCourse />
        </>
    )
}

export default HeadCourse