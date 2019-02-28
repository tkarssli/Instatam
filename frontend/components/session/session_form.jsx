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
        this.handleDemoLogin = this.handleDemoLogin.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
        if(!this.props.errors){
            this.props.history.push('/')
        }
    }

    handleDemoLogin(e) {
        const demo_user = {username:"Demo User", password: "password"}
        this.props.demoLogin(demo_user)
        this.props.history.push('/')
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.target.value})
        }
    }



    render() {
        const { errors, formType} = this.props
        return (
             <>
                            
                {(formType === 'signup' )? (<p>Sign up to see photos and videos from your friends</p>): ""}
                <form className="userauth" onSubmit={this.handleSubmit}>
                <ul className="errors">
                    {errors.map(error => <li>{error}</li>)}
                </ul>

                <input 
                    type="text" 
                    onChange={this.update('username')} 
                    value={this.state.username}
                    placeholder="Username"

                />
                {(formType === 'signup') ? (
                    <input 
                        type="text" 
                        onChange={this.update('email')} 
                        value={this.state.email}
                        placeholder="Email"

                    />
                ) : ""}
                <input 
                    type="password" 
                    onChange={this.update('password')} 
                    value={this.state.password}
                    placeholder="Password"
                />

                <input className="btn" type="submit" value={formType.charAt(0).toUpperCase() + formType.slice(1)}/>
                <button className="btn" onClick={this.handleDemoLogin}>Demo User</button>
                    
                </form>
             </>
        );
    }

   
}

export default withRouter(SessionForm);