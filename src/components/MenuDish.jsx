
function MenuDish(dishes){

    return(
        <>
            <h2>{dishes.Nombre}</h2>
            <p>{dishes.Tipo}</p>
            <img src={dishes.Foto}></img>
            {dishes.Vegetariano ? <p>Opcion Vegetariana</p> : <p>Opcion NO Vegetariana</p>}
            <p>{dishes.Alergenos}</p>
        </>
    )
}

export default MenuDish;