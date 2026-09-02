import React, { useEffect, useState } from "react";

const Api = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await fetch(
          "https://noozra.com/api/articles?category=sports&limit=5",
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
    <>
      <h1>Articles</h1>
      {articles.map((allArticle) => (
        <>
          <p>{allArticle.headline}</p>
          <a href={allArticle.url} target="_blank">
            Click here to see full article
          </a>
          <img
            src={allArticle.image_url}
            alt=""
            height={allArticle.image_height}
          />
        </>
      ))}
    </>
  );
};

export default Api;
