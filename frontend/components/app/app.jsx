import React from 'react';
import { BrowserRouter, Route, Link, Switch, HashRouter } from 'react-router-dom'
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NavbarContainer from '../navbar/navbar_container'
import AuthRoute from '../../util/route_util'
import SplashContainer from '../splash/splash_container'
import Footer from '../footer/footer'
const App = ({currentUser}) => (
        <HashRouter>
            <>
            {currentUser ? (
                <>
                    <NavbarContainer />
                    <AuthRoute path="/login" component={LoginFormContainer}/>
                    <AuthRoute path="/signup" component={SignupFormContainer}/>
                </>
            ): (
                <>
                <Switch>
                    <Route path="/" component={SplashContainer}/>
                    <Route component={SplashContainer}/>
                </Switch>
                    {/* <Redirect from="*" to="/" /> */}
                </>
            )}
            
    
        
        
            <Footer />
            </>
            {/* <Route exact path="/" component={BenchIndexContainer}/> */}
        </HashRouter>
        )

export default App;