import React from "react";
import fadliImg from "../../img/fotogw.png";

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
            Hello... let me introduce myself, my name is fadli muharram and i
            fallen in love with code since 2015, on that year, i started the
            basic website and codeigniter course and i’ve been build few
            projects such as news website, library management system and
            community website, other than that, please feel free to suft my
            portfolio website
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
