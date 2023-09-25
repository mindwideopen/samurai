import React from "react";
import s from './Nav-component.module.css'

import {NavLink} from "react-router-dom";


const Nav = () => {

    return (
        <nav className={s.nav}>

            <div className={s.wrap}>
                <li >
                    <NavLink
                        to="/profile"
                        className={({ isActive}) =>
                            isActive ? `${s.activeLink}` : "settings"
                        }
                    >
                        Profile
                    </NavLink>
                </li>

                <li >
                    <NavLink
                        to="/dialogs"
                        className={({ isActive}) =>
                            isActive ? `${s.activeLink}` : ""
                        }
                    >
                        Dialogs
                    </NavLink>
                </li>

                <li >
                    <NavLink
                        to="/music"
                        className={({ isActive}) =>
                            isActive ? `${s.activeLink}` : ""
                        }
                    >
                        Music
                    </NavLink>
                </li>

                <li >
                    <NavLink
                        to="/news"
                        className={({ isActive}) =>
                            isActive ? `${s.activeLink}` : ""
                        }
                    >
                        News
                    </NavLink>
                </li>

                <li >
                    <NavLink
                        to="/settings"
                        className={({ isActive}) =>
                            isActive ? `${s.activeLink}` : ""
                        }
                    >
                        Settings
                    </NavLink>
                </li>

                <li >
                    <NavLink
                        to="/friends"
                        className={({ isActive}) =>
                            isActive ? `${s.activeLink}` : ""
                        }
                    >
                        Friends
                    </NavLink>
                </li>
            </div>









        </nav>
    );


}

export default Nav;
