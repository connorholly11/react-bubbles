import React from "react";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [form, setForm] = useState({username: '', password: ''})


  return (
    <>
      <form>
        <input  
        name='username'
        placeholder='username'
        onChange={}
        value={}
        />
        <input  
        name='password'
        placeholder='password'
        onChange={}
        value={}
        />
      </form>
    </>
  );
};

export default Login;
