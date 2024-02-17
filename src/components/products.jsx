import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from './Modal';

const ProductPage = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const apiKey = '4qINnl2a8_HHfwdNEiZePnhvFUwzbggF5DUEHmTunHM';

  useEffect(() => {
    const fetchImages = async () => {
      const randomNumber = Math.floor(Math.random() * 1000);
      const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${apiKey}&query=sneakers&per_page=20&random=${randomNumber}`);
      setImages(response.data);
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage('')
  };

  return (
    <div>
      <h1>Это могли быть продукты, но это рандомные фото unsplash</h1>
      <ul className='ImgList'>
        {images.map((image) => (
            <li key={image.id} className='list-item' onClick={() => handleImageClick(image)}>
                <img key={image.id} className='img' src={image.urls.small} alt={image.alt_description} />
            </li>
        ))}
      </ul>
      {selectedImage && (
    <Modal item = {selectedImage} active={selectedImage !==''}
    handleCloseModal={handleCloseModal}
    />
      )}
    </div>
  );
};

export default ProductPage;