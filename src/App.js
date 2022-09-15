import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const LoginDetails={
    email:"admin@admin.com",
    password:"123456"
  }

  const [user,setUser]=useState({email:"",name:""});
  const [error,setError]=useState("");

  const Login=details=>{
    if (details.email === LoginDetails.email && details.password=== LoginDetails.password){
      console.log("logged in!!");
      setUser({
        email:details.email,
        name:details.name
      });
    }else{
      console.log("Credentials do not match!");
      setError("Credentials do not match!");
    }
  }

  const Logout=()=>{
    setUser({email:"",name:""})

  }

  return (
    <div className="App">
      {(user.email!=="")?(
        <div className='Welcome'>
          <h2>Welcome ,<span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ):<LoginForm Login={Login} Error={error}/>}
    </div>
  );
}

export default App;
