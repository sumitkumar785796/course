import React from 'react'

const Slider = () => {
    return (
        <>

            <section className="section hero has-bg-image" id="home" aria-label="home" style={{ backgroundImage: 'url("./assets/images/hero-bg.svg")' }}>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="h1 section-title">
                            <br /> <br />
                            Hello Students Welcome to the <span className="span">AMIT IAS</span> for Enhance your <span className="span">UPSC preparation</span>
                        </h1>
                        <p className="hero-text">
                            Amit IAS offers you to learn from an Ex-bureaucrat &amp; retired bureaucrats
                        </p>
                        <a href="#" className="btn btn-primary">
                            <span className="span">Find courses</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                        </a>
                    </div>
                    <figure className="hero-banner">
                        <div className="img-holder one" style={{ width: "270px", height: "300px" }}>
                            <img src="./img/logo.png" width={270} height={300} alt="hero banner" className="img-cover" />
                        </div>
                    </figure>
                </div>
            </section>
            {/* - #CATEGORY */}
            <section className="section category" aria-label="category">
                <div className="container">
                    <p className="section-subtitle">4 Pillars of AMIT IAS</p>
                    <h2 className="h2 section-title">
                        Online <span className="span">Classes</span> For Remote Learning.
                    </h2>
                    <p className="section-text">
                        LET'S EXPLORE THE AMIT IAS
                    </p>
                    <ul className="grid-list">
                        <li>
                            <div className="category-card" style={{backgroundColor:"#d4faf4"}}>
                                <div className="card-icon" style={{backgroundColor:"#86f0de"}}>
                                    <img src="./assets/images/category-1.svg" width={40} height={40} loading="lazy" alt="Online Degree Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title text-white">Experienced Faculties</a>
                                </h3>
                                <p className="card-text">
                                    Quality Teaching
                                    Concept Building
                                    Thorough Coverage
                                    Current based approach.
                                    <br /><br />
                                </p>
                                <span className="card-badge" style={{backgroundColor:"#86f0de",color:"#009e9b"}}>7 Courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="category-card" style={{backgroundColor:"#f7d5df"}}>
                                <div className="card-icon" style={{backgroundColor:"#f59ab5"}}>
                                    <img src="./assets/images/category-2.svg" width={40} height={40} loading="lazy" alt="Non-Degree Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title text-white">Student Centric Approach</a>
                                </h3>
                                <p className="card-text">
                                    Recorded lectures for back-up &amp; revision
                                    Supportive Learning Ecosystem
                                    Robust Infrastructure
                                </p>
                                <span className="card-badge" style={{backgroundColor:"#f09cb4",color:"#f04879"}}>4 Courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="category-card" style={{backgroundColor:"#d7def5"}}>
                                <div className="card-icon" style={{backgroundColor:"#a2b5fc"}}>
                                    <img src="./assets/images/category-3.svg" width={40} height={40} loading="lazy" alt="Off-Campus Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title">Enriched Quality Content</a>
                                </h3>
                                <p className="card-text">
                                    Enriched &amp; Updated Books
                                    Daily and Weekly Current Affairs Analysis &amp; PDFs
                                    Monthly Current Affairs Magazine
                                </p>
                                <span className="card-badge" style={{backgroundColor:"#5c7fff",color:"#021869"}}>8 Courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="category-card" style={{backgroundColor:"#f6f7dc"}}>
                                <div className="card-icon" style={{backgroundColor:"#f8fc9d"}}>
                                    <img src="./assets/images/category-4.svg" width={40} height={40} loading="lazy" alt="Hybrid Distance Programs" className="img" />
                                </div>
                                <h3 className="h3">
                                    <a href="#" className="card-title text-white">Dedicated Academic Coach</a>
                                </h3>
                                <p className="card-text">
                                    Personalized Support
                                    Mentoring and Answer Writing
                                    Doubt Solving and Motivation
                                    Weekly &amp; Monthly Class Tests
                                </p>
                                <span className="card-badge" style={{backgroundColor:"#f8fc9d",color:"#8d9407"}}>8 Courses</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Slider