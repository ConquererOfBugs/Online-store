import React, { useContext } from 'react';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)

    return (
    <div className='NavBar'>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: "white", textDecoration:"none"}} to={"/"}>SDN</NavLink>

                {user._isAuth ? 
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => user.setAuth(false)}>Выйти</Nav.Link>
                        <Nav.Link href="">Админ панель</Nav.Link>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => user.setAuth(true)}>Авторизация</Nav.Link>
                    </Nav>
                }
            </Container>
        </Navbar>
    </div>
    );
})

export default NavBar;