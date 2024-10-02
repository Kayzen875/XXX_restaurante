import Dish from "../components/Dish";
import { getDishes } from "../controllers/dishController";
import { useState, useEffect } from "react";


function Menu() {

    const [dishes, setDishes] = useState([]);

    function getMenu() {
        getDishes()
        .then(data => setDishes(data))
    }

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            
        </>
    )
}

export default Menu;