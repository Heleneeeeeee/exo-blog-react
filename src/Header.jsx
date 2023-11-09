import ProfilMenu from "./ProfilMenu";
import './Header.scss';
import './Home.scss';
import './Footer.scss';

function Header() {
    return (
        <header>
            <h1> Mon Super Blog </h1>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Articles</li>
                    <li>Contact</li>
                    <ProfilMenu />
                </ul>
            </nav>
        </header>
    )
}

export default Header;