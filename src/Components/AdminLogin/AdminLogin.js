import React, {useState} from "react";
import {auth} from "../../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      // Call Firebase's signInWithEmailAndPassword method to authenticate the user
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Login successful, do something with the user data
          const user = userCredential.user;
          console.log('Logged in:', user);
        })
        .catch((error) => {
          // Handle login errors
          console.error('Login error:', error.message);
        });
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  };

export default AdminLogin;