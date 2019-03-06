import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


import { logout } from '../../actions/session_actions';
import { closeSettingsModal, clearModals } from '../../actions/modal_actions';
import { deletePost } from '../../actions/post_actions';


function PostSettings({ modal, currUserId , clearModals, deletePost, closeSettingsModal}) {
    const handleClick = () => {
        clearModals()
        // body.classList.remove('no-scroll')
    }

    const handleDelete = () => {
        deletePost(modal.post.id)
        .then(clearModals())
    }
    
        return (
            <>
                <div className="settings">
                    <ul>
                        {currUserId !== modal.post.userId ? (""):(
                            <>
                                <li onClick={handleDelete}>
                                    <span className="danger-text">Delete Post</span>
                                </li>
                                    <Link to={`/p/${modal.post.id}/edit`} onClick={handleClick} >Edit</Link>
                            </>
                        )}
                        <li onClick={() => closeSettingsModal()}>
                            Cancel
                        </li>
                        
                       
                        {/* <li onClick={() => this.props.closeSettingsModal()}>Cancel</li> */}
                    </ul>
                </div>
            </>
        )
}

const mapStateToProps = state => ({
        modal: state.ui.modal.settings,
        currUserId: state.session.id
    })

const mapDispatchToProps = dispatch => ({
        closeSettingsModal: () => dispatch(closeSettingsModal()),
        clearModals: () => dispatch(clearModals()),
        deletePost: postId => dispatch(deletePost(postId))
    })
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostSettings));
