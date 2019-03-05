import React from 'react';
import { connect } from 'react-redux'

import Post from './post'

import { fetchUser } from '../../actions/user_actions';4

class PostIndexItemModal extends React.Component{
    componentDidMount() {
        this.props.fetchUser(this.props.post.userId)
    }
    render () {
        const { post, users} = this.props;
        return (
            <>
             <Post post={post} user={users[post.userId]} />
            </>
        )
    }
}

const mapStateToProps = state => ({
        modal: state.ui.modal.post,
        users: state.entities.users
    })

const mapDispatchToProps = dispatch => ({
        // closeModal: () => dispatch(closeModal()),
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        // openModal: modal => dispatch(openModal(modal))

    })
  
export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItemModal);
