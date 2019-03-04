import React from 'react';
import { withRouter } from 'react-router-dom';

import PostIndexItem from './post_index_item';
import Modal from '../modal/modal'

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { post: null}
        
    }

    
    componentDidMount() {
        this.props.fetchPosts()
    }


    formatGrid(posts) {
        const item_components = posts.map(post => <PostIndexItem post={post} key={post.id} openModal={this.props.openModal}/>)
        let res = []
        const rows = Math.ceil(posts.length/3);
        for (let i = 0; i < rows; i++) {
            res.push(
                <div className="index-row" key={i}>
                    {item_components.slice(i*3, i*3+3)}
                </div>
            )
        }
        return res
    }

    render() { 
        const { posts } = this.props
        return (
            <div className="post-index">
            <Modal />
                {this.formatGrid(Object.values(posts))}
            </div>
            
          );
    }
}
 
export default withRouter(PostIndex);