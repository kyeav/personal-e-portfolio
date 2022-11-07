import "../index.css";
import { useCallback, useContext, useRef, useState } from "react";
import { FaEnvelope, FaSpinner, FaTimes } from "react-icons/fa";
import { modalContext } from "../Context/ModalContext";
import emailjs from "@emailjs/browser";

export const Modal = () => {
  const { toggleModal } = useContext(modalContext);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [sucess, setSuccess] = useState(false);

  const contact = useCallback(
    (event) => {
      event.preventDefault();
      
      // show loading state
      setLoading(true);

      emailjs
        .sendForm(
          "service_049xwh7",
          "template_s3chdi9",
          form.current,
          "WAO1Gv2W66GyIBO4j"
        )
        .then(
          (result) => {
            // remove loading state
            setLoading(false);
            // show success state
            setSuccess(true);
            console.log(result.text);
          },
          (error) => {
            setSuccess(false);
            // show error if server is down
            console.log(error.text);
          }
        );
    },
    [form]
  );

  return (
    <>
      <button class="mail__btn click" onClick={toggleModal}>
        <FaEnvelope />
      </button>

      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>

      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about">
            Here's a bit about me.
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about">
            Frontend Software Engineer.
          </h4>
          <p className="modal__para">
            I'm a 21 year-old{" "}
            <b className="orange">frontend software engineer</b> based in
            Singapore with a strong passion for developing websites with great{" "}
            <b className="orange">user experiences.</b>
            <br />I currently work on extremely difficult engineering problems
            by enhancing my understanding of difficult programming concepts
            including <b class="orange">responsive web development</b>,{" "}
            <b class="orange">CSS layout</b>, <b class="orange">Promises</b>,
            and <b class="orange">API requests</b> every day.
          </p>
        </div>
        <div className="modal__half modal__contact">
          <FaTimes
            className="fas fa-times modal__exit click"
            onClick={toggleModal}
          />
          <h3 className="modal__title modal__title--contact">
            Let's have a chat!
          </h3>
          <h3 className="modal__sub-title modal__sub-title--contact">
            I'm currently open to new opportunities.
          </h3>
          <form ref={form} id="contact__form" onSubmit={contact}>
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input
                className="input"
                name="user_name"
                type="text"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input
                class="input"
                name="user_email"
                type="email"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                class="input"
                name="message"
                type="text"
                required
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </form>

          <div
            className={`modal__overlay modal__overlay--loading ${
              loading && "modal__overlay--visible"
            }`}
          >
            <FaSpinner className="modal__overlay--spinner" />
          </div>
          <div
            className={`modal__overlay modal__overlay--success ${
              sucess && "modal__overlay--visible"
            }`}
          >
            Thanks for the message! Looking forward to speaking with you soon.
          </div>
        </div>
      </div>
    </>
  );
};
