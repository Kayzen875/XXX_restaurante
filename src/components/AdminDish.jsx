import { useEffect, useState } from "react";
import { updateMenu } from "../controllers/adminController";

function AdminDish(dishes){

    const [check, setCheck] = useState(false)

    function handleCheck(e){
        updateMenu(e);
        setCheck(!check);
    }

    useEffect(() => {
        setCheck(dishes.Available)
    }, []);

    return(
        <>
            <h2>{dishes.Nombre} {dishes.Precio}€</h2>
            <p>{dishes.Tipo}</p>
            <img src={dishes.Foto}></img>
            {dishes.Vegetariano ? <p>Opcion Vegetariana</p> : <p>Opcion NO Vegetariana</p>}
            <p>{dishes.Alergenos}</p>
            <input type="checkbox" checked={check} onChange={handleCheck}></input>
        </>
    )
}

export default AdminDish;