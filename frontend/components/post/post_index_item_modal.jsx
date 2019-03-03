import React from 'react';
import { connect } from 'react-redux'

import { fetchUser } from '../../actions/user_actions';

class PostIndexItemModal extends React.Component{
    componentDidMount() {
        this.props.fetchUser(this.props.post.userId)
    }
    render () {
        const { post } = this.props;
        return (
            <article className="post-index post-detail">
                <header></header>
                <div className="image-container">
                    <img src={post.photoUrl} alt={post.caption}/>
                </div>
                <div className="post-comments">
                    {/* <Comments /> */}
                </div>
                <div className="hamburger"></div>
            </article>
        )
    }
}

const mapStateToProps = state => ({
        modal: state.ui.modal,
    })

const mapDispatchToProps = dispatch => ({
        closeModal: () => dispatch(closeModal()),
        fetchUser: (userId) => dispatch(fetchUser(userId))
    })
  
export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItemModal);
