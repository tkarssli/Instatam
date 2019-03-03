import React from 'react';

import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }


    formatGrid(posts) {
        const item_components = posts.map(post => <PostIndexItem post={post} key={post.id}/>)
        let res = []
        const rows = Math.ceil(posts.length);
        for (let i = 0; i < rows; i++) {
            res.push(
                <div className="index-row">
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
                {this.formatGrid(Object.values(posts))}
            </div>
            
          );
    }
}
 
export default PostIndex;