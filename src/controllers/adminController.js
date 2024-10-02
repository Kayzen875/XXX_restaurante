
const URL = "https://app.nocodb.com/api/v2/tables/m5o6kcdp3nx247v/records";
const token = "RntGobIeckz014JpwItJYVwBX-WOYVqIk9846OHl";

export function updateMenu(update) {

    const dish = {
        "Nombre": update.Nombre,
        "Precio": update.Precio,
        "Foto": update.Foto,
        "Available": !update.Available,
        "Tipo": update.Tipo,
        "Vegetariano": update.Vegetariano,
        "Alergenos": update.Alergenos
    }

    const options = {
        method: "PATCH",
        headers: {
            "xc-token": token,
            "Content-type": "application/json"
        },
        body: JSON.stringify(dish)
    }

    const specificURL = `${URL}/${update.Id}`

    fetch(specificURL, options)

}