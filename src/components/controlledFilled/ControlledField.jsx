import React, { useState } from 'react';

const ControlledField = () => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {

          e.preventDefault();
          console.log(name, email, password);
    }

    const handlePassword = (e) => {

        console.log(e.target.value);
        setPassword(e.target.value);

        if(password.length < 6){
            setError('password must be 6 characters or longer');
        }
        else{
            setError('');
        }
    }

    const handleEmailOnchange = (e) => {

         setEmail(e.target.value);
    }

    const handleNameonChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleNameonChange} defaultValue={name} name='name' placeholder='Name' />
                <br/>
                <input type="email" onChange={handleEmailOnchange} defaultValue={email} name='email' id='' placeholder='Email' required />
                <br/>
                <input type="password" name='password' id='' placeholder='Password' onChange={handlePassword} defaultValue={password} required />
                <br/>
                <input type="submit" value='Submit' />
            </form>
            <p style={{color: 'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;