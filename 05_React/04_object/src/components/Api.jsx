import React, { useEffect, useState } from "react";
import "./api.css";

const Api = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch(
          "https://noozra.com/api/articles?category=sports&limit=5"
        );

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, []);

  return (
    <div className="articles-container">
      <h1>Sports Articles</h1>

      {articles.map((allArticle) => (
        <div className="article-card">
          <img
            src={allArticle.image_url}
            alt={allArticle.headline}
            className="article-image"
          />

          <div className="article-content">
            <h2>{allArticle.headline}</h2>

            <a href={allArticle.url} target="_blank" rel="noreferrer">
              Click here to see full article →
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Api;