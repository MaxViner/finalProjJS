import React, { useRef } from 'react';
import styles from '../Accordion.module.css';
 
export const AccordionItem = ({img, AccordionHeader, AccordionBody, onClick, isOpen, index ,handleDelete, id}) => {
  const itemRef = useRef(null);
  return (
    <li className={styles.Accordion__List__Item} key={index}>
      <button className={styles.Accordion__List__Item__Header} onClick={onClick}>
          <img src={img} alt="Accordion__List__Item__Header" />
        <p className={`${styles.Accordion__List__Item__Header__Text} ${isOpen ? styles['active-text'] : ''}`}>
          {AccordionHeader}
        </p>
      </button>
      <div
        className={styles.Accordion__List__Item__Collapse}
        style={isOpen ? { height: itemRef.current?.scrollHeight } : { height: '0px' }}
      >
        <ul
          className={styles.Accordion__List__Item__Body}
          ref={itemRef}
          style={isOpen ? { opacity: 1 } : { opacity: 0 }}
        >
          {AccordionBody.map((item, index)=>{
            return(
              <li key={index}>
                <p>
                  {item}
                  </p>
                  <button className='deletebtn'
                    onClick={(e)=>{
                        e.stopPropagation()
                        handleDelete(item, id)}}>Удалить</button></li>
            )
          })}
        </ul>
      </div>
    </li>
  );
};
