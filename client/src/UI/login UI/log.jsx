import React from 'react';
import conStyle from '../../CSS/containerStyle.module.css';


const Log = () => {
    return (
        <div className={conStyle.log}>
            <div id={conStyle.wrapper}>
                <h1>Sign In Form</h1>
	            <form id={conStyle.signin} method="" action="" autocomplete="off">
		            <input type="text" id={conStyle.user} name="user" placeholder="username" />
		            <input type="email" id={conStyle.pass} name="email" placeholder="email" />
		            <input type="password" id={conStyle.pass} name="pass" placeholder="password" />
		            <button type="submit">&#xf0da;</button>
		            <p>forgot your password? <a href="#">click here</a></p>
	            </form>
            </div>
        </div>
    );
}

export default Log;