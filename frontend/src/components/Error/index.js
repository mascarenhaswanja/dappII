import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.css';
import logo from '../../img/logo.png';

const Wrong = (props) => {

    const history = useHistory();

    let message;

    if (props.location.state) {
        message = props.location.state.message
    } else {
        message = 'Error'
    }

    useLayoutEffect(() => {
        document.body.style.backgroundColor =  "#E5E5E5" //"#e5e5e5";
        document.body.style.margin = "0";
    }, []);

    function handleClick(e) {
        history.push('/');
    }

    return (
        <div className={styles.container}>
            <img src={logo} alt="Wrong" />
            <h1>{message}</h1>
            <button onClick={handleClick}>Go to Login</button>
        </div>
    );
}

export default Wrong;