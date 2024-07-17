import React from "react";
import AboutBackground from "../Assets/home-banner-5.png";
import AboutBackgroundImage from "../Assets/about.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Forest Is An Important Part Of Our Ecosystem
        </h1>
        
        <p className="primary-text">
        Forests are the lifeblood of our ecosystem,
        a delicate symphony of life where every leaf,
        every creature, and every whisper of the wind contributes to the harmony of our planet.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
