import MenuDish from "../components/MenuDish";
import { getMenuDishes } from "../controllers/dishController";
import { useState, useEffect } from "react";


function Menu() {

    const [dishes, setDishes] = useState([]);

    function getMenu() {
        getMenuDishes()
        .then(data => setDishes(data))
    }

    useEffect(() => {
        getMenu();
    }, []);

    return (
        <>
            <h1 className="tituloMenu">Menu semanal 15€</h1>

            {<div className="menu">{dishes.map(dish => <div className="dish" key={dish.Id}><MenuDish {...dish} /></div>)}</div>}
        </>
    )
}

export default Menu;