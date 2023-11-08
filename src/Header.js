import userLogged from "./ProfilMenu"


function Header() {
    return (
        <header>
            <h1> Mon Super Blog </h1>
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>Articles</li>
                    <li>Contact</li>
                    <li>{userLogged.firstname} {userLogged.lastname}</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header