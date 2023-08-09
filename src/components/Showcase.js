import React, { useState } from 'react'
import Card from './Card'
import '../css/Comp.css'
import FoodItems from '../MenuData'


const Showcase = () => {

    const [items, setItems] = useState(FoodItems);

    const filterItem = (catItem) => {
        const updatedItems = FoodItems.filter((curEle) =>{
            return curEle.category === catItem;
        })
        setItems(updatedItems)
    }
    return (
        <>
            <div className="cat">
                <button onClick={() => setItems(FoodItems)}>All</button>
                <button onClick={() => filterItem('Breakfast')}>Break Fast</button>
                <button onClick={() => filterItem('Lunch')}>Lunch</button>
                <button onClick={() => filterItem('Dinner')}>Dinner</button>
                <button onClick={() => filterItem('Sweet')}>Desert</button>
            </div>
            
            <div className="main-cont">
            {items.map((ncard, index) =>{
                const { title, images,rating ,price, description, category} = ncard
                return <Card 
                    key = {index}
                    id = {index}
                    name = {title}
                    img = {images}
                    rate = {rating}
                    amount = {price}
                    dic = {description}
                    cat = {category}
                />
            })}
            </div>
        </>
    )
}

export default Showcase
