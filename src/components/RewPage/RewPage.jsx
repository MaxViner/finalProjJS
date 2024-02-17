import React, { useState, useEffect } from 'react';
import './cardStyles.css'
import { Accordion } from '../Accordion/Accordion';
const ReviewPage = () => {

  const [revs, setRevs] = useState([]);
  const [data, setData] = useState([])
  useEffect(() => {
    const savedItems = localStorage.getItem('savedItems');
    if (savedItems) {
        setRevs(JSON.parse(savedItems));
       
    }
  }, []);

  useEffect(
    ()=>{
        revs.forEach(
            (item)=>{

               
                if (data.findIndex((rew)=>rew.id===item.id)===-1) {
                   
                    setData(prevData => [
                        ...prevData, {img: item?.urls?.small, title: item.description, rews: item.reviews, id:item.id}
                    ]);
                }
                
                }
        )
        console.log('data');

        console.log(data);

    },[revs]
  )
 const handleDelete=(id, revItem)=>{
    const currentRew = revs.find((item)=>item.id === id)
    const clearedRewItem = currentRew.reviews.filter((rew)=>rew!== revItem)
    const updtedItem = { ...currentRew, reviews: clearedRewItem };
    let savedItemsWithoutCurrent = JSON.parse(localStorage.getItem('savedItems'))
    savedItemsWithoutCurrent=savedItemsWithoutCurrent.filter((saveditem)=>saveditem.id!== currentRew.id);
    const newItems = [...savedItemsWithoutCurrent,updtedItem]
    localStorage.setItem('savedItems', JSON.stringify(newItems));
    setRevs(newItems)
 }

  return (<>
  <Accordion
  handleDelete={handleDelete}
  AccordionData={data}/>
 
  </>
  );
};

export default ReviewPage;