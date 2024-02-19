import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';
export const InfoModal = ({ handleCloseModal, active, item,handleLikeClick, isLiked, handleNextImageClick }) => {
  
  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [active]);
  
  return (
    <div
      className={`${styles.modal} ${active && item ? styles.modalActive : ''}`}
      onClick={handleCloseModal}
    >
      <article className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleCloseModal}>
          x
        </button>
        <h2 className={styles.title}>{item.description}</h2>
        <div className={styles.imgWrapper}>
          <img className={styles.photo} src={item.urls.small} alt='Note img' />
        </div>
        <div className={styles.modalInfo}>
          <h2 className={styles.description}>{item.title}</h2>
          <p>{`Author  - ${item.user.first_name} ${item.user.last_name}`}</p>
          <p>{`Location  -  ${item.user.location}`}</p>
        </div>
        <button
        onClick={handleLikeClick}
        className={`${styles.likeBtn} ${isLiked?styles.isLiked:''}`}> ❤️ WhoA NNNNICE! ❤️</button>

<button onClick={handleNextImageClick}
className={styles.NextBtn}>Next Image</button>      </article>
    </div>
  );
};