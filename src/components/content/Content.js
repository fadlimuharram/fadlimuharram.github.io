import React from "react";
import fadliImg from "../../img/fotogw.png";
import { LazyGroup } from "react-lazy";

const Content = () => {
  return (
    <div class="content">
      <div class="heading-secondary txtcenter" id="aboutme">
        about me
      </div>

      <div class="content__inside">
        <div class="content__picture">
          <img src={fadliImg} alt="Fadli" class="content__img" />
        </div>

        <div class="content__desc">
          <p>
            Hello, I'm Fadli Muharram, I found my passion and started learning
            programming since 2015. That year I started a course on web masters
            and began to enter college. while i was in collage I built several
            projects like Realtime Chat, Student Attendace, ect{" "}
          </p>
          <p>
            After i finished college, i joined Arkademy to learn advance
            programming with react, redux, adonis dan aws, on Bootcamp i learned
            how to build applications in a short time, and i also have
            experience in deploying on Google Cloud and Azure Cloud.
          </p>
          <p>
            I have a goal to help other with technology, especially programming
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
