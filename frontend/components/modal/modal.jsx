import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostIndexItemModal from '../post/post_index_item_modal';
import Settings from '../../components/profile/settings'
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component {

    componentDidUpdate(){
        const { modal, scroll } = this.props
        const body = document.getElementsByTagName('body')[0]

        // Stop body from scrolling while modal is open
        if (modal.type) {
            body.style.top = `-${scroll}px`
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
            document.documentElement.scrollTop = scroll;
        }
    }

    render () {
        const { modal, closeModal} = this.props
        if (!modal.type) {
            return null;
        }
        let component;
        switch (modal.type) {

            case 'post':
                component = <PostIndexItemModal post={modal.item}/>;
                break;

            case 'settings':
                component = <Settings />
                break;

            default:
                return null;
        }
        return (
            <div id="modal" className="modal-background" onClick={closeModal}>
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
    modal: state.ui.modal,
    scroll: state.ui.scroll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));