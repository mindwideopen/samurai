import React from "react";
import s from './Nav-component.module.css'
import Label from "./Sponsor/label";
import {NavLink} from "react-router-dom";


const Nav = () => {

    return (
        <nav className={s.nav}>

            <li >
                <NavLink
                    to="/profile"
                    className={({ isActive}) =>
                        isActive ? `${s.activeLink}` : ""
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






            {/*<div className= {s.item}>*/}

            {/*        <NavLink to="/profile" className={({ isActive }) => isActive ? "activeLink" : ""*/}
            {/*        } </NavLink>*/}
            {/*    </div>*/}

            {/*    <div className= {s.item} >*/}
            {/*        <NavLink to="/dialogs">Dialogs</NavLink>*/}
            {/*    </div>*/}

            {/*    <div className= {s.item}>*/}
            {/*        <NavLink to="/news">News</NavLink>*/}
            {/*    </div>*/}
            {/*    <div className= {s.item}>*/}
            {/*        <NavLink to="/music">Music</NavLink>*/}
            {/*    </div>*/}

            {/*    <div className= {s.item}>*/}
            {/*        <NavLink to="/settings">Settings</NavLink*/}
            {/*        ></div>*/}




        </nav>
    );


}

export default Nav;
