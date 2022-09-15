import React, { useState } from 'react';

function LoginForm({Login, Error}){

    const [details,setDetails]=useState({name:"", email:"", password:""});

    const submitHandler=j=>{
        j.preventDefault();
        
        Login(details);
    }


    return(<form onSubmit={submitHandler}>
        <div className='form-inner'>
            <h2>Login</h2>
            {(Error!="")?<div>{Error}</div>:""}
            <div className='formGroup'>
                <label htmlFor='Name'>Name:</label>
                <input type='text' name='Name' id='Name' onChange={j=>setDetails({...details , name:j.target.value})} value={details.name}/>
            </div>
            <div className='formGroup'>
                <label htmlFor='Email'>Email:</label>
                <input type='email' name='Email' id='Email' onChange={j=>setDetails({...details, email:j.target.value})} value={details.email}/>
            </div>
            <div className='formGroup'>
                <label htmlFor='Password'>Password:</label>
                <input type='password' name='Password' id='Password' onChange={j=>setDetails({...details, password:j.target.value})} value={details.password}/>
            </div>
            <input type='submit' value="LOGIN"/>
        </div>
    </form>);
}

export default LoginForm;
