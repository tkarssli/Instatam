import React from 'react';
import { withRouter } from 'react-router-dom';

import PostIndexItem from './post_index_item';
import LoadingModal from '../modal/loading_modal'
import { scrollBody } from '../../lib/dom';

class PostIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = { post: null, loading: true}
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId){
            scrollBody(0)
            this.setState({loading: true})
            this.props.action(this.props.match.params.userId)
                .then(()=>this.setState({loading: false}))
        }
        
    }

    componentDidMount() {
        // scrollBody(0)
        this.props.action(this.props.match.params.userId)
            .then(()=>this.setState({loading: false}))
    }


    formatGrid(posts) {
        let item_components;
        const comparable = (a,b) => {
            const aDate = new Date(a.createdAt);
            const bDate = new Date(b.createdAt);
            return (aDate <= bDate) ? 1 : -1
        }
        
        if(this.props.id){
            // Profile post index
            let user_posts = [];
            s.forEach((post) => post.id === (this.props.id ? user_posts.push(post) : user_posts.push()));
            user_posts.sort(comparable);
            this.props.pages ?  user_posts = user_posts.slice(this.props.pages, this.props.pages+9) : null;
            item_components = user_posts.map(post => <PostIndexItem post={post} key={post.id} openPostModal={this.props.openPostModal}/>)
        } else {
            // Main page index
            posts.sort(comparable)
            this.props.pages ?  posts = posts.slice((this.props.pages-1)*9, ((this.props.pages-1)*9)+9) : null;
           
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
            <LoadingModal loading={this.state.loading}/>

                {this.formatGrid(Object.values(posts))}
            </div>
            
          );
    }
}
 
export default withRouter(PostIndex);