import { useEffect, useState } from "react";

function Reserva(){

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("123456789");
    const [fecha, setFecha] = useState("00/00/0000");
    const [hora, setHora] = useState("00:00");

    function postData(e) {

        e.preventDefault();
    }


    return(
        <>
         <h1>Pide tu reserva!</h1>

        <form  onSubmit={postData}>
                <label htmlFor="Nombre">Nombre</label>
                <input type="text" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                <br />
                <label htmlFor="Number">Number</label>
                <input type="tel" id="Number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <br />
                <label htmlFor="Fecha">Fecha</label>
                <input type="date" id="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <br />
                <label htmlFor="Hora">Hora</label>
                <input type="time" id="Hora" value={hora} onChange={(e) => setHora(e.target.value)} />
                <br />
                <button type="submit">Enviar datos</button>
        </form>
        </>
    )
}

export default Reserva;