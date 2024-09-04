import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNavbar = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand text-white" to="/">
                    <img src="./logo.png" alt="Logo" className="mr-2" width={"70px"} height={""}/>
                    <span style={{ color: '#ffc107' }}>E-Commerce</span>
                </Link>
                <button
                    className="navbar-toggler color-white"
                    type="button"
                    onClick={toggleNavbar}
                >
                    {isNavOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/" onClick={toggleNavbar}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact" onClick={toggleNavbar}>
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about" onClick={toggleNavbar}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/cart" onClick={toggleNavbar}>
                                <img src="./basket.png" alt="osama" width={"40px"} height={"20px"}/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
