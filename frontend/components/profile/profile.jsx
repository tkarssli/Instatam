import React from 'react';

import Modal from '../modal/modal'
class Profile extends React.Component {
    constructor(props) {
        super(props)

        // this.state={username: "",}
    }

    componentDidMount() {
        this.props.fetchUser(this.props.match.params.userId)
    }

    componentDidUpdate(){
        // if(this.props.match.params.userId === this.props.user.id){

        // }else{
        //     this.props.fetchUser(this.props.match.params.userId)
        // }
    }

    render() { 
        const { user, currentUser, openModal } = this.props;
        return (  
            this.props.user ? (
                <>
                    <Modal />
                    <div className="profile-user">
                        <div>
                            <h1>{user.username}</h1>
                            <div onClick={() => openModal({type: 'settings'})} className="settings-icon icon glyph"></div>
                        </div>
                        <div>
                            <p>{user.postIds.length}<span>posts</span></p>
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