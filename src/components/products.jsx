import React, { useState, useEffect } from 'react';


const ProductPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(JSON.parse(localStorage.getItem('previousImages')))
    console.log('====================================');
    console.log(images);
    console.log('====================================');
  }, []);

  return (
    <div>
      <h1>Это могли быть продукты, но это рандомные фото unsplash</h1>
      <ul className='ImgList'>
        {images && images?.map((image) => (
            <li key={image.id} className={`${image.isLiked ? 'liked' :''} list-item`} >
                <img key={image.id} className='img' src={image?.selectedImage.urls?.small} alt={image?.selectedImage.alt_description} />
            </li>
        ))}
      </ul>
     
    </div>
  );
};

export default ProductPage;