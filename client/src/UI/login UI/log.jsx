import React, { useContext } from 'react';
import conStyle from '../../CSS/containerStyle.module.css';
import { Context } from '../..';
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';


const Log = () => {

    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE 
    console.log(location);
    

    const {user} =useContext(Context)

    return (
        <div className={conStyle.log}>
            <div id={conStyle.wrapper}>
                <h1>{isLogin ? "Sign In" : "Log In"}</h1>
	            <form id={conStyle.signin} method="" action="" autocomplete="off">
		            {isLogin ? <input type="text" id={conStyle.user} name="user" placeholder="username" /> : ''}
		            <input type="email" id={conStyle.pass} name="email" placeholder="email" />
		            <input type="password" id={conStyle.pass} name="pass" placeholder="password" />
		            <button type="submit" onClick={() => user.setAuth(true)}>&#xf0da;</button>
		            {isLogin ?
                        <p>has account? <a href={REGISTRATION_ROUTE}>click here</a></p>
                    
                    :
                        <p>has't account? <a href={LOGIN_ROUTE}>click here</a></p>
                    }
	            </form>
            </div>
        </div>
    );
}

export default Log;