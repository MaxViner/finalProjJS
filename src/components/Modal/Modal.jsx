import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
export const Modal = ({ handleCloseModal, active, item }) => {
  const [review, setReview] = useState('');
  
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [active]);
  
  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSaveReview = () => {
    const currentRewyevs= JSON.parse(localStorage.getItem('savedItems')) || []
   
    const itemReviews = currentRewyevs.find((itemFromLocalStorage)=> itemFromLocalStorage.id === item.id)?.reviews || []
        console.log('====================================');

    console.log(itemReviews);

    const sacedItemRevuws=[...itemReviews, review]
    const clearedRevuews = currentRewyevs.filter((currentItem)=>currentItem.id!==item.id)
    
    const savedItem = { ...item, reviews: sacedItemRevuws };

    localStorage.setItem('savedItems', JSON.stringify([...clearedRevuews, savedItem]));
    setReview('');
    
  };

  return (
    <div
      className={`${styles.modal} ${active && item ? styles.modalActive : ''}`}
      onClick={handleCloseModal}
    >


      <article className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleCloseModal}>
          x
        </button>
        <h2 className={styles.title}>{item.title}</h2>
        <time className={styles.publishDate}>{item.date}</time>
        <div className={styles.imgWrapper}>
          <img className={styles.photo} src={item.urls.small} alt='Note img' />
        </div>
        <div className={styles.modalInfo}>
          <p className={styles.description}>{item.text}</p>
          
          <textarea
            className={styles.reviewInput}
            placeholder="Оставить отзыв..."
            value={review}
            onChange={handleReviewChange}
          />
          <button className={styles.saveReviewButton} onClick={handleSaveReview}>
            Сохранить отзыв 📝
          </button>
        </div>
      </article>
    </div>
  );
};