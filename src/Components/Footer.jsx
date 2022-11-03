import { useContext } from "react";
import personalLogo from "../assets/logo.svg";
import { modalContext } from "../Context/ModalContext";
import { Link } from 'react-router-dom'

export const Footer = () => {
  const { toggleModal } = useContext(modalContext);

  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <figure onClick={() => window.scrollTo(0, 0)}>
            <img className="footer__logo--img click" src={personalLogo} alt="" />
          </figure>
          <div className="footer__social--list">
            <a
              href="https://github.com/kyeav"
              target="_blank"
              className="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                "
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kylie-a-824875237/"
              target="_blank"
              className="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                "
            >
              LinkedIn
            </a>
            <Link
              to="/"
              onClick={toggleModal}
              className="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                "
            >
              Contact
            </Link>
            <a
              href="./Tutorial Exclusive Eportfolio/Tutorial Exclusive Eportfolio/assets/David Bragg Resume.pdf"
              target="_blank"
              className="
                footer__social--link
                link__hover-effect
                link__hover-effect--white
                "
            >
              Resume
            </a>
          </div>
          <div className="footer__copyright">
            Copyright &copy; {new Date().getFullYear()} Kylie Arellano
          </div>
        </div>
      </div>
    </footer>
  );
};
