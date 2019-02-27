import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import { Session } from 'inspector';


class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
        if(!this.props.errors){
            this.props.history.push('/')
        }
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }

    render() {
        const link_text = (this.props.formType === 'login') ? 'signup' : 'login';
        const { errors, demoLogin} = this.props
        const demo_user = {username:"Demo User", password: "password"}
        return (
             <>
                <h2>{this.props.formType}</h2>

                {<span>{errors.join(" ")}</span>}
                <form onSubmit={this.handleSubmit}>

                <label>Username:
                    <input 
                        type="text" 
                        onChange={this.update('username')} 
                        value={this.state.username}
                    />
                </label>
                {(this.props.formType === 'signup') ? (
                    <label>email:
                        <input 
                            type="text" 
                            onChange={this.update('email')} 
                            value={this.state.email}
                        />
                    </label>
                ) : ""}
                <label>password:
                    <input 
                        type="password" 
                        onChange={this.update('password')} 
                        value={this.state.password}
                    />
                </label>

                <input type="submit" value={this.props.formType}/>
                <button onClick={() => {demoLogin(demo_user)}}>Demo User</button>
                    
                </form>
             </>
        );
    }

   
}

export default withRouter(SessionForm);