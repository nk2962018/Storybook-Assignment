import Button from "../Button/Button";
import Input from "../Input/Input";
import React, { useState } from 'react';
import propTypes from 'prop-types';
import './Form.css';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        // Perform any authentication logic here (for simplicity, I'm just checking if a username is entered)
        if (username) {
          setLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setUsername('');
        setPassword('');
        setLoggedIn(false);
      };
    return(
        <>
            {isLoggedIn ? (
                <>
                    <div>
                    {isLoggedIn && (
                        <div>
                            <p className="user-text">Hello {username}</p>
                        </div>
                    )}
                    </div>
                    <Button size="small"  onClick={handleLogout} label="Log out" /> 
                </>
            ) : (
                <>
                    <Input 
                    type='text'  
                    placeholder='Enter Username' 
                    size='medium'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />

                    <Input 
                        type='password'  
                        placeholder='Enter Password' 
                        size='medium'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type='submit' buttonColor='primary' label='Login' onClick={handleLogin}/>

                </>
            )}
        </>
    )
}

LoginForm.propTypes = {
    isLoggedIn:propTypes.bool
}

LoginForm.defaultProp = {
    isLoggedIn:false
}
export default LoginForm;