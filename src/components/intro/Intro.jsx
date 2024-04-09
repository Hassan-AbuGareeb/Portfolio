import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/ME.jpeg'


const Intro = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <p>
            A fresh Computer Information Systems from the University of Jordan,
            and an aspiring Full-stack web development,
            with hands-on experience in HTML, CSS, JavaScript, React, Node JS, Express JS, and databases.
          <br/>
          <br/>
            With strong focus and commitment in delivering engaging and
            functional websites, possess great problem-solving skills, good
            teamwork, and eager to continuously learn new technologies and
            improve myself in the latest web development technologies.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
