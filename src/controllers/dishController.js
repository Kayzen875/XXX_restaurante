
const URL = "https://app.nocodb.com/api/v2/tables/m5o6kcdp3nx247v/records"
const token = "RntGobIeckz014JpwItJYVwBX-WOYVqIk9846OHl";

export async function getDishes() {

    const options = {
        method: "GET",
        headers: {
            "xc-token": token,
            "Content-type": "application/json"
        }
    }


    try {
        const response = await fetch(URL, options);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching dishes:", error);
    }
}