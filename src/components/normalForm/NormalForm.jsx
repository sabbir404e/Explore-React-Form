import React from 'react';

const NormalForm = () => {
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name='name' placeholder='Your Name' />
            <br />
             <input type="email" name="email" placeholder='Your Email' />
            <input type="Submit" value="Submit" />
            </form>
        </div>
    );
};

export default NormalForm;