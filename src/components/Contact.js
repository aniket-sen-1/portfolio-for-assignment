import React, { useState } from "react";
import { Formik, useFormik } from "formik";
import { signUpSchemas } from "../schemas";

const Contact = () => {
  const [disableButton, setDisableButton] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    type: "",
    message: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchemas,
      onSubmit: (values, action) => {
        alert("Message Sent");
        action.resetForm();
      },
    });

  console.log("values=> ", values);
  console.log("error=> ", errors);

  const options = [
    {
      label: "Freelance Project proposal",
      value: "Freelance Project proposal",
    },
    {
      label: "React Js Project",
      value: "React Js Project",
    },
    {
      label: "Website designing",
      value: "Website designing",
    },
  ];
  return (
    <React.Fragment>
      <div className="contact-form-outer" id="contact-id">
        <div className="contact-form-inner">
          <div className="contact-header">Contact Me</div>
          <form action="" className="form">
            {/* Name */}

            <div className="input-label">
              <label className="float-label label-name" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                autoComplete="off"
                name="name"
                id="name"
                className={
                  errors.name && touched.name
                    ? "input input-name input-error"
                    : "input input-name"
                }
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <div className="error-comp">
                  <p className="error">{errors.name}</p>
                </div>
              ) : null}
            </div>

            {/* Email */}

            <div className="input-label">
              <label
                className="float-label label-firstName"
                htmlFor="firstName"
              >
                Email
              </label>
              <input
                type="text"
                autoComplete="off"
                name="email"
                id="firstName"
                className={
                  errors.email && touched.email
                    ? "input input-email input-error"
                    : "input input-email"
                }
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <div className="error-comp">
                  <p className="error">{errors.email}</p>
                </div>
              ) : null}
            </div>

            {/* type */}
            <div className="input-label">
              <label className="float-label label-firstName" htmlFor="type">
                Label
              </label>
              <select
                id="type"
                name="type"
                value={values.type}
                placeholder={"Enter Country Name"}
                className={
                  errors.type && touched.type
                    ? "input-error input-type"
                    : "input-type"
                }
                onBlur={handleBlur}
                onChange={handleChange}
              >
                {options.map((option) => (
                  <option value={option.value} key={Math.random()}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* message */}
            <div className="input-label">
              <label className="float-label label-message" htmlFor="message">
                Message
              </label>
              <textarea
                type="textArea"
                autoComplete="off"
                name="message"
                rows={8}
                id="message"
                className={
                  errors.message && touched.message
                    ? "input input-error input-message input-message"
                    : "input input-message"
                }
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message ? (
                <div className="error-comp error-comp-m">
                  <p className="error error-m">{errors.message}</p>
                </div>
              ) : null}
            </div>
            <div className="submit">
              <button className="submit-button" onClick={handleSubmit}>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
