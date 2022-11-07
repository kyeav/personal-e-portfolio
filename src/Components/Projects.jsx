import "../index.css";
import { Project } from "./UI/Project";
import { projects } from "../Data/projectsData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Projects = () => {
  const options = {
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1 data-aos="fade-in" className="section__title">
            Here are some of my <div className="orange">projects</div>
          </h1>

          <div data-aos="fade-up" data-aos-delay="150" className="project__list owl-theme">
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
