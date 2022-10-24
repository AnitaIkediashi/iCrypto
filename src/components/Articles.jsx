import React from 'react'
import Article from './Article'

const Articles = ({news}) => {
  return (
    <div className="news__wrapper">
      <div className="container">
        <h2 className="news__heading">Crypto News</h2>
        <div className="news__container">
        {
          news?.map((news, index) => {
            return (
              <Article news={news} key={index} />
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Articles