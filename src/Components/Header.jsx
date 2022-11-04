import "../index.css";
import { socialLinks } from "../Data/socialLinksData";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__content">
          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            className="title"
          >
            Hey,
          </h1>
          <h1 data-aos="fade-up" data-aos-delay="150" className="title orange">
            I'm Kylie.
          </h1>

          <div className="words">
            <h2>Frontend Developer</h2>
            <h2>Software Engineer</h2>
            <h2>UI/UX Designer</h2>
          </div>
        </div>

        <div className="header__description--links">
          {socialLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={link.linkTo}
                target="_blank"
                className="social__link click"
              >
                {link.icon}
              </a>
            );
          })}
        </div>
      </header>
    </>
  );
};
