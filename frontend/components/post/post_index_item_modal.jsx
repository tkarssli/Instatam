import React from 'react';
import { connect } from 'react-redux'

import Post from './post'

import { fetchUser } from '../../actions/user_actions';4

class PostIndexItemModal extends React.Component{
    componentDidMount() {
        this.props.fetchUser(this.props.post.userId)
    }
    render () {
        const { post } = this.props;
        return (
            <Post post={ post } />
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
