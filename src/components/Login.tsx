import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from './todoList/features/authSlice';
import { Navigate } from "react-router-dom";
import { useLoginMutation } from "./todoList/services/apiSlice";
import { RootState } from '../store';

const Login: React.FC = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();
  const submitButtonRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (submitButtonRef.current) {
      submitButtonRef.current.focus();
    }
  }, []);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { signIn: { token, user} } = await login({ username, password }).unwrap();
      dispatch(setToken(token));
      dispatch(setUser(user));
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <div>
      { token ? <Navigate to="/" /> : null }
      <form className="needs-validation" action="http://localhost:3051/sessions" method="post" onSubmit={handleSubmit} noValidate>
        <input
          className="form-control"
          type="text"
          name="username"
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <div className="invalid-feedback">
          Please provide a username.
        </div>
        <input
          className="form-control"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <div className="invalid-feedback">
          Please provide a password.
        </div>
        <input className="btn btn-primary" type="submit" value="login" ref={submitButtonRef} />
      </form>
    </div>
  );
}

export default Login;
