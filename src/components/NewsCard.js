import React from 'react';

const NewsCard = ({ img, title, subTitle, url }) => {
  return (
    <a href={url}
      style={{
      }}
    >
      <img src={img} />
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </a>
  )
}

export default NewsCard;