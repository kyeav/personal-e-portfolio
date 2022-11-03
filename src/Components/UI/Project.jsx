import "../../index.css";
import { FaGithub, FaLink } from "react-icons/fa";

export const Project = (project) => {
  return (
    <div className="project">
      <div className="project__wrapper">
        <img className="project__img" src={project.image} alt="" />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{project.name}</h3>
          <h4 className="project__description--sub-title">{project.stack}</h4>
          <p className="project__description--para">{project.description}</p>
          <div className="project__description--links">
            <a
              href={project.github}
              target="_blank"
              className="project__description--link"
            >
              <FaGithub />
            </a>
            <a
              href={project.link}
              target="_blank"
              className="project__description--link"
            >
              <FaLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
