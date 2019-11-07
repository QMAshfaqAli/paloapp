import React from 'react';
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";

const header = (props) => {

    library.add(fas, far);

    return (
        <header className="App-header">
            <div className="Container">
                <div className="grid1">
                    <div className="main-menu">
                        <FontAwesomeIcon icon="bars"/>
                    </div>
                    <div className="search">
                        <FontAwesomeIcon icon="search"/>
                    </div>

                    <div className="dates"><span>মঙ্গলবার</span> ১৮ জুন ২০১৯, ঢাকা</div>
                </div>

                <div className="grid2">
                    <a href="/"> <img src={window.location.origin + "/logo.png"} alt="logo" className="logo"/></a>
                </div>

                <div className="grid3">
                    <button className="login-button">
                        <span className="lb_desktop">লগইন</span>
                        <span className="lb_mobile">
                        <FontAwesomeIcon icon="user"/>
                    </span>
                    </button>

                    <div className="notification">
                        <FontAwesomeIcon icon={['far', 'bell']}/>
                    </div>
                    <div className="edition">সংস্করণ: বাংলা</div>
                </div>

                <nav className="nav">
                    {props.menuList}
                </nav>

            </div>
        </header>
    )
};

export default header;