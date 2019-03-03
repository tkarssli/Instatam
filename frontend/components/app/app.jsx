import React from 'react';
import { BrowserRouter, Route, Link, Switch, HashRouter } from 'react-router-dom'
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NavbarContainer from '../navbar/navbar_container'
import AuthRoute from '../../util/route_util'
import SplashContainer from '../splash/splash_container'
import PageNotFoundContainer from '../page_not_found_container'
import Footer from '../footer/footer'
import PostIndexContainer from '../post/post_index_container';
const App = ({currentUser}) => (
        <HashRouter>
            <> 
                <NavbarContainer/>
                <section className="main-content">
                    {currentUser ? (
                        <>
                        
                            <Switch>
                                <Route exact path="/" component={PostIndexContainer} />
                                <AuthRoute exact path="/login" component={LoginFormContainer}/>
                                <AuthRoute exact path="/signup" component={SignupFormContainer}/>
                                <Route component={PageNotFoundContainer} />
                            </Switch>
                        </>
                    ): (
                        <>

                        <Switch>
                            <Route exact path="/(|login|signup)/" component={SplashContainer}/>
                            <Route component={PageNotFoundContainer} />
                        </Switch>
                        </>
                    )}
                </section>
                <Footer />
            </>
        </HashRouter>
        )

export default App;