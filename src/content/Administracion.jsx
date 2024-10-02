import AdminDish from "../components/AdminDish";
import { getDishes } from "../controllers/dishController";
import { useState, useEffect } from "react";

export function Admin() {

    const [dishes, setDishes] = useState([]);

    function getCard() {
        getDishes().then(data => setDishes(data))
    }

    useEffect(() => {
        getCard();
    }, []);

    return (
        <>
            <h1>Estas en el panel de administrador</h1>
            <h2>Selecciona las checkbox para actualizar el menu semanal</h2>

            {<div className="menu">{dishes.map(dish => <div className="dish" key={dish.Id}><AdminDish {...dish} /></div>)}</div>}
        </>
    )
}