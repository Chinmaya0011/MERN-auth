import React, { useContext, useState } from 'react';
import style from "../assets/Styles/Login.module.css";
import { AppContext } from '../Context/Context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    userLogin(email, password); // Call userLogin with the email and password
  };

  return (
    <div className={style.container}>
      <h2 className={style.heading}>Login</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="email" className={style.label}>Email:</label>
          <input
            type="email"
            id="email"
            className={style.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={style.formGroup}>
          <label htmlFor="password" className={style.label}>Password:</label>
          <input
            type="password"
            id="password"
            className={style.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={style.submitButton}>Login</button>
      </form>
    </div>
  );
};

export default Login;
