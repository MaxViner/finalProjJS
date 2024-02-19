import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { InfoModal } from '../Modal/InfoModal';
const RandomImagesPage = () => {
  const [images, setImages] = useState([]);
  const apiKey = '4qINnl2a8_HHfwdNEiZePnhvFUwzbggF5DUEHmTunHM';
  const [selectedImage, setSelectedImage] = useState(null);
  const [likes, setLikes] = useState(localStorage.getItem('likes') || 0);
  const [isLiked, setIsLiked] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const randomNumber = Math.floor(Math.random() * 1000);
      const response = await axios.get(`https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=1&order_by=popular&page=${randomNumber}`);
      setImages(response.data);
      console.log(response.data);
      setSelectedImage(response.data[0])
    };

    fetchImages();
  }, [selectedImageIndex]);

  const handleNextImageClick = () => {
    const previos = JSON.parse(localStorage.getItem('previousImages')) || []
    console.log(previos);
    const nextIndex = selectedImageIndex + 1;
    setSelectedImageIndex(nextIndex);
    console.log(selectedImageIndex);
    
    localStorage.setItem('previousImages', JSON.stringify([...previos,{
        isLiked:isLiked,
        selectedImage
    }]));
  };

  const handleCloseModal = () => {
    setSelectedImage('')
  };
  const handleImageClick = (image) => {
    setSelectedImage(image)
    const isImageLiked = localStorage.getItem(`isLiked_${image.id}`);
    setIsLiked(isImageLiked === 'true');
  };

  const handleLikeClick = () => {
    if (!isLiked) {
      let updatedLikes = likes ;
      updatedLikes++
    
      setLikes(updatedLikes);
      localStorage.setItem(`likes`, updatedLikes);
      setIsLiked(true);
    } else {
        let updatedLikes = likes ;
        updatedLikes--;
      setLikes(updatedLikes);
      localStorage.setItem(`likes`, updatedLikes);
      setIsLiked(false);
    }
  };


  return (
    <div>
        <h2>Общее колличество лайкнутых фото {likes}</h2>
      <ul className='ImgList'>
        {images.map((image) => (
            <li key={image.id} className='list-item' onClick={() => handleImageClick(image)}>
                <img key={image.id} className='img' src={image.urls.small} alt={image.alt_description} />
            </li>
        ))}
      </ul>
      {selectedImage && (
    <InfoModal item = {selectedImage} active={selectedImage !==''}
    handleLikeClick={handleLikeClick}
    handleCloseModal={handleCloseModal}
    isLiked={isLiked}
    handleNextImageClick={handleNextImageClick}
    />
      )}
    </div>
  );
};

export default RandomImagesPage;