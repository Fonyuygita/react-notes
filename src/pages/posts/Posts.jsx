import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './post.css';
import "./post.css"
const API_KEY = '2da948ccccd347f39e9e6b0d28e39a0f'
const Posts = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://newsapi.org/v2/everything?q=free&apiKey=${API_KEY}`);
            setNews(result.data.articles);
        };

        fetchData();
    }, []);
    console.log(news);

    return (
        <div className="news-grid">
            {news.map((article, index) => (
                <Link to={`/post/${index + 1}`} key={index}>
                    <div className="news-card">
                        <img src={article.urlToImage} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Posts;
