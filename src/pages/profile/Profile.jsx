import React from 'react';
import './profile.css';
import { BsBluetooth } from 'react-icons/bs';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import NewsFeed from '../../components/feed/Feed';
import WritePostButton from '../../components/write/Pen';

const ProfilePage = () => {
    return (
        <div className="section">
            <div className="profile-page">
                <div className="cover-image">
                    <img src="/cover.png" alt="Cover" />
                </div>
                <div className="profile-info">
                    <div className="profile-image">
                        <img src="/gito.png" alt="Profile" />
                    </div>
                    <div className="profile-details">
                        <div className="name">
                            <p>Fonyuy Gita</p>
                            <IoIosCheckmarkCircle style={{ color: 'blue', fontSize: '24px' }} />
                            <div className="follow">
                                <p>20m followers</p>
                            </div>
                        </div>


                        <p>@johndoe</p>
                        <p>Bio: Just a developer who loves coding!</p>
                        <p>Location: San Francisco, CA</p>
                        <p>Joined: January 2022</p>
                    </div>
                </div>
            </div>
            <NewsFeed />
            <WritePostButton />
        </div>
    );
};

export default ProfilePage;
