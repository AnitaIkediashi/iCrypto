import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpImage from "../images/signup.png";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

  const [data, setData] = useState([]);
  // console.log(signUpForm)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm(() => {
      return {
        ...signUpForm,
        [name]: value,
      };
    });
  };

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validRegistrationForm();
    if (isValid) {
      history("/Login");
      localStorage.setItem(
        "registeredUser",
        JSON.stringify([...data, signUpForm])
      );
    }
  };

  const validRegistrationForm = () => {
    const nameErr = {};
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;
    const regex = /[@]/i;

    if (signUpForm.name === "") {
      nameErr.name = "Full name required";
      isValid = false;
    } else if (signUpForm.email === "") {
      emailErr.email = "Email required";
      isValid = false;
    } else if (!regex.test(signUpForm.email)) {
      emailErr.email = "Symbol @ is required";
      isValid = false;
    } else if (signUpForm.password === "") {
      passwordErr.password = "Password required";
      isValid = false;
    } else if (signUpForm.password.length < 5) {
      passwordErr.password =
        "password length should not be less than 5 characters";
      isValid = false;
    } else if (signUpForm.password.length > 8) {
      passwordErr.password =
        "password length should not be greater than 10 characters";
      isValid = false;
    }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  return (
    <div className="register">
      <div className="container register__container">
        <div className="left">
          <div className="left__image">
            <img src={SignUpImage} alt="" />
          </div>
        </div>
        <div className="right">
          <h2>New here? Register</h2>
          <form className="right__form">
            <div className="right__form-inputs">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="input__box"
                onChange={handleChange}
              />
            </div>
            {Object.keys(nameErr).map((key) => {
              return <p className="error">{nameErr[key]}</p>;
            })}
            <div className="right__form-inputs">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="input__box"
                onChange={handleChange}
              />
            </div>
            {Object.keys(emailErr).map((key) => {
              return <p className="error">{emailErr[key]}</p>;
            })}
            <div className="right__form-inputs">
              <label>Password:</label>
              <div className="password">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input__box"
                  onChange={handleChange}
                />
                <span
                  className="password__icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <i
                    className={
                      showPassword ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            {Object.keys(passwordErr).map((key) => {
              return <p className="error">{passwordErr[key]}</p>;
            })}
            <button className="btn" onClick={handleSubmit}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
