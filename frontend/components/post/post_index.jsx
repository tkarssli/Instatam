import React from 'react';
import { withRouter } from 'react-router-dom';

import PostIndexItem from './post_index_item';
import PostModal from '../modal/post_modal'
import SettingsModal from '../modal/settings_modal'
import LoadingModal from '../modal/loading_modal'
import { scrollBody } from '../../lib/dom';

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { post: null}
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            scrollBody(0)
            this.props.openLoadingModal();
            this.props.action(this.props.match.params.userId)
                .then(() => this.props.closeLoadingModal())
        }
        
    }

    componentDidMount() {
        scrollBody(0)
        this.props.openLoadingModal();
        this.props.action(this.props.match.params.userId)
            .then(()=>this.props.closeLoadingModal())
    }


    formatGrid(posts) {
        let item_components;
        if(this.props.id){
            let user_posts = [];
            posts.forEach((post) => post.id === (this.props.id ? user_posts.push(post) : user_posts.push()));
            item_components = user_posts.map(post => <PostIndexItem post={post} key={post.id} openPostModal={this.props.openPostModal}/>)
        } else {
            item_components = posts.map(post => <PostIndexItem post={post} key={post.id} openPostModal={this.props.openPostModal}/>)
        }
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
            <LoadingModal />
            <PostModal />
            <SettingsModal />

                {this.formatGrid(Object.values(posts))}
            </div>
            
          );
    }
}
 
export default withRouter(PostIndex);