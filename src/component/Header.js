import React from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className='siteNav bg-white py-5'>
            <div className="container mx-auto">
                <div className="flex items-center">
                    <div className="siteLogo">
                        <img src="./images/logo.png" alt="" width={150}></img>
                    </div>
                    <div className="siteMenu ml-auto flex">
                        <Link to="/">Home</Link>
                        <Link to="/">About</Link>
                        <Link to="/">Services</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;