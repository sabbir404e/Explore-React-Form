import React from 'react';

const FormAction = () => {

    const handleFormActon = (formData) => {

        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
        <div>
            <form action={handleFormActon}>
                 <input type="text" name='name' placeholder='Name' />
                 <br/>
                 <input type="email" name='email' placeholder='Email' />
                 <br/>
                 <input type="Submit" value='Submit' />
            </form>
        </div>
    );
};

export default FormAction;