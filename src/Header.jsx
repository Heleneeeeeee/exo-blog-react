import ProfilMenu from "./ProfilMenu";

function Header() {
    return (
        <header className="header">
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