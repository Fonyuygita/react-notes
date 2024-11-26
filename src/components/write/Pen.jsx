import React from 'react';
import { FaPen } from 'react-icons/fa';
import './pen.css';

const WritePostButton = () => {
    return (
        <button className="write-post-button">
            <FaPen className="pen-icon" />
        </button>
    );
};

export default WritePostButton;
