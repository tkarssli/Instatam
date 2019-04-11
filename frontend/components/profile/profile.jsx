import React from 'react';
import ReactDOM from 'react-dom';

import SettingsModal from '../modal/settings_modal';
import PostModal from '../modal/post_modal';
import UserPostsIndexContainer from '../post/user_post_index_container';
import { scrollBody } from '../../lib/dom';

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.handleFollow = this.handleFollow.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
        .fail(res => this.props.history.push('/'))
        scrollBody(0)

    }

    componentDidUpdate(prevProps){
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            this.props.fetchUser(this.props.match.params.userId)
            this.props.clearScroll()
            
        }
        // scrollBody(0);
    }

    handleFollow(e) {
        e.preventDefault();
        e.persist()
        const { currentUser, user, deleteFollow, createFollow } = this.props

        if (currentUser.followIds.includes(user.id)){
            deleteFollow(user.id)
            .then(()=>  {
                e.target.className = "follow-btn-header btn" })
            } else {
                createFollow(user.id)
                .then(()=>  {
                    e.target.className = "following-btn-header btn" })
        }
    }

    render() { 
        document.documentElement.scrollTop = 0;
        const { user, currentUser, openSettingsModal } = this.props;
        const getFollowButton = () => {
            return (
                currentUser.followIds.includes(user.id) ? (
                    <span className="following-btn-header btn" onClick={this.handleFollow}>Following</span>
                    ) : (
                        <span className="follow-btn-header btn" onClick={this.handleFollow}>Follow</span>
                        )
                        )
                    }
                    
        return ( 
            <>
            {this.props.user ? (
                <>
                    
                    <div className="profile">
                        <header>
                            <div>
                                <div>
                                    {user.avatar ? (
                                        <img className="profile-image" src={user.avatar}/>
                                    ):(
                                        <>
                                        <img className="profile-image" src={window.defaultAvatar}/>
                                        <div></div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <section>
                                <div>
                                    <h1>{user.username}</h1>
                                    <div className="settings-icon-container">
                                        {String(currentUser.id) === this.props.match.params.userId ? (<div onClick={() => openSettingsModal({type: 'profile'})} className="settings-icon icon glyph"></div>) : (getFollowButton())}
                                    </div>
                                    
                                </div>
                                <div className="user-stats">
                                    <p><span className="bold">{user.postIds.length}</span> posts</p>
                                    <p><span className="bold">{user.followerIds.length}</span> followers</p>
                                    <p><span className="bold">{user.followIds.length}</span> following</p>
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
            )}
            <SettingsModal />
            <PostModal />
            </>
        );
    }
}
 
export default Profile;