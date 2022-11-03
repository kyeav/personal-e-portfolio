import "../index.css";
import { Project } from "./UI/Project";
import { projects } from "../Data/projectsData";
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Projects = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: true,
    dotsEach: true,
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            Here are some of my <span className="orange">projects</span>
          </h1>

          <div className="project__list">
            <OwlCarousel {...options}>
              {projects.map((project) => {
                return <Project {...project} key={project.id} />;
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};
