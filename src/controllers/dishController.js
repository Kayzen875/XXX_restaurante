
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

    return fetch(URL, options)
        .then(response => response.json())
        .then(data => data.list)
        .catch(error => console.log(error))
}