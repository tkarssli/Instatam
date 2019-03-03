import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostIndexItemModal from '../post/post_index_item_modal';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component {

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
    }

    componentDidUpdate(){

        // Stop body from scrolling while modal is open
        const body = document.getElementsByTagName('body')[0]
        if (this.props.modal.type) {
            this.scrollTop = document.documentElement.scrollTop
            body.style.top = `-${this.scrollTop}px`
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
            document.documentElement.scrollTop = this.scrollTop;
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
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));