import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!(form as HTMLFormElement).checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div className="container-fluid my-5" id="contact">
      <h2>Let's Connect!</h2>
      <p>
        Feel free to reach out! I'm always excited to collaborate on new
        projects and explore fresh ideas.
      </p>
      <form
        name="contact"
        method="post"
        className="row g-3 needs-validation"
        noValidate
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="col-md-3">
          <label htmlFor="validationCustomUsername" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="validationCustomUsername"
            aria-describedby="inputGroupPrepend"
            placeholder="Jane Doe"
            minLength={2}
            maxLength={100}
            required
          />
          <div className="invalid-feedback">Please provide a valid name.</div>
        </div>
        <div className="col-md-4">
          <label htmlFor="validationCustom01" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="validationCustom01"
            placeholder="janedoe@something.com"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,4}"
            required
          />
          <div className="invalid-feedback">
            Please provide a valid email address.
          </div>
        </div>
        <div className="col-md-5">
          <label htmlFor="validationCustom02" className="form-label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="form-control"
            id="validationCustom02"
            placeholder="Collaboration on the Janedoe Project"
            minLength={4}
            maxLength={300}
            required
          />
          <div className="invalid-feedback">
            Please provide a valid subject title.
          </div>
        </div>
        <div className="col-md-12">
          <label htmlFor="validationTextarea" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            name="message"
            id="validationTextarea"
            minLength={10}
            rows={2}
            required
          ></textarea>
          <div className="invalid-feedback">
            Please provide a valid message.
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-dark mb-3" type="submit">
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
