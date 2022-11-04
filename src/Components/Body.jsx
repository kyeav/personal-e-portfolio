import "../index.css";
import { modalContext } from "../Context/ModalContext";
import { socialLinks } from "../Data/socialLinksData";
import Typewriter from "typewriter-effect";
import { useContext } from "react";

export const Body = () => {
  const { toggleModal } = useContext(modalContext);

  const TypingEffect = () => {
    return (
      <Typewriter
        options={{
          loop: true,
          autoStart: true,
          strings: [
            'with a strong passion for building web applications with <strong><span style="color : #f06449;">great user experiences.</></strong>',
          ],
        }}
      />
    );
  };

  return (
    <>
      <section id="body">
        <div className="container">
          <div className="row">
            <h1
              data-aos="fade-in"
              className="section__title section__title--alignment"
            >
              <div className="orange">About</div> me
            </h1>
            <p data-aos="fade-in" className="header__para">
              I'm a <b className="orange">frontend software engineer </b>
              {TypingEffect()}
              <br />
              Here's a bit more{" "}
              <b className="orange click" onClick={toggleModal}>
                about me.
              </b>
            </p>
            <div data-aos="fade-in" className="social__list">
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
        </div>
      </section>
    </>
  );
};
