import React from 'react';
import './sidebar.css';

const Sidebar = ({ chats, selectChat }) => {
    return (
        <div className="sidebar">
            <h2>Chat History</h2>
            <ul>
                {chats.map((chat, index) => (
                    <li key={index} onClick={() => selectChat(index)}>
                        <p>{chat.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
