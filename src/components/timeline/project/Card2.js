import React from "react";

const Card2 = ({ title, desc, poto1, poto2, poto3, descTag, date }) => (
  <React.Fragment>
    <div className="timeline--content">
      <h3>{title}</h3>
      <p>{desc}</p>

      <div className="composition--2">
        <img
          alt={poto1.alt}
          className="composition--2__photo composition--2__photo--p1"
          src={poto2.src}
        />
        <img
          alt={poto2.alt}
          className="composition--2__photo composition--2__photo--p2"
          src={poto2.src}
        />
        <img
          alt={poto3.alt}
          className="composition--2__photo composition--2__photo--p3"
          src={poto3.src}
        />
      </div>
      <p className="topMargin">{descTag}</p>
    </div>
    <div className="timeline--time">
      <h4>{date}</h4>
    </div>
  </React.Fragment>
);

export default Card2;
