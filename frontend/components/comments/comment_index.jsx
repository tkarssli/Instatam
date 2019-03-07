import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import { clearModals } from '../../actions/modal_actions'


import CommentIndexItem from './comment_index_item'
// import PostIndexItem from './post_index_item';
// import Modal from '../modal/modal'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {body: "", post_id: this.props.post.id}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onEnterPress = this.onEnterPress.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.post.id)
    }

    handleSubmit() {
        // e.preventDefault()
        this.setState({body: ""})
        this.props.createComment(this.state)
    }
    handleLike() {

    }

    onEnterPress(e){
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.handleSubmit()
        }
      }

    render() { 
        const { comments, users, clearModals, currUserId, deleteComment, post} = this.props
        return (
            comments ? (
                <>
                    <div className="comment-feed">
                        {comments.map(comment => (
                            <CommentIndexItem 
                                currUserId={currUserId}
                                comment={comment} key={comment.id} 
                                user={users[comment.userId]} 
                                clearModals={clearModals} 
                                deleteComment={deleteComment}
                            />))}
                    </div>
                    <div className="icons">
                        <div>
                            <span className="like-icon icon glyph" onClick={this.handleLike}></span>
                        </div>
                    </div>
                    <div className="likes">
                        <span className="bold">{post.likedUserIds.length} likes</span>
                    </div>
                    <div className="createdAt">{post.createdAt}</div>
                    <form >
                        <textarea onKeyDown={this.onEnterPress} placeholder="Add a comment..." onChange={(e)=> this.setState({body: e.target.value})} value={this.state.body}/>
                        <input type="submit" value=""></input>
                    </form>
                </>

            ) : ("")
          );
    }
}
 
const mSP = (state, ownProps) => ({
    comments: Object.values(state.entities.comments),
    users: state.entities.users,
    currUserId: state.session.id
})

const mDP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    clearModals: () => dispatch(clearModals()),
    // openSettingsModal: modal => dispatch(openSettingsModal(modal))
})

export default connect(mSP, mDP)(CommentIndex)