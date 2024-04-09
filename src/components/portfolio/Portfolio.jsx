import "./portfolio.css";

import IMG1 from "../../assets/movie.png";
import IMG2 from "../../assets/audio.png";
import IMG4 from "../../assets/food.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Movies website",
      img: IMG1,
      description:
        "A website that shows movies and actors, the user can search for movies or actors and filter them",
      technologies: "React Js | Next Js | tailwind css",
      link: "https://movie-project-team-7-ver1.vercel.app/",
      github: "https://github.com/Hassan-AbuGareeb/Movies-Website",
    },
    {
      id: 2,
      title: "Audio file downloader",
      img: IMG4,
      description:
        "A website that enables the user to search for songs on youtube and download any song as an audio file",
      technologies: "React Js | Next Js | tailwind css | Node Js | Express Js",
      link: "https://main--videoconverter10429.netlify.app/",
      github: "https://github.com/Hassan-AbuGareeb/video-converter-frontend",
    },
    {
      id: 3,
      title: "JorDinner",
      img: IMG2,
      description: "Food ordering website that have 2 portals, admin and customer with different capabilites for each",
      technologies: "React Js | Next Js | tailwind css | Node Js | Express Js | MongoDB",
      link: "https://capstone-room-6.vercel.app/",
      github: "https://github.com/202309-EKTA-JO-FSW/capstone-room-6",
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
