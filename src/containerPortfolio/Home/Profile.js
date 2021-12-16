import React from "react";
import Typical from "react-typical";
import './Profile.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-inn">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://m.facebook.com/profile.php?id=100008468325150&__tn__=C-R">
                <i className="fab fa-facebook-square"></i>
              </a>
             
              <a href="https://www.youtube.com/channel/UC1anNXFIHHyKLpIiBfuHVOQ">
                <i className="fab fa-youtube-square"></i>
              </a>
              <a href="https://www.instagram.com/muttal_kavithai/?hl=en">
                <i className="fab fa-twitter-square"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <div className="primary-text">
              Hello I'm <span className="highlighted-text">Sumith</span>
            </div>
          </div>
          <div className="profile-details-role">
            <div className="primary-text">
              <span>
                <h1>
                  <Typical
                    loop={Infinity}
                    steps={[
                      "Web Developer",
                      1000,
                      "FrontEnd Developer",
                      1000,
                      "HTML Developer",
                      1000,
                    ]}
                  />{" "}
                </h1>
                <span className="profile-role-tagline">
                  Knack of building applications with frontend operations.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <button className="btn primary-btn">Hire Me</button>
              <a href="sumith.pdf" download="Sumithdeepan A.pdf">
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
