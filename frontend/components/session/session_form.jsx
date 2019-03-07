import React from 'react';
import { Link, withRouter } from 'react-router-dom'
// import { Session } from 'inspector';


class SessionForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: "",
            full_name:""
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
        // this.props.loadingModal
        this.props.processForm(user)
        if (!this.props.errors) {
            this.props.history.push('/')
        }
    }

    handleDemoLogin(e) {
        const demo_user = { username: "demo_user", password: "password", formType: 'login' }
        this.setState({ username: "", password: "", full_name:"" })
        let c = 150
        let ms = 0

        demo_user.username.split("").forEach((char, index) => {
            ms += (Math.random() * c)

            // Create Timeouts for username
            setTimeout(() => {
                this.setState({ username: this.state.username + char })
                if (index === demo_user.username.length - 1) {
                    ms = 0
                    demo_user.password.split("").forEach((char, index) => {
                        ms += (Math.random() * c)

                        // Create Timeouts for password
                        setTimeout(() => {
                            this.setState({ password: this.state.password + char })
                            if (index === demo_user.password.length - 1) {
                                const user = Object.assign({}, this.state)
                                this.props.demoLogin(user)
                            }
                        }, ms)
                    })
                }
            }, ms)
        })
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }



    render() {
        const { errors, formType } = this.props
        return (
            <>

                {(formType === 'signup') ? (<p><span className="bold">Sign up to see photos and videos from your friends</span></p>) : ""}
                <form className="userauth" onSubmit={this.handleSubmit}>


                    <input
                        type="text"
                        onChange={this.update('username')}
                        value={this.state.username}
                        placeholder="Username"

                    />
                    {(formType === 'signup') ? (
                        <>
                            <input
                                type="text"
                                onChange={this.update('email')}
                                value={this.state.email}
                                placeholder="Email"

                            />
                            <input
                                type="text"
                                onChange={this.update('full_name')}
                                value={this.state.full_name}
                                placeholder="Full Name"
                            />
                        </>
                    ) : ""}
                    <input
                        type="password"
                        onChange={this.update('password')}
                        value={this.state.password}
                        placeholder="Password"
                    />

                    <input className="btn" type="submit" value={formType.charAt(0).toUpperCase() + formType.slice(1)} />
                    <div className="btn" onClick={this.handleDemoLogin}>Demo User</div>
                    <ul className="errors">
                        {errors.map((error, index) => <li key={index}>{error}</li>)}
                    </ul>
                    {(formType === 'signup') ? (<p className="terms">By signing up, you agree to our <span className="bold">Terms</span> , <span className="bold">Data Policy</span> and <span className="bold">Cookies Policy</span> .</p>) : ""}

                </form>
            </>
        );
    }


}

export default withRouter(SessionForm);