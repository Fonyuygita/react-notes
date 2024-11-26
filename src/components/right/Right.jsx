import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './right.css';

const newsChannels = [
    { name: 'CRTV', icon: '/crtv.png' },
    { name: 'CANAL2', icon: '/canal2.png' },
    { name: 'STV', icon: '/stv.png' },
]

const RightBar = () => {
    return (
        <div className="rightbar">
            <h3>Whats happening</h3>
            <div className="news-list">
                {newsChannels.map((channel, index) => (
                    <div className="rightbar-item" key={index}>

                        <div className="news-info">
                            <p className='name'>{channel.name} <FaCheckCircle className="verify-icon" /></p>
                            <button className="follow-button">Follow</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RightBar;
