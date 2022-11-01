import "../index.css";
import { useContext } from "react";
import { modalContext } from "../Context/ModalContext";
import { socialLinks } from "../Data/socialLinksData";
import Typewriter from "typewriter-effect";

export const Header = () => {
  const { toggleModal } = useContext(modalContext);

  const TypingEffect = () => {
    return (
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("I'm Kylie.").start();
        }}
      />
    );
  };

  return (
    <>
      <header className="header">
        <div className="header__content">
          <h1 data-aos="fade-down" data-aos-delay="100" className="title">
            Hey,
          </h1>
          <h1 className="title orange">{TypingEffect()}</h1>
          <p data-aos="fade-up" data-aos-delay="150" className="header__para">
            I'm a <b className="orange">Frontend Software Engineer</b> with a
            strong passion for building web applications with great user
            experiences.
            <br />
            Here's a bit more{" "}
            <b className="orange click" onClick={toggleModal}>
              about me.
            </b>
          </p>
          <div className="social__list">
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
        </div>

        <div className="header__content--right">
          {/* tag cloud */}
        </div>
      </header>
    </>
  );
};
