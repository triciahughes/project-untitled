import Logout from "./Logout";

function Header({user, onLogout}) {

    if (user.length === 0) {
        return (
            <>
                <h1>unTITLEd Book Club</h1>
                <h2>Please sign up or log in to continue.</h2>
            </>
        )
    } else {
        return (
            <>
                <h1>unTITLEd Book Club</h1>
                <Logout onLogout={onLogout}/>
            </>
        )
    }
}

export default Header