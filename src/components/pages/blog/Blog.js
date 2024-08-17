import React from 'react'
import BlogStore from './BlogStore'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <>

      <section className="section blog has-bg-image" id="blog" aria-label="blog" style={{ backgroundImage: 'url("./assets/images/blog-bg.svg")' }}>
        <div className="container">
          <p className="section-subtitle">Latest Articles</p>
          <h2 className="h2 section-title">Get News/Current Affaires With AMIT IAS</h2>
          <ul className="grid-list">
            <BlogStore
              id={1}
            />
            <BlogStore
            id={2}
            />
            <BlogStore
            id={3}
            />
          </ul>
          <img src="./assets/images/blog-shape.png" style={{ width: "200px" }} loading="lazy" alt="" className="shape blog-shape" />
          <br />
          <Link to="/blog" className="btn has-before" style={{display:"flex",justifyContent:"center"}}>
          <span className="span">Browse more Blogs</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true" />
        </Link>
        </div>
      </section>
    </>
  )
}

export default Blog