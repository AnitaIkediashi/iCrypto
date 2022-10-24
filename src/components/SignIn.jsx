import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import loginImage from '../images/sigin.png'

const SignIn = () => {

  const [showPassword, setShowPassword] = useState(false);

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
  });

  const [emailErr, setEmailErr] = useState({});
  const [passwordErr, setPasswordErr] = useState({});

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

  const getUserDetails = localStorage.getItem("registeredUser")
  // console.log(getUserDetails)

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validRegistrationForm();
    if (isValid) {
      if (getUserDetails && getUserDetails.length) {
        const userData = JSON.parse(getUserDetails)
        // console.log(userData)
        const userLogin = userData.filter((el, index) => {
          return el.email === signUpForm.email && el.password === signUpForm.password
        })

        if (userLogin.length === 0) {
          alert('Invalid Details')
        } else {
          history("/exchange")
        }
      }
    }
  };

  const validRegistrationForm = () => {
    const emailErr = {};
    const passwordErr = {};
    let isValid = true;
    const regex = /[@]/i;

    
    if (signUpForm.email === "") {
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
    setEmailErr(emailErr);
    setPasswordErr(passwordErr);
    return isValid;
  };

  return (
    <div className="login">
      <div className="container login__container">
        <div className="left">
          <h2>Welcome User!</h2>
          <form className="left__form">
            <div className="left__form-inputs">
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

            <div className="left__form-inputs">
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

            <button className="btn" onClick={handleSubmit}>Login</button>
          </form>
        </div>
        <div className="right">
          <div className="right__image">
            <img src={loginImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn