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
import ProfileContainer from '../profile/profile_container';
import UploadPostFormContainer from '../post/upload_post_form_container';
import EditPostFormContainer from '../post/edit_post_form_container';
import PostContainer from '../post/post_container';

const App = ({currentUser}) => (
        <HashRouter>
            <> 
                <NavbarContainer/>
                <section className="main-content">
                    {currentUser ? (
                        <>
                        
                            <Switch>
                                <Route exact path="/" component={PostIndexContainer} />
                                <Route exact path="/p/:postId" component={PostContainer} />
                                <Route path="/p/:postId/edit" component={EditPostFormContainer} />
                                <Route path="/:userId(\d+)" component={ProfileContainer} />
                                <Route path="/upload" component={UploadPostFormContainer} />
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