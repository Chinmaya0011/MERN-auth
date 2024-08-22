import React, { useContext, useState } from 'react';
import style from "../assets/Styles/SignUp.module.css";
import { AppContext } from '../Context/Context';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const{userSignUp}=useContext(AppContext)
const handleSubmit = (e) => {
  e.preventDefault(); // Prevent default form submission
  userSignUp(name,email,password)

};
  return (
    <div className={style.container}>
      <h2 className={style.heading}>Sign Up</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.formGroup}>
          <label htmlFor="name" className={style.label}>Name:</label>
          <input
            type="text"
            id="name"
            className={style.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
        <button type="submit" className={style.submitButton}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
