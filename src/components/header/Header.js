import React from "react";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="header__body">
        <div className="intro">
          <h5>السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h5>
          <h5>Perkenalkan, Saya</h5>
          <h3>
            Fadli Muharram <i class="fab fa-acquisitions-incorporated" />
          </h3>
          <p>-- i love programming --</p>
          <div class="intro__btn">
            <button class="btn btn--green">DOWNLOAD CV</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
