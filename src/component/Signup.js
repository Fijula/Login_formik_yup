import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import "bootstrap/dist/css/bootstrap.css";
  
const LoginSchema = Yup.object().shape({
    name: Yup.string()
    .min(5,"Enter Full name")
    .max(25,"Name too long")
    .required("Email is required"),
    email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be 3 characters at minimum")
    .max(20, "Password must be 3 characters at minimum")
    .required("Password is required"),
});


function Signup() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <Formik
                initialValues={{ name: "",email: "", password: "" }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  console.log(values);
                  alert("Form is validated! Submitting the form...");
                }}
              >
                {({ touched, errors, isSubmitting, values }) =>
                  !isSubmitting ? (
                    <div>
                      <div className="row mb-5">
                        <div className="col-lg-12 text-center">
                          <h1 className="mt-5">Login Form</h1>
                        </div>
                      </div>
                      <Form>
                          {/* name */}
                          <div className="form-group">
                          <label htmlFor="name" className="mt-3">
                            Name
                          </label>
                          <Field
                            type="name"
                            name="name"
                            placeholder="Enter name"
                            className={`mt-2 form-control
                            ${
                              touched.name && errors.name
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="name"
                            className="invalid-feedback"
                          />
                        </div>
                          {/* email */}
                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            autocomplete="off"
                            className={`mt-2 form-control
                            ${touched.email && errors.email ? "is-invalid" : ""}`}
                          />
    
                          <ErrorMessage
                            component="div"
                            name="email"
                            className="invalid-feedback"
                          />
                        </div>
                           {/* password */}
                        <div className="form-group">
                          <label htmlFor="password" className="mt-3">
                            Password
                          </label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            className={`mt-2 form-control
                            ${
                              touched.password && errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          <ErrorMessage
                            component="div"
                            name="password"
                            className="invalid-feedback"
                          />
                        </div>
    {/* submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mt-4"
                        >
                          Submit
                        </button>
                      </Form>
                    </div>
                  ) : (
                    <div>
                      <h1 className="p-3 mt-5">Form Submitted</h1>
    
                      <div className="alert alert-success mt-3">
                        Thank for your connecting with us. Here's what we got from
                        you !
                      </div>
                      <ul className="list-group">
                      <li className="list-group-item">Name: {values.name}</li>
                        <li className="list-group-item">Email: {values.email}</li>
                        <li className="list-group-item">
                          Password: {values.password}
                        </li>
                      </ul>
                    </div>
                  )
                }
              </Formik>
            </div>
          </div>
        </div>
      );
    }
  
export default Signup;

  