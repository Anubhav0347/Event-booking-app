import React from "react";
import { useState } from "react";

const Celebrity = (props) => {
  const { name, imgs, description } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [selectedImage, setSelectedImage] = useState(imgs[0]);

  const handleImageClick = (index) => {
    const selected = imgs[index];
    setSelectedImage(selected);
  };

  const handleButtonClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="singer-card">
      <img src={selectedImage.value} alt={name} className="singer-card-image" />
      <div className="singer-card-details">
        <h2 className="singer-card-name">{name}</h2>
        <p className="singer-card-description">{description}</p>
        <div className="singer-gallery">
          {imgs.map((data, i) => (
            <img
              key={data.id}
              src={data.value}
              alt={"gallery"}
              onClick={() => handleImageClick(i)}
            />
          ))}
        </div>
        <div>
          <button
            className={isSelected ? "selected-button" : "select-button"}
            onClick={handleButtonClick}
          >
            {isSelected ? "Selected" : "Select"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Celebrity;
