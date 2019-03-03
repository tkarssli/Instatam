import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        if (window.scrollY > 50 ) {
            this.state = { navClass: "navbar navbar-slim", fadeClass: "fade-container fade" }
        } else {
            this.state = { navClass: "navbar navbar-thick", fadeClass: "fade-container" }
        }

        this.handleLogout = this.handleLogout.bind(this)
        this.listenScrollEvent = this.listenScrollEvent.bind(this)
    }

    listenScrollEvent(e) {
        if (window.scrollY > 50 || this.props.modal) {
            this.setState({ navClass: "navbar navbar-slim", fadeClass: "fade-container fade" })
        } else {
            this.setState({ navClass: "navbar navbar-thick", fadeClass: "fade-container" })
        }
    }

    handleLogout(e) {
        this.props.logout()
        this.props.history.push('/')
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }

    render() {
        const { currentUser, location } = this.props
        return (
            <>
                {(['/signup', '/login', '/'].includes(location.pathname)) && !currentUser ? ("") : (
                    <div className="navbar-container">
                        <nav className={this.state.navClass}>
                            <Link to="/" className="nav-logo">
                                <div className="sprite icon"></div>
                                <div className={this.state.fadeClass}>
                                    <div className="pipe icon"></div>
                                    <div className="callig-container">
                                        <div className="callig icon"></div>
                                    </div>
                                </div>
                            </Link>
                            {currentUser ? (
                                <>
                                    <div className="nav-links-container">
                                        {/* <span className="icon glyph"></span> */}
                                        <div>
                                            <span className="follows-icon icon glyph"></span>
                                        </div>

                                        {/* <Link to="/">{currentUser.username}</Link> */}
                                        <div onClick={this.handleLogout}>
                                            <span className="profile-icon icon glyph"></span>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                    <div className="nav-links-container">
                                        <Link to="/login">Login</Link>
                                    </div>
                                )}
                        </nav>
                    </div>
                )}
            </>
        );
    }
}
export default withRouter(Navbar);