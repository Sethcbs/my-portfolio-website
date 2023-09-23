/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mingwei-lim-Qi1eNaEzlAE-unsplash.jpg";

const imageAltText = "A pile of glowing runes";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Turn based strategy game🎉",
    description:
      "A project used to learn the basics of enemy AI, like pathfinding and decision making. It also taught me how to create a turn based combat system.",
    url: "https://github.com/Sethcbs/Turn_Based_Strategy",
  },
  {
    title: "Underwater Adventure Game🐟",
    description:
      "A project that taught me how to develop basic game interactions and controls, and how to build an inventory system from scratch.",
    url: "https://github.com/Sethcbs/Underwater_Adventure",
  },
  {
    title: "Another Portfolio Website",
    description:
      "A portfolio website made using wordpress and elementor.",
    url: "https://sethcstigall.com/",
  },
  {
    title: "GitHub",
    description:
      "A link back to my github profile.",
    url: "https://github.com/Sethcbs",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
