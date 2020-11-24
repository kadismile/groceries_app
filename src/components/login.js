import React, {useState} from 'react'
import {login} from "../utils/auth-client";
import toastr from "toastr";
import {Redirect} from "react-router";
import {Link} from "react-router-dom";

function Login () {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
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
    const { password, email } = formValues;

    for (let val in formValues) {
      if (val === "password") {
        if (password.length <= 3) {
          errors.password = "password is too short!";
        }
      }

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
          <div className="form-row no-padding">
            <i className="fa fa-lock" />
            <input type="password" onChange={handleChange} name="password" className="form-element" placeholder="Password" />
          </div>
          {errors.password && errors.password.length > 0 && (
            <span className="addGroup__error">{errors.password}</span>
          )}
        </div>
        <div className="form-row txt-center">
          <Link to="/forgot-password" > Forgot password? </Link>
        </div>
        <div className="form-row">
          {
            !loading ? <a href="#" onClick={(e)=> handleSubmit(e)} className="button circle block orange">Login</a> :
              <a href="#" onClick={(e)=> handleSubmit(e)} className="button circle block green">Loading ....</a>
          }

        </div>
        <div className="form-row txt-center">
          Don't you have an account yet?
          <Link to="/add-user" > Sign Up </Link>
        </div>
        <div className="form-divider" />
      </div>
    </main> :
      <Redirect to="/" />
  )
}

export {Login}