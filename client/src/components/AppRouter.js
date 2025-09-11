import React, { useContext } from 'react';
import { AuthRoutes, PubicRoutes } from '../routs';
import {Routes, Route, Navigate} from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user);
    
    
    return (
        <Routes>
            {user.isAuth && AuthRoutes.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}
            
            {PubicRoutes.map(({path, Component}) => 
                <Route key={path} path={path} Component={Component} exact/>
            )}
            {/* При неправильно введённой ссылке перекидывает на главный экран */}
            <Route path='*' element={<Navigate to={SHOP_ROUTE} replace/>}/>

        </Routes>
    );
}

export default AppRouter;