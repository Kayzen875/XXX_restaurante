
function Dish(dishes){

    return(
        <>
            <h2>{dishes.Nombre} {dishes.Precio}€</h2>
            <p>{dishes.Tipo}</p>
            <img src={dishes.Foto}></img>
            {dishes.Vegetariano ? <p>Opcion Vegetariana</p> : <p>Opcion NO Vegetariana</p>}
            <p>{dishes.Alergenos}</p>
        </>
    )
}

export default Dish;