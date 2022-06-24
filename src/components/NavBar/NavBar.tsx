import React from "react";
import s from './NavBar.module.css'

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <a href='#'>Profile</a>
            </div>
            <div>
                <a href='#'>Friends</a>
            </div>
            <div>
                <a href='#'>Messages</a>
            </div>
            <div>
                <a href='#'>News</a>
            </div>
            <div>
                <a href='#'>Music</a>
            </div>
            <div>
                <a href='#'>Settings</a>
            </div>
        </nav>
    )
}