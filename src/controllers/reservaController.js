
const URL = "https://app.nocodb.com/api/v2/tables/myvrevlk92xc3gt/records";
const token = "RntGobIeckz014JpwItJYVwBX-WOYVqIk9846OHl";

export function postReserva(datos){

    const options = {
        method: "POST",
        headers: {
            "xc-token": token,
            "Content-type": "application/json"
        },
        body: JSON.stringify(datos)
    }        

    fetch(URL, options)
    .catch(e => console.log(e));
}