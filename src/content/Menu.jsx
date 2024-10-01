import Dish from "../components/Dish";
import { getDishes } from "../controllers/dishController";
import { useState, useEffect } from "react";


function Menu() {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fetchDishes = async () => {
            try {
                const dishesData = await getDishes();
                setDishes(dishesData);
            } catch (e) {
                console.error("Error in useEffect:", e);
            }
        };
        fetchDishes();
    }, []);

    return (
        <>
            {<div>{dishes.map(dish => <div className="dish" key={dish.Id}><Dish {...dishes} /></div>)}</div>}
        </>
    )
}

export default Menu;