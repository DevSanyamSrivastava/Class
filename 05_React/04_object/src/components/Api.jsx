import React, { useEffect, useState } from "react";
import "./api.css";

const Api = () => {
  const [category, setCategory] = useState("tech");
  const [articles, setArticles] = useState([]);
  // const opinionFn=()=>{
  //   setCategory("opinion")
  // }

  // const sportFn=()=>{
  //   setCategory("sports")
  // }
  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch(
          `https://noozra.com/api/articles?category=${category}&limit=5`,
        );

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    getArticles();
  }, [category]);

  return (
    <div className="articles-container">
      <h1> {category} Articles</h1>
      {/* <button className="btn" onClick={opinionFn}>Opinion</button> */}
      <button
        className="btn"
        onClick={() => {
          setCategory("opinion");
        }}
      >
        Opinion
      </button>
      <button
        className="btn"
        onClick={() => {
          setCategory("sports");
        }}
      >
        Sports
      </button>
      <button
        className="btn"
        onClick={() => {
          setCategory("world");
        }}
      >
        World
      </button>
      <button
        className="btn"
        onClick={() => {
          setCategory("entertainment");
        }}
      >
        Entertainment
      </button>

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

// opinion
// world
// politics
// culture
// entertainment
