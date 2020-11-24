import React, {useState} from 'react'
import {login} from "../utils/auth-client";
import toastr from "toastr";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

function ForgortPassword () {
  const [formValues, setFormValues] = useState({
    email: "",
    errors: {}
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = event => {
    event.preventDefault();
    let { name, value, files } = event.target;
    let errors = formValues.errors;
    errors[name] = "";
    setFormValues(prevState => {
      return {
        ...prevState,
        errors,
        [name]: value && !files ? value : files ? files : ''
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    let errors = formValues.errors;
    validateForm(errors);
    for (let val of Object.values(formValues.errors)) {
      if (val) {
        setLoading(false)
        return
      }
    }
    delete formValues.errors

    let data = await login(formValues);
    console.log("data ___", data)
    setLoading(false)
    if (data && data.status === "success") {
      toastr.success("Success!!");
      setLoading(false)
      setSuccess(true)
    } else {
      toastr.error("Invalid Credentials");
      setLoading(false)
    }
  }

  const validateForm = errors => {
    const { email } = formValues;

    for (let val in formValues) {

      if (val === "email") {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(email).toLowerCase())) {
          errors.email = "email is invalid";
        }
      }

    }
    setFormValues(prevState => {
      return {
        ...prevState,
        errors
      };
    });
  };

  const { errors} = formValues
  return (
    !success ?
      <main>
        <div className="container">
          <div className="form-divider" />
          <div className="text-center">
            <img src="/img/icon.png" className="covid-img" alt="" />
          </div>
          <div className="form-row-group with-icons">
            <div className="form-row no-padding">
              <i className="fa fa-envelope" />
              <input type="email" onChange={handleChange} name="email" className="form-element" placeholder="Email" />
            </div>
            {errors.email && errors.email.length > 0 && (
              <span className="addGroup__error">{errors.email}</span>
            )}

          </div>

          <div className="form-row">
            {
              !loading ? <a href="#" onClick={(e)=> handleSubmit(e)} className="button circle block orange"> Reset Password</a> :
                <a href="#" onClick={(e)=> handleSubmit(e)} className="button circle block green"> Reseting Password ....</a>
            }

          </div>
          <div className="form-row txt-center">
            Remember Your Password?
            <Link to="/login" > Login</Link>
          </div>
          <div className="form-divider" />
        </div>
      </main> :
      <Redirect to="/" />
  )
}

export {ForgortPassword}