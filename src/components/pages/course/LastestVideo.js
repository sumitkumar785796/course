import React from 'react'

const LastestVideo = () => {
  return (
      <>
    <section className="video has-bg-image" aria-label="video" style={{backgroundImage: 'url("./assets/images/video-bg.png")'}}>
      <br />
      <h2 className="h2 section-title" style={{textAlign:"center",fontWeight:"800"}}>Latest Videos</h2>
        <div className="container">
          <div className="video-card">
            <div className="video-banner img-holder has-after" style={{width: '', height: ''}}>
              <img src="./assets/images/video-banner.jpg" width={970} height={550} loading="lazy" alt="video banner" className="img-cover" />
              <button className="play-btn" aria-label="play video">
                <ion-icon name="play" aria-hidden="true" />
              </button>
            </div>
            <img src="./assets/images/video-shape-1.png" width={1089} height={605} loading="lazy" alt="" className="shape video-shape-1" />
            <img src="./assets/images/video-shape-2.png" style={{width:"10px", height:"17px"}}  loading="lazy" alt="" className="shape video-shape-2" />
          </div>
        </div>
      </section>
    </>
  )
}

export default LastestVideo