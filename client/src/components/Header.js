import Logout from "./Logout";
import { Link } from 'react-router-dom'

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
                <Link exact to='/'>
                    <h1>unTITLEd Book Club</h1>
                </Link>
                <Logout onLogout={onLogout}/>
            </>
        )
    }
}

export default Header