import { useState } from "react";
import PropTypes from "prop-types";
import InputField from "./InputField";

const LoginForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form id="login-form" className="login__form" onSubmit={handleSubmit}>
      <div className="login__input-fields flex flex-dir-c">
        <InputField
          type="email"
          id="email"
          name="email"
          placeholder="Type your email"
          value={email}
          onChange={handleChange}
          label="Email address"
          required
        />
        <InputField
          type="password"
          id="password"
          name="password"
          placeholder="Type your password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
