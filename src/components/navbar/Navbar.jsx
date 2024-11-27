import React from 'react';
import { FaHome, FaBell, FaEnvelope, FaUser } from 'react-icons/fa';
import './navbar.css';
import { Link } from 'react-router-dom';
import { FaColonSign } from 'react-icons/fa6';

const NavBar = () => {
    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-item">
                    <Link to="/login">
                        <FaColonSign />
                        <span >Login</span>
                    </Link>
                </div>
                <div className="navbar-item">
                    <FaHome />
                    <span>Home</span>
                </div>
                <div className="navbar-item">
                    <FaBell />
                    <span>Notifications</span>
                </div>
                <div className="navbar-item">
                    <FaEnvelope />
                    <span>Messages</span>
                </div>
                <div className="navbar-item">
                    <FaUser />
                    <span>Profile</span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
