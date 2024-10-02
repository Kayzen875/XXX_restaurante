import Dish from "../components/Dish";
import { getDishes } from "../controllers/dishController";
import { useState, useEffect } from "react";


function Carta() {

    const [dishes, setDishes] = useState([]);

    function getCard() {
        getDishes().then(data => setDishes(data))
    }

    useEffect(() => {
        getCard();
    }, []);

    return (
        <>
            {<div className="menu">{dishes.map(dish => <div className="dish" key={dish.Id}><Dish {...dish} /></div>)}</div>}
        </>
    )
}

export default Carta;