import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { clearModals, openSettingsModal } from '../../actions/modal_actions';

import CommentsIndex from '../comments/comment_index'

class Post extends React.Component{
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.openSettings = this.openSettings.bind(this);
    }
    handleClick(e) {
        this.props.clearModals()
    }
    // componentDidMount() {
    //     this.img.onload = () => {
    //         if(this.img.height <= 450){
    //             debugger
    //             this.img.style.objectFit = "cover"
    //         }
    //     }
    // }



    openSettings(e) {
        this.props.openSettingsModal({type: 'post', post})
    }

    render() {
        const { post, user} = this.props;
        return (
            <article className="post post-detail">
            
                <div className="image-container">
                    <img ref={elem => this.img = elem} src={post.photoUrl} alt={post.caption}/>
                </div>
                { user ? (
                <header className="avatar">
                    {user.avatar ? (
                            <img src={user.avatar}/>
                        ):(
                            <img src="/assets/default_avatar.svg"/>

                        )}
                    <div>
                        <Link onClick={this.handleClick} to={`/${user.id}`}>{user.username}</Link>
                        {/* <span>•</span> */}
                    </div>
                </header>
                    ):("")}
                <div className="comment-index">
                    <p>{post.caption}</p>
                    <CommentsIndex postId={post.id} />
                </div>
                <div className="hamburger">
                    <div onClick={this.openSettings} className="icon glyph"></div>
                </div>
            </article>
        )
    }
}

const mDP = dispatch => ({
    clearModals: () => dispatch(clearModals()),
    openSettingsModal: modal => dispatch(openSettingsModal(modal))
})

export default connect(null, mDP)(Post)