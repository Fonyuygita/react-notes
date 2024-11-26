import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './singlePost.css';
import axios from 'axios';
const API_KEY = '2da948ccccd347f39e9e6b0d28e39a0f'
const NewsDetail = () => {
    const { id } = useParams();
    console.log(typeof (id));
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`https://newsapi.org/v2/everything?q=free&apiKey=${API_KEY}`);
            setNews(result.data.articles);
        };

        fetchData();
    }, []);

    let newsId = parseInt(id)
    const article = news[newsId]
    console.log(article);

    if (!article) return <p>No article found.</p>;

    return (
        <div className="news-detail">
            <img src={article.urlToImage} alt={article.title} />
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default NewsDetail;
