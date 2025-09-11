import React from 'react';
import loginClass from '../../CSS/loginContainer.module.css';
import Log from './log';


const LoginPannel = () => {
    return (
        <div className={loginClass.container}>
            <div className={loginClass.panel}>
                <Log/>
            </div>
        </div>
    );
}

export default LoginPannel;