import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './feed.css';

const newsData = [
    { id: 1, avatar: '/jo.png', name: 'Pm Ngute', content: 'Breaking news: Market hits all-time high!', isLegit: true },
    { id: 2, avatar: '/user.png', name: 'Ngua Linus', content: 'Rumor has it: New tech gadget coming soon!', isLegit: false },
    { id: 3, avatar: '/jo.png', name: 'Charlie Brown', content: 'Weather update: Heavy rains expected tomorrow.', isLegit: true },
    // Add more news items as needed
];

const NewsFeed = () => {
    return (
        <div className="news-feed">
            {newsData.map((news) => (
                <div className="news-item" key={news.id}>
                    <img src={news.avatar} alt={`${news.name}'s avatar`} className={`${news.isLegit ? "border" : ""} avatar`} />
                    <div className="news-content">
                        <div className="news-header">
                            <span className="news-name">{news.name}</span>
                            {news.isLegit ? (
                                <FaCheckCircle className="legit-icon" />
                            ) : (
                                <FaTimesCircle className="fake-icon" />
                            )}
                        </div>
                        <p className='desc'>{news.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsFeed;
