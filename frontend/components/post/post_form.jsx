import React from 'react';

import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.image;

        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    handleSubmit(e){
        e.preventDefault();
        const post = Object.assign({}, this.state)
        this.props.action(post)
            .then((res) => {
                debugger
                this.props.history.push(`/p/${res.post.id}`)})
    }

    handleImage(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ imageUrl: reader.result, imageFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null })
        }

    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <img src={this.state.imageUrl}/>
                <input onChange={this.handleImage} type="file"/>
                Caption: <input type="text" onChange={this.update('caption')} value={this.state.caption} />
                <input type="submit" className="btn" value={this.props.image.formType}/>
            </form>
          );
    }
}
 
export default withRouter(PostForm);