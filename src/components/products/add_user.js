import React, {useState} from 'react'
import toastr from "toastr";
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import {register} from "../../utils/auth-client";
import {validPhoneNumber} from "../../utils/validPhoneNumber";
import {Redirect} from "react-router";


function AddUser () {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    repeat_password: "",
    address: {
      country: "",
      fullAddress: "",
      countryCode: "",
      longitude: "",
      latitude: ""
    },
    errors: {}
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


  //#########MAP FORM INPUTS
  //====================================================>
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleMapInput = (e) => {
    setValue(e.target.value);
  };
  const handleSelect = ({ description }) => () => {
    console.log("description ", description)
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();
    // Get latitude and longitude via utility functions
    getGeocode ({ address: description })
      .then( async (results) => {

        const latLng = await getLatLng(results[0]);
        const {lat, lng } = latLng;

        const result = results[0].address_components;
        let countryData = result.find((res)=> { return (res.types).includes('country', 'political') });
        const {long_name, short_name} = countryData;

        setFormValues( prevState => {
          return {
            ...prevState,
            address: {
              country: long_name,
              fullAddress: description,
              countryCode: short_name,
              longitude: lng,
              latitude: lat
            },
          };
        });
      })
      .catch((error) => {
        console.log("😱 Error: ", error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        reference,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li className="list-search" key={reference} onClick={handleSelect(suggestion)}>
          <b><i className="bx bx-map-pin"></i> {main_text}</b> <small>{secondary_text}</small>
        </li>
      );
    });
  //### END OF MAP FORM INPUTS
  //====================================================>


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

    formValues.fullName = formValues.username
    formValues.userType = "customer"
    formValues.accountBalance = 0


    delete formValues.repeat_password
    delete formValues.username

    let data = await register(formValues);
    setLoading(false)
    if (data && data.status === "success") {
      toastr.success("Success!!");
      setLoading(false)
      setSuccess(true)
    } else {
      toastr.error("Failed");
    }
  }


  const validateForm = errors => {
    const { username, password, repeat_password, email, address, phoneNumber } = formValues;
    for (let val in formValues) {
      if (val === "username") {
        if (username.length <= 3) {
          errors.username = "username must be more than 3 characters long!";
        }
      }

      if (val === "password") {
        if (password.length <= 3) {
          errors.password = "password is too short!";
        }
      }

      if (val === "repeat_password") {
        if (repeat_password.length <= 3) {
          errors.repeat_password = "repeated password is too short!";
        }

        if (repeat_password !== password) {
          errors.repeat_password = "password do not match";
        }
      }

      if (val === "email") {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(String(email).toLowerCase())) {
          errors.email = "email is invalid";
        }
        if (email.length === 0) {
          errors.email = "please add an email address";
        }
      }


      if (val === "phoneNumber") {
        if (!phoneNumber.length) {
          errors.phoneNumber = "phone cannot be empty!";
        }
        if(phoneNumber && !/^[0-9]+$/.test(phoneNumber)){
          errors.phoneNumber = "phone number should be a number "
        }
        if (phoneNumber.length >1 && !validPhoneNumber(phoneNumber, "NG")) {
          errors.phoneNumber = "phone number is not valid!";
        }
      }

      for (let add of Object.values(formValues.address)) {
        if (!add) {
          errors.address = "adress cannot be empty!";
        } else {
          errors.address = "";
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

  const { errors} = formValues;
  return (
    !success ?
    <main>
      <div className="container">
        <div className="form-divider" />
        <div className="form-row txt-center">
          Already have an account? <a href="login.html" data-loader="show">Login</a>
        </div>
        <div className="text-center">
          <img src="/img/icon.png" className="covid-img" alt="" />
        </div>
        <div className="form-row-group with-icons">
          <div className="form-row no-padding">
            <i className="fa fa-user" />
            <input type="text" name="username" onChange={handleChange} autoComplete="new-username" className="form-element" placeholder="Username"/>
          </div>
          {errors.username && errors.username.length > 0 && (
            <span className="addGroup__error">{errors.username}</span>
          )}

          <div className="form-row no-padding">
            <i className="fa fa-envelope" />
            <input type="email" name="email" autoComplete="new-email" onChange={handleChange} className="form-element" placeholder="Email"/>
          </div>
          {errors.email && errors.email.length > 0 && (
            <span className="addGroup__error">{errors.email}</span>
          )}

          <div className="form-row no-padding">
            <i className="fa fa-phone" />
            <input type="text" name="phoneNumber" onChange={handleChange} className="form-element" placeholder="Phone Number"/>
          </div>
          {errors.phoneNumber && errors.phoneNumber.length > 0 && (
            <span className="addGroup__error">{errors.phoneNumber}</span>
          )}

          <div className="form-row no-padding">
            <i className="fa fa-lock" />
            <input type="password" onChange={handleChange} name="password" className="form-element" placeholder="Password" />
          </div>
          {errors.password && errors.password.length > 0 && (
            <span className="addGroup__error">{errors.password}</span>
          )}
          <div className="form-row no-padding">
            <i className="fa fa-lock" />
            <input type="password" name="repeat_password" onChange={handleChange} className="form-element" placeholder="Repeat Password" />
          </div>
          {errors.repeat_password && errors.repeat_password.length > 0 && (
            <span className="addGroup__error">{errors.repeat_password}</span>
          )}
        </div>


        <div className="form-divider" />
        <div className="form-label-divider"><span>SHIPPING ADDRESS</span></div>
        <div className="form-divider" />

        <div className="form-row-group with-icons">
          <div className="form-row no-padding" ref={ref}>
            <i className="fa fa-map-marker" />
            <input
              value={value}
              onChange={handleMapInput}
              disabled={!ready}
              className="form-element"
              placeholder="Address"
            />
            {status === "OK" && <ul className="google_autocomplete">{renderSuggestions()}</ul>}
          </div>
          {errors.address && errors.address.length > 0 && (
            <span className="addGroup__error">{errors.address}</span>
          )}
        </div>

        <div className="form-divider" />
        <div className="form-row">
          {
            !loading ? <a href="#" onClick={(e)=> handleSubmit(e)} className="button circle block orange">Sign Up</a> :
            <a href="#" onClick={(e)=> handleSubmit(e)} className="button circle block green">Submitting ....</a>
          }
        </div>
      </div>
    </main> :
      <Redirect to="/checkout" />

  )
}

export {AddUser}