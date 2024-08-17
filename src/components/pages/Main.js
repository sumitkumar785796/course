import React from "react";
import About from "./about/About";
import Course from "./course/Course";
import LastestVideo from "./course/LastestVideo";
import Rank from "./course/Rank";
import Blog from "./blog/Blog";
import Slider from "./Slider";

const Main = () => {
  return (
    <>
      <main>
        <article>
          {/* slider */}
          <Slider />
          {/* about */}
          <About />
          {/* course */}
          <Course />
          {/* latest Video */}
          <LastestVideo />
          {/* state */}
          <Rank />
          {/* blog */}
          <Blog />
        </article>
      </main>
    </>
  );
};

export default Main;
