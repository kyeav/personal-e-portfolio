import "../index.css";
import { modalContext } from "../Context/ModalContext";
import { socialLinks } from "../Data/socialLinksData";
import Typewriter from "typewriter-effect";
import { useContext, useCallback } from "react";
import { stack } from "../Data/stackData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export const Body = () => {
  const { toggleModal } = useContext(modalContext);

  const moveBackground = useCallback((event) => {
    const scaleFactor = 1 / 20;
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px`;
    }
  }, []);

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

  const options = {
    stagePadding: 25,
    center: true,
    loop: true,
    nav: true,
    responsive: {
      0: { items: 2 },
      576: { items: 3 },
      768: { items: 3 },
      1200: { items: 4 },
    },
  };

  return (
    <>
      <section id="body" onMouseMove={(event) => moveBackground(event)}>
        <div className="container">
          <div className="row">
            <h1 data-aos="fade-in" className="section__title">
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

            <div className="modal__languages owl-theme">
              <OwlCarousel {...options}>
                {stack.map((tech) => {
                  return (
                    <figure className="modal__language" key={tech.id}>
                      <img
                        className="model__language--img"
                        src={tech.image}
                        alt={tech.name}
                        title={tech.name}
                      />
                    </figure>
                  );
                })}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
