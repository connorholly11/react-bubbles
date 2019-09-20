import React, {useState} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [form, setForm] = useState({username: '', password: ''})

  const ChangeHandler = e => {
    setForm ({...form, [e.target.name]: e.target.value})
 }

  const SubmitForm = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/login', form)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)

        props.history.push('/bubblepage')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <form onSubmit = {SubmitForm} >
          <input  
          name='username'
          placeholder='username'
          onChange={ChangeHandler}
          value={form.username}
          />

          <input  
          name='password'
          placeholder='password'
          onChange={ChangeHandler}
          value={form.password}
          />

          <button type='submit'> Login </button>
      </form>
    </>
  );
};

export default Login;
