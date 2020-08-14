import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import api from '../../services/api';
import styles from './styles.module.css'
import logo from '../../img/logo.png';

const Login = () => {

    const [cookies, setCookie] = useCookies();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    function handleLoginChange(e) {
        setName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        try {
            api
                .post('/verifiers/login', { name, password })
                .then(res => {
                    if (res.status === 200) {
                        setCookie('verifierJWT', res.data.verifierJWT);
                        history.push('/certificate');
                      // history.push('/wrong', { message: 'Need New Page ro redirect' });
                    } else {
                        history.push('/wrong', { message: 'Invalid Username/Password' });
                        return function cleanup() { }
                    }
                })
                .catch(() => {
                    history.push('/wrong', { message: 'Invalid Username/Password' });
                    return function cleanup() { }
                });
        } catch (error) {
            alert('Fail to Login! Try again.');
        }
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.content}>            
                  <div className={styles.content_items}>
                  <img className={styles.image} alt="Identity logo"  src={logo} />
                   <h4>Certificate</h4>
                    <form className={styles.form} onSubmit={handleSubmit}>                    
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Username"
                            value={name}
                            onChange={handleLoginChange}
                            required />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            required />
                        <div className={styles.buttons}>
                            <a>
                                <button id="buttonLogin">
                                    Login
                                </button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;