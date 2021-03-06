import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { scrollBody } from '../../lib/dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        if (window.scrollY > 50 ) {
            this.state = { navClass: "navbar navbar-slim", fadeClass: "fade-container fade" }
        } else {
            this.state = { navClass: "navbar navbar-thick", fadeClass: "fade-container" }
        }

        this.handleLogout = this.handleLogout.bind(this);
        this.handleHome = this.handleHome.bind(this);
        this.listenScrollEvent = this.listenScrollEvent.bind(this);
    }

    listenScrollEvent(e) {
        if (window.scrollY > 50 || this.props.modal.type) {
            this.setState({ navClass: "navbar navbar-slim", fadeClass: "fade-container fade" })
        } else {
            this.setState({ navClass: "navbar navbar-thick", fadeClass: "fade-container" })
        }
    }

    handleLogout(e) {
        this.props.logout()
        this.props.history.push('/')
    }

    handleHome(e) {
        this.props.clearScroll();
        scrollBody(0);
        document.documentElement.scrollTop = 0;
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
                            <Link onClick={this.handleHome} to="/" className="nav-logo">
                                <div className="logo icon"></div>
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
                                        <div>
                                            <Link to="/explore" className="explore-icon icon glyph"></Link>
                                        </div>
                                        <div>
                                            <Link to="/upload" className="upload-icon icon glyph"></Link>
                                        </div>
                                        <Link to={`/${currentUser.id}`} className="profile-icon icon glyph"></Link>
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