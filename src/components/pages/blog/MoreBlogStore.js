import React from 'react'

const MoreBlogStore = () => {
  return (
    <>
    <li>
                <div className="blog-card">
                    <figure className="card-banner img-holder has-after" style={{ width: 370, height: 370 }}>
                        <img src="./img/cf3.webp" width={370} height={370} loading="lazy" alt="Become A Better Blogger: Content Planning" className="img-cover" />
                    </figure>
                    <div className="card-content">
                        <a href="#" className="card-btn" aria-label="read more">
                            <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                        </a>
                        <a href="#" className="card-subtitle">Online</a>
                        <h3 className="h3">
                            <a href="#" className="card-title">10.46 lakh motor accident claims worth Rs 80,455 crore pending nationwide: RTI</a>
                        </h3>
                        <ul className="card-meta-list">
                            <li className="card-meta-item">
                                <ion-icon name="calendar-outline" aria-hidden="true" />
                                <span className="span">Apr. 10, 2024</span>
                            </li>
                            <li className="card-meta-item">
                                <ion-icon name="chatbubbles-outline" aria-hidden="true" />
                                <span className="span">Com 09</span>
                            </li>
                        </ul>
                        <p className="card-text">
                            Lorem Ipsum Dolor Sit Amet Cons Tetur Adipisicing Sed.
                        </p>
                    </div>
                </div>
            </li>
    </>
  )
}

export default MoreBlogStore