import React from 'react';
import { closePostModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { noScrollBody, scrollBody } from '../../lib/dom'
import PostIndexItemModal from '../post/post_index_item_modal';
import { clearScroll } from '../../actions/scroll_actions';

class PostModal extends React.Component {

    componentDidUpdate(){
        
        const { postModal, scroll } = this.props

        // Stop body from scrolling while modal is open
        if (postModal.type) {
            noScrollBody(scroll)
        } else {
            scrollBody(scroll)
            // this.props.clearScroll();
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
    // clearScroll: () => dispatch(clearScroll())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostModal));