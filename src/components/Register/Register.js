import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register now</h3>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" name="" placeholder='Your Email' id="" />
                <br />
                <input type="password" name="" placeholder='Your Password' id="" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;