import React, { Component } from 'react';
import { getToken } from './fetch-utils.js';

class Auth extends Component {
    state = { email: '', password:'' };
    getType = () => {
        return this.props.type === 'signin' ? 'Sign In' : 'Sign Up';
    };
    
    handleClick = async (e) => {
        e.preventDefault();
        const token = await getToken(
            {
                email: this.state.email,
                password: this.state.password,
            },
            this.props.type
        );
        this.props.setToken(token);
        this.props.history.push('/todos');
    }
    render() { 
        return ( 
            <>
                <h1>{this.getType()}</h1>
                <form onClick={this.handleClick}>
                    <div className='form-handle'>
                        <label>Email: </label>
                        <input 
                            type='email'
                            onChange={(e) =>
                                this.setState({ email: e.target.value })
                            }
                        />
                    </div>
                    <div className='form-handle'>
                        <label>Password: </label>
                        <input 
                            type='email'
                            onChange={(e) =>
                                this.setState({ password: e.target.value })
                            }
                        />
                    </div>
                    <button>{this.getType()}</button>
                </form>
            </>
         );
    }
}
 
export default Auth;