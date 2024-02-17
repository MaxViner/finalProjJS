import React, { useState } from 'react';
import styles from './Accordion.module.css';
import { AccordionItem } from './AccordionItem/AccordionItem';



export const Accordion = ({ AccordionData, handleDelete }) => {
  console.log(AccordionData);

  const [openItemId, setOpenItemId] = useState(null);
  return (
    <div className={`${styles.Accordion}`}>
      <ul className={styles.Accordion__List}>
        {AccordionData.map((AccordionDataItem, index) => {
          return (
            <AccordionItem
            handleDelete={handleDelete}
              img={AccordionDataItem.img}
              key={index}
              onClick={(e) => { 
                e.stopPropagation();
                 (index === openItemId ? setOpenItemId(null) : setOpenItemId(index))
                }}
              AccordionHeader={AccordionDataItem.title}
              isOpen={index === openItemId}
              index={index}
              AccordionBody={AccordionDataItem.rews}
              id={AccordionDataItem.id}
            />
          );
        })}
        <li className={styles.Accordion__List__Item} key={Date.now()}>
        
        </li>
      </ul>
    </div>
  );
};
