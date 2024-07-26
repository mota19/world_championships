import eye from '../../assets/free-icon-eye-158746.png';
import  { useState } from 'react';
import axios from 'axios';
function RegisterPage() {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = (e) => {
    
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    axios.post('http://localhost:3001/register',{email,phoneNumber,password,birthdate,firstName,lastName})
    .then(result => {console.log(result)
      window.location.href = '/login';
    })
    .catch(err=>console.log(err))
  };
 

  return (
    <>
    <div className='body'>
      <div className="login-container">
        <h1>Register</h1>
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
          <div className="form-input-email">
            <input
              type="tel"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <br />
          </div>
          <div className="form-div-first-last-name">
            <input
              type="text"
              placeholder="First name"
              className="form-input-first-name"
              id="input-first-name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <br />
            <input
              type="text"
              placeholder="Last name"
              className="form-input-last-name"
              id="input-last-name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-input-date">
            <input
              type="date"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
            <br />
          </div>
          <div className="form-input-password">
            <input
              type="password"
              placeholder="Create password"
              id="Create_password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
          </div>
          <div className="form-input-password">
            <input type={showPassword ? 'text' : 'password'} placeholder="Confirm password" id="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
            <img src={eye} id="image_eyeicon" alt="Eye Icon" onClick={() => setShowPassword(!showPassword)}/>
            <br />
          </div>
          <button className="register-btn" type="submit">Register</button>
        </form>
        <p className="signup-link">
          Do have an account? <a href="/login" className="text-white-50">Sign in</a>
        </p>
      </div>
      </div>
    </>
  );
}

export default RegisterPage;