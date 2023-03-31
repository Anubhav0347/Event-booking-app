import React from 'react'

const Celebrity = (props) => {
    const { name, image, description,link } = props;
  return (
    <div className="singer-card">
    <img src={image} alt={name} className="singer-card-image" />
    <div className="singer-card-details">
      <h2 className="singer-card-name">{name}</h2>
      <p className="singer-card-description">{description}</p>
      <a href={link} className="singer-card-link">Learn More</a>
    </div>
  </div>
  )
}

export default Celebrity;
