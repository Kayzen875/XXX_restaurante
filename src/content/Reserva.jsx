import { useEffect, useState } from "react";

function Reserva() {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [fecha, setFecha] = useState("00/00/0000");
    const [hora, setHora] = useState("00:00");
    const [comentarios, setComentarios] = useState("");

    function postData(e) {

        e.preventDefault();
    }


    return (
        <div className="reserva">
            <h1>Pide tu reserva!</h1>
            <br/>

            <form onSubmit={postData}>
                <label htmlFor="Nombre">Nombre</label>
                <input type="text" id="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <br />
                <label htmlFor="Email">Email</label>
                <input type="email" id="Email" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                <br />
                <label htmlFor="Number">Telefono</label>
                <input type="tel" id="Number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                <br />
                <label htmlFor="Fecha">Fecha</label>
                <input type="date" id="Fecha" value={fecha} onChange={(e) => setFecha(e.target.value)} />
                <br />
                <label htmlFor="Hora">Hora</label>
                <input type="time" id="Hora" value={hora} onChange={(e) => setHora(e.target.value)} />
                <br />
                <label htmlFor="Comentarios">Comentarios</label>
                <input type="text" id="Comentarios" value={comentarios} onChange={(e) => setComentarios(e.target.value)} />
                <br />
                <button type="submit">Enviar datos</button>
            </form>
        </div>
    )
}

export default Reserva;