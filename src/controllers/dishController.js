
const URL = "https://app.nocodb.com/api/v2/tables/m5o6kcdp3nx247v/records"
const token = "RntGobIeckz014JpwItJYVwBX-WOYVqIk9846OHl";

export function getDishes() {

    const options = {
        method: "GET",
        headers: {
            "xc-token": token,
            "Content-type": "application/json"
        }
    }

    fetch(URL, options)
        .then(respuesta => respuesta.json())
        .then(x => x.list)
        .catch(e => console.log(e));
}