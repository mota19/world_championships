import eye from "../../assets/free-icon-eye-158746.png";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          window.location.href = "/home";
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="body">
        <div className="login-container">
          <h1>Login</h1>
          <p>Please enter your login and password!</p>
          <form id="myForm" onSubmit={handleRegistration}>
            <div className="form-input-email">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <br />
            </div>

            <div className="form-input-password">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img
                src={eye}
                id="image_eyeicon"
                alt="Eye Icon"
                onClick={() => setShowPassword(!showPassword)}
              />
              <br />
            </div>
            <button className="register-btn" type="submit">
              Login
            </button>
          </form>
          <p className="signup-link">
            Doesn’t have an account?{" "}
            <a href="/register" className="text-white-50">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
