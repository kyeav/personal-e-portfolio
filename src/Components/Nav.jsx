import "../index.css";
import { useContext } from "react";
import { modalContext } from "../Context/ModalContext";
import personalLogo from "../assets/logo.png";
import { FaAdjust } from "react-icons/fa";
import { squigglyImages } from "../Data/squigglyImagesData";
import { Link } from "react-router-dom";

export const Nav = () => {
  const { toggleModal, setContrastToggle } = useContext(modalContext);

  return (
    <>
      <nav>
        <figure className="click" onClick={() => window.scroll(0, 0)}>
          <img
            data-aos="fade-down"
            data-aos-delay="100"
            id="personal-logo"
            src={personalLogo}
            alt=""
          />
        </figure>
        <ul className="nav__link--list">
        <li data-aos="fade-down" data-aos-delay="100" className="nav__link">
            <a
              href="#body"
              className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black
                "
            >
              About
            </a>
          </li>
          <li data-aos="fade-up" data-aos-delay="150" className="nav__link">
            <a
              href="#projects"
              className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black
                "
            >
              Projects
            </a>
          </li>
          <li
            data-aos="fade-down"
            data-aos-delay="100"
            className="nav__link"
            onClick={toggleModal}
          >
            <Link
              to="/"
              onClick={toggleModal}
              className="
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black
                "
            >
              Contact
            </Link>
          </li>
          <li
            data-aos="fade-up"
            data-aos-delay="150"
            className="nav__link click"
            onClick={() =>
              setContrastToggle((prev) => (prev === "dark" ? "light" : "dark"))
            }
          >
            <div
              className="
                click
                nav__link--anchor
                link__hover-effect
                link__hover-effect--black
                "
            >
              <FaAdjust />
            </div>
          </li>
        </ul>
      </nav>

      {squigglyImages.map((image) => {
        return (
          <img
            key={image.id}
            src={image.imgLink}
            className={image.classname}
            alt=""
          />
        );
      })}
    </>
  );
};
