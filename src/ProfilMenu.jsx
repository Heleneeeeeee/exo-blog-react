function ProfilMenu () {

    const userLogged = {
        firstname: "Hélène",
        lastname: "QUINTARD"
    }

    return (
        <li>{userLogged.firstname} {userLogged.lastname}</li>
    )

}

export default ProfilMenu;