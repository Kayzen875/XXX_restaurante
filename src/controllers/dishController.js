
const URL = "https://app.nocodb.com/api/v2/tables/m5o6kcdp3nx247v/records";
const menuURL ="https://app.nocodb.com/api/v2/tables/m5o6kcdp3nx247v/records?where=where%3D%28Available%2Cis%2Ctrue%29&";
const token = "RntGobIeckz014JpwItJYVwBX-WOYVqIk9846OHl";

export async function getDishes() {

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

export async function getMenuDishes() {

    const options = {
        method: "GET",
        headers: {
            "xc-token": token,
            "Content-type": "application/json"
        }
    }

    return fetch(menuURL, options)
        .then(response => response.json())
        .then(data => data.list)
        .catch(error => console.log(error))
}