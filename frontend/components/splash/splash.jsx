import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import AuthRoute from '../../util/route_util'
import App from '../app/app'


class Splash extends React.Component {
    render() {
        return (
            <>  
                <div className="phone">
                </div>
                <div className="splash login-container">
                    <h1>Test</h1>
                    <LoginFormContainer />
                    {/* <Route exact path="/" component={App}/> */}
                </div>
            </>
        );
    }
}

export default Splash;

// const App = () => (
//     <div>
//         <header>
//             <NavbarContainer />
//         </header>

//         <AuthRoute path="/login" component={LoginFormContainer}/>
//         <AuthRoute path="/signup" component={SignupFormContainer}/>
//         {/* <Route exact path="/" component={BenchIndexContainer}/> */}

//     </div>
// )

// export default App;