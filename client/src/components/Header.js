import Logout from "./Logout";
import { Link } from 'react-router-dom'

function Header({user, onLogout}) {

    if (user.length === 0) {
        return (
            <>
                <div className="hero-image">
                    <div className="hero-text">
                            <h1 className="hero-h1">unTITLEd Book Club</h1>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="hero-image">
                    <div className="hero-text">
                        <Link exact to='/'>
                            <h1 className="hero-h1">unTITLEd Book Club</h1>
                        </Link>
                        <div className="hero-button">
                            <Logout onLogout={onLogout}/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Header