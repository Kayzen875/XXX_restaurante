import Dish from "../components/Dish";
import { getDishes } from "../controllers/dishController";
import { useState, useEffect } from "react";


function Menu() {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        dishesData = getDishes();
        setDishes(dishesData);
        
    }, []);

    return (
        <>
            {<div>{dishes.map(dish => <div className="dish" key={dish.Id}><Dish {...dishes} /></div>)}</div>}
        </>
    )
}

export default Menu;