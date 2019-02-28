import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class Navbar extends React.Component {

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
                        <button onClick={this.props.logout}>Logout</button>
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