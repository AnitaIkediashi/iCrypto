import React, { useEffect, useState } from "react";
import axios from "axios";
import Articles from "../../components/Articles";
import "./news.css";

const News = () => {
  const [news, setNews] = useState([]);

  const url = 'https://newsdata.io/api/1/news?apikey=pub_12582bea17457be6db47e2bb6e5b29e822c8b&q=crypto&language=en&category=technology '

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data)
      setNews(response.data.results)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Articles news={news} />
    </>
  );
};

export default News;
