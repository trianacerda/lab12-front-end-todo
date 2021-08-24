import React, { Component } from 'react';

class Auth extends Component {
    state = {  }
    render() { 
        return ( 
            <>
                <form className='input-form'>
                    <fieldset>
                        <label>Email:</label>
                        <input type='text'></input>

                        <label>Password:</label>
                        <input type='text'></input>

                        <button>Sign Up</button>

                    </fieldset>
                </form>
            </>
         );
    }
}
 
export default Auth;