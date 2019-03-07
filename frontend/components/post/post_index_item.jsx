import React from 'react';

class PostIndexItem extends React.Component {
    componentDidMount() {
        this.img.onload = () => {
            if(this.img.width === this.img.height && this.img.width >= 450){
                this.img.style.height = "100%"
            }
        }
    }

    handleLoad(e){
    }

    render(){
        const { post, openPostModal } = this.props;
        return (
        <div className = "post-index-item">
            <div className="post-hover" onClick={() => openPostModal({type: 'post', item: post, scroll: document.documentElement.scrollTop})}>
                <div>
                    <span className="comment-count sprite glyph"></span>
                    <span className="bold">{post.commentIds.length}</span>
                </div>
                <div>
                    <span className="like-count sprite glyph"></span>
                    <span className="bold">{post.likedUserIds.length}</span>
                </div>
            </div>
            <img ref={elem => this.img = elem} src={post.photoUrl} alt={post.caption}/>
        </div>
        )
    }
}


export default PostIndexItem;