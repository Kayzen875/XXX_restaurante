import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <span><Link to="/Carta">Carta</Link></span>
            <span><Link to="/Menu">Menu</Link></span>
            <span><Link to="/Reserva">Reserva</Link></span>
        </header>
    )
}

export default Header;