import React from "react";

const HeroSection = () => {
  return (
    <React.Fragment>
      <div className="hero-outer-section">
        <div className="hero-inner-section">
          <div className="avatar">
            <img src="/images/avatar.jpg" className="avatar" />
          </div>
          <div className="avatar-name">Hello, I am Aniket Sen</div>
          <div className="avatar-message">
            A Frontend developer specialised in React Js
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroSection;
