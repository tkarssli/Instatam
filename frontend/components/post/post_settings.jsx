import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';


import { logout } from '../../actions/session_actions';
import { closeSettingsModal, clearModals } from '../../actions/modal_actions';


function PostSettings({ modal, currUserId , clearModals}) {
    const handleClick = () => {
        clearModals()
    }
        return (
            <>
                <div className="settings-modal post-settings">
                    <ul>
                        <div>Test</div>
                        {modal.post.userId === currUserId ? ( <Link to={`/p/${modal.post.id}/edit`} onClick={handleClick}>Edit</Link>) : ("")}
                       
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
        clearModals: () => dispatch(clearModals())
        // logout: () => dispatch(logout())
    })
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostSettings));
