
function Dish(dishes){

    return(
        <>
            <h2>{dishes.Nombre}</h2>
            <p>{dishes.Precio}€</p>
            <p>{dishes.Tipo}</p>
            <img src={dishes.Foto}></img>
            <p>{dishes.Vegetariano}</p>
            <p>{dishes.Alergenos}</p>
        </>
    )
}

export default Dish;