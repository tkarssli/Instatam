import React from 'react';

import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.props.image;

        this.handleImage = this.handleImage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.image.imageUrl !== "" && this.state.imageUrl === "" && this.props.location.pathname !== '/upload'){
            this.setState(this.props.image)
        }
    }

    update(field){
        return (e) => {this.setState({[field]: e.currentTarget.value})}
    }

    handleSubmit(e){
        e.preventDefault();
        const post = Object.assign({post: this.props.post}, this.state)
        // debugger
        this.props.action(post)
            .then((res) => {
                this.props.history.push(`/p/${res.post.id}`)})
    }

    handleImage(e){
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () => this.setState({ imageUrl: reader.result, imageFile: file });
        debugger
        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ imageUrl: "", imageFile: null })
        }
        
    }
    render() { 
        const { errors } = this.props;
        return (
            <div className="post-form">
                <form onSubmit={this.handleSubmit}>
                <div>
                    <div className="image-input">
                        <img src={this.state.imageUrl}/>
                        <label htmlFor="input" className="btn"> Choose File</label>
                        <input id="input" onChange={this.handleImage} type="file"/>
                        <input type="submit" className="btn" value={this.props.image.formType}/>

                    </div>
                    <div className="caption-input">
                        <input placeholder="Enter a Caption" type="text" onChange={this.update('caption')} value={this.state.caption} />
                        <ul className="errors">
                        {errors.map((error, index) => <li key={index}>{error}</li>)}
                    </ul>
                    </div>
                </div>
                </form>
            </div>
          );
    }
}
 
export default withRouter(PostForm);