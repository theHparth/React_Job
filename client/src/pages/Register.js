import React, { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../asserts/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert, registerUser, loginUser } =
    useAppContext();

  const toggleMember = (member) => {
    setValues({ ...values, isMember: !values.isMember });
  };
  // global context and useNavigate later
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });

    // setValues(email:values.email, )
  };
  const onSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>

        {showAlert && <Alert />}

        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            labelText="name"
            handleChange={handleChange}
          />
        )}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          labelText="Email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          labelText="Password"
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
