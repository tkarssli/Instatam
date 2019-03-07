import React from 'react';
import { connect } from 'react-redux';
import { fetchComments, createComment, deleteComment } from '../../actions/comment_actions';
import { clearModals } from '../../actions/modal_actions'


import CommentIndexItem from './comment_index_item'
import { createLike, deleteLike } from '../../actions/like_actions';
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
        .then(() => {
            const el = document.getElementsByClassName('comment-feed')[0]
            el.scrollTop = el.scrollHeight
        })
    }
    handleLike(e) {
        e.persist()

        const { post, currUserId, deleteLike, createLike } = this.props
        if (post.likedUserIds.includes(currUserId)){
            deleteLike(post.id)
            .then(()=>  {
                e.target.className = "like-icon icon2 glyph" })
        } else {
            createLike(post.id)
            .then(()=>  {
                e.target.className = "liked-icon icon2 glyph" })
        }
    }

    onEnterPress(e){
        if(e.keyCode == 13 && e.shiftKey == false) {
            e.preventDefault();
            this.handleSubmit()

        }
      }

    render() { 
        const { comments, users, clearModals, currUserId, deleteComment, post} = this.props
        const formatted_date = new Date(post.createdAt).toLocaleString("en-US",{ year: 'numeric', month: 'long', day: 'numeric' })
        return (
            comments ? (
                <>  
                    <div className="comment-feed">

                        <div >
                            {comments.map(comment => (
                                <CommentIndexItem 
                                    currUserId={currUserId}
                                    comment={comment} key={comment.id} 
                                    user={users[comment.userId]} 
                                    clearModals={clearModals} 
                                    deleteComment={deleteComment}
                                />))}
                        </div>
                    </div>
                    <div className="icons">
                        <div>
                            {post.likedUserIds.includes(currUserId) ? (
                                <span className="liked-icon icon2 glyph" onClick={this.handleLike}></span>
                            ) : (
                                <span className="like-icon icon2 glyph" onClick={this.handleLike}></span>
                            )}
                        </div>
                    </div>
                    <div className="likes">
                        <span className="bold">{post.likedUserIds.length} likes</span>
                    </div>
                    <div className="createdAt">{formatted_date}</div>
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
    currUserId: state.session.id,
    post: state.entities.posts[ownProps.post.id]
})

const mDP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    fetchComments: postId => dispatch(fetchComments(postId)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    createLike: postId => dispatch(createLike(postId)),
    deleteLike: postId => dispatch(deleteLike(postId)),
    clearModals: () => dispatch(clearModals()),
    // openSettingsModal: modal => dispatch(openSettingsModal(modal))
})

export default connect(mSP, mDP)(CommentIndex)