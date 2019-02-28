import React from 'react';
import { withRouter, Route, NavLink, Switch } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import AuthRoute from '../../util/route_util'


class Splash extends React.Component {

    render() {
        const {location} = this.props;
        return (
            <section className="splash-section">
                <div className="splash-container">  
                    <div className="image-container">
                        <div className="image-cycler img-1"></div>
                        <div className="image-cycler img-2"></div>
                        <div className="image-cycler img-3"></div>
                        <div className="image-cycler img-4"></div>
                    </div>
                    <div className="splash-right">
                        <div className="login-container box">
                            <img src="assets/instatam.png" alt="Instatam"/>
                                <Switch>
                                    <Route exact path="/" component={LoginFormContainer} location={this.props.location}/>
                                    <Route path="/login" component={LoginFormContainer}/>
                                    <Route path="/signup" component={SignupFormContainer}/>
                                </Switch>
                        </div>
                        <div className="signup-container box">
                            {"/signup" === location.pathname ? (
                                    <p>Already have an account? <NavLink to="/login">Log in</NavLink></p>
                                ) : (
                                    <p>Dont't have an account? <NavLink to="/signup">Sign up</NavLink></p>

                            )}
                        </div>
                    </div>
                    
                </div>
            </section>
        );
    }
}

export default withRouter(Splash);