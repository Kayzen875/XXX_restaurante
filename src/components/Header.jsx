import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <Link to="/Carta">Carta</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/Reserva">Reserva</Link>
        </header>
    )
}

export default Header;