import React from 'react';
import ReactDOM from 'react-dom';

import SettingsModal from '../modal/settings_modal';
import UserPostsIndexContainer from '../post/user_post_index_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        .fail(res => this.props.history.push('/'))
    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.fetchUser(this.props.match.params.userId)
            this.props.clearScroll()

        }

    }


    render() { 
        document.documentElement.scrollTop = 0;

        const { user, currentUser, openSettingsModal } = this.props;
        return (  
            this.props.user ? (
                <>
                    <SettingsModal />
                    <div className="profile">
                        <header>
                            <div>
                                <div>
                                    {user.avatar ? (
                                        <img className="profile-image" src={user.avatar}/>
                                    ):(
                                        <>
                                        <img className="profile-image" src="/assets/default_avatar.svg"/>
                                        <div></div>
                                        </>

                                    )}
                                </div>
                            </div>
                            <section>
                                <div>
                                    <h1>{user.username}</h1>
                                    <div className="settings-icon-container">
                                        {String(currentUser) === this.props.match.params.userId ? (<div onClick={() => openSettingsModal({type: 'profile'})} className="settings-icon icon glyph"></div>) : (<div>Follow</div>)}
                                    </div>
                                    
                                </div>
                                <div>
                                    <p><span className="bold">{user.postIds.length}</span> posts</p>
                                </div>
                                <div>
                                    <h3><span className="bold">{user.fullName}</span></h3>
                                </div>
                            </section>
                        </header>
                        <div className="h-seperator"></div>
                        <div>
                            <UserPostsIndexContainer id={this.props.match.params.userId}/>
                        </div>
                    </div>
                </>

            ) : (
                <div className="loader"> 
                    <div className="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
            )
        );
    }
}
 
export default Profile;