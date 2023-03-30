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
                <div class="hero-image">
                    <div class="hero-text">
                        <Link exact to='/'>
                            <h1>unTITLEd Book Club</h1>
                        </Link>
                        <Logout onLogout={onLogout}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Header