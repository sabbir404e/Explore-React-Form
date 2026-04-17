import React from 'react';
import UseInputField from '../../hooks/UseInputField';

const HooksForm = () => {

    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const [password, passwordOnChange] = UseInputField('');

   const handleSubmit = (e) => {

    e.preventDefault();
    console.log('submit', name, email, password);
   }

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input type="text" onChange={nameOnChange} defaultValue={name} name='name' placeholder='Name' />
               <br/>
                <input type="email" onChange={emailOnChange} defaultValue={email} name="email" placeholder='Email' />
               <br/>
               <input type="password" onChange={passwordOnChange} defaultValue={password} name="password" placeholder='Password' />
               <br />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HooksForm;