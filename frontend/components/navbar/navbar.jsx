import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e) {
        this.props.logout()
        this.props.history.push('/')
    }

    render() {
        const { currentUser, location } = this.props
        return (
            <>
            {(['/signup','/login', '/'].includes(location.pathname))&& !currentUser ? (""):(
               <nav>
                    <div className="nav-logo"></div>
                    {currentUser ? (
                        <>
                            <Link to="/">{currentUser.username}</Link>
                            <button onClick={this.handleLogout}>Logout</button>
                        </>
                    ):(
                        <Link to="/login">Login</Link>
                    )}     
                </nav>
            )}
            </>
        );
    }
} 
export default withRouter(Navbar);