import React from 'react';
import { closePostModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PostIndexItemModal from '../post/post_index_item_modal';

class PostModal extends React.Component {

    componentDidUpdate(){
        
        const { postModal, scroll } = this.props
        const body = document.getElementsByTagName('body')[0]

        // Stop body from scrolling while modal is open
        if (postModal.type) {
            body.style.top = `-${scroll}px`
            body.classList.add('no-scroll')
        } else {
            body.classList.remove('no-scroll')
            document.documentElement.scrollTop = scroll;
        }
    }

    render () {

        const { postModal, closePostModal} = this.props
        if (!postModal.type) {
            return null;
        }
        let component;
        switch (postModal.type) {

            case 'post':
                component = <PostIndexItemModal post={postModal.item}/>;
                break;

            default:
                return null;
        }
        return (
            <div id="modal" className="modal-background" onClick={closePostModal}>
            {/* <div className="modal-button"/> */}
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
            </div>
        );
    }
  
}

const mapStateToProps = state => {
  return {
    postModal: state.ui.modal.post,
    scroll: state.ui.scroll
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closePostModal: () => dispatch(closePostModal()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostModal));