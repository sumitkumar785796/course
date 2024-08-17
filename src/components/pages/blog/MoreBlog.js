import React from 'react'
import MoreBlogStore from './MoreBlogStore'

const MoreBlog = () => {
    return (
        <>
            <section className="section blog has-bg-image" id="blog" aria-label="blog">
                <div className="container">
                    <h2 className="h2 section-title">Get News/Current Affaires With AMIT IAS</h2>
                    <ul className="grid-list">
                        <MoreBlogStore />
                        <MoreBlogStore />
                        <MoreBlogStore />
                        <MoreBlogStore />
                        <MoreBlogStore />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default MoreBlog