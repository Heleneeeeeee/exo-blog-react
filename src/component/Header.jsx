import { Link } from "react-router-dom";
import ProfilMenu from "../ProfilMenu";
import './Header.scss';

function Header() {
    return (
        <header>
            <h1> Mon Super Blog </h1>
            <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                    <Link to="/articles">Articles</Link>
                    </li>
                    <li>
                    <Link to="/profil">Profil</Link>
                    </li>
                    <li> 
                    <Link to="/contact">Contact</Link>
                    </li>
                    <ProfilMenu />
                </ul>
            </nav>
        </header>
    )
}

export default Header;


