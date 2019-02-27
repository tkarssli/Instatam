import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import NavbarContainer from '../navbar/navbar_container'
import AuthRoute from '../../util/route_util'
import SplashContainer from '../splash/splash_container'

const App = ({ currentUser }) => (
    <div>
        {currentUser ? (
            <>
                <NavbarContainer />
                <AuthRoute path="/login" component={LoginFormContainer}/>
                <AuthRoute path="/signup" component={SignupFormContainer}/>
                
            </>
        ): (
            <>
            <Switch>
                <Route exact path="/" component={SplashContainer}/>
                <Route path="/login" component={LoginFormContainer}/>
                <Route path="/signup" component={SignupFormContainer}/>
                <Route component={SplashContainer}/>
            </Switch>
                {/* <Redirect from="*" to="/" /> */}
            </>
        )}
        

    
    
        
        {/* <Route exact path="/" component={BenchIndexContainer}/> */}

    </div>
)

export default App;