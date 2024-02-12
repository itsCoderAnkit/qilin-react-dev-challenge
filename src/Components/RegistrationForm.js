import React, { useState } from 'react';

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const newErrors = {};

    function isValidEmail(email) {
        console.log(email)
        if (!email.includes('@') || !email.includes('.')) {
       
        newErrors.email = 'Email must include "@" & "."'
        return false
        }
      
        const [username, domain] = email.split('@');
      
        console.log(username,domain)
        if (!username.length ) {
      
        newErrors.email = 'Email Incorrect'
        return false
        }
   
        if (!domain.includes('.') || domain.length<3) {
       
        newErrors.email = 'Email domain incorrect'
        return false
        }
      
        return true;
      }
      
      
      let emailVerification = isValidEmail
      emailVerification(email)

    if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    
    if (Object.keys(newErrors).length === 0) {
     
      console.log('Form submitted successfully');
      
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="string"
          name="email"
          value={email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div>
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
