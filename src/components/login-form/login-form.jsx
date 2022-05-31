import React from "react";
import "./login-form.scss";
import { FcAssistant } from "react-icons/fc";

const LoginForm = () => {
  const [dynamicClass, setDynamicClass] = React.useState(
    "contact-form-wrapper d-flex justify-content-center hide-form"
  );

  function useOutsideAlerter(ref) {
    React.useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setDynamicClass(
            "contact-form-wrapper d-flex justify-content-center hide-form"
          );
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = React.useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div>
      <div
        className="fc-icon"
        onClick={() =>
          setDynamicClass("contact-form-wrapper d-flex justify-content-center ")
        }
      >
        <FcAssistant fontSize={50} />
      </div>

      <div ref={wrapperRef} className={dynamicClass}>
        <form action="#" class="contact-form">
          <h5 class="title">Contact us</h5>
          <p class="description mb-2">
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <div>
            <input
              type="text"
              class="form-control rounded border-white mb-3 form-input"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              class="form-control rounded border-white mb-3 form-input"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <textarea
              id="message"
              class="form-control rounded border-white mb-3 form-text-area"
              rows="5"
              cols="30"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div class="submit-button-wrapper">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
