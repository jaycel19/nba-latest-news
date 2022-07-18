import React, { useState, useEffect } from 'react';

import { fetchData } from '../utils/fetchData';
import NewsCard from '../components/NewsCard';

const News = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const getNews = async () => {
            const latestNews = await fetchData("http://localhost:5000/api/latestNews");
            setNews(latestNews);
        }
        getNews();
    }, [])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '900px'
        }}>
            {news.map((items)=>(
                <NewsCard
                    img={items.img}
                    title={items.title}
                    subTitle={items.subTitle}
                    url={items.url}
                />
            ))}
        </div>
    )
}

export default News;