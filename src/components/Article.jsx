import React from "react";

const Article = ({ news }) => {
  return (
    <article className="news__article">
      <a href={news?.link}>
        <h4>{news?.title}</h4>
      </a>
      <div className="news__article-image">
        <img 
          src={news?.image_url == null ? 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80' : news?.image_url} 
          alt="" 
        />
        
      </div>
      <div className="news__article-content">
        <p>{news?.description}</p>
        <a href={news?.link} className="btn btn__primary">Read More</a>
      </div>
    </article>
  );
};

export default Article;
