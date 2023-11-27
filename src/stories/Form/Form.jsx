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
                        <div className="user-text">
                            <p >Hello {username}</p>
                        </div>
                    )}
                    </div>
                    <Button size="small"  onClick={handleLogout} label="Log out" buttonColor='danger'/> 
                </>
            ) : (
                <div className="d-flex justify-content-end">
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

                    <Button type='submit' buttonColor='success' label='Login' onClick={handleLogin}/>

                </div>
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