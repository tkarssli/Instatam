import React from 'react';
import { closeSettingsModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostIndexItemModal from '../post/post_index_item_modal';
import ProfileSettings from '../profile/settings';
import PostSettings from '../post/post_settings';

// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

class SettingsModal extends React.Component {

    render () {
        const { settingsModal, closeSettingsModal} = this.props
        if (!settingsModal.type) {
            return null;
        }
        let component;
        switch (settingsModal.type) {
            case 'profile':
                component = <ProfileSettings />
                break;

            case 'post':
                component = <PostSettings />
                break;
                
            default:
                return null;
        }
        return (
            <div id="modal" className="modal-background" onClick={closeSettingsModal}>
            <div className="modal-button"/>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
            </div>
        );
    }
  
}

const mapStateToProps = state => {
  return {
    settingsModal: state.ui.modal.settings,
    // scroll: state.ui.scroll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeSettingsModal: () => dispatch(closeSettingsModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SettingsModal));