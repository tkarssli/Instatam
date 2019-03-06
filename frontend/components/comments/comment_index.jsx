import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments, createComment } from '../../actions/comment_actions';
import { clearModals } from '../../actions/modal_actions'


import CommentIndexItem from './comment_index_item'
// import PostIndexItem from './post_index_item';
// import Modal from '../modal/modal'

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)

        this.state = {body: "", post_id: this.props.postId}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.postId)
    }

    handleSubmit(e) {
        e.preventDefault()
        this.setState({body: ""})
        this.props.createComment(this.state)
    }
    render() { 
        const { comments, users, clearModals, currUserId} = this.props
        return (
            comments ? (
                <div className="comment-index">
                    <div className="comment-feed">
                        {comments.map(comment => (<CommentIndexItem currUserId={currUserId}comment={comment} key={comment.id} user={users[comment.userId]} clearModals={clearModals} />))}
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" onChange={(e)=> this.setState({body: e.target.value})} value={this.state.body}/>
                        <input type="submit"/>
                    </form>
                </div>

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
    clearModals: () => dispatch(clearModals()),
    // openSettingsModal: modal => dispatch(openSettingsModal(modal))
})

export default connect(mSP, mDP)(CommentIndex)