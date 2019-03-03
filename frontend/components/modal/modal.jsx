import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

import PostIndexItemModal from '../post/post_index_item_detail';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';

class Modal extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {scrollTop: document.documentElement.scrollTop}

    }

    listenScrollEvent(e) {
        console.log("test")
        e.preventDefault()
    }

    componentDidMount() {
        const body = document.getElementsByTagName('body')[0]
    }

    componentDidUpdate(){
        const body = document.getElementsByTagName('body')[0]
        if (this.props.modal) {
            this.scrollTop = document.documentElement.scrollTop
            body.style.top = `-${this.scrollTop}px`
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
            document.documentElement.scrollTop = this.scrollTop;
        }
    }
    

    componentWillUnmount() {
    }

    render () {
        const { modal, closeModal } = this.props
        if (!modal) {
            return null;
        }
        let component;
        switch (modal) {
            case 'post':
            component = <PostIndexItemModal />;
            break;
            default:
            return null;
        }
        return (
            <div id="modal" className="modal-background" onClick={closeModal}>
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

export default connect(mapStateToProps, mapDispatchToProps)(Modal);