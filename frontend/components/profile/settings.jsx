import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../actions/session_actions';


class PostIndexItemModal extends React.Component{
    constructor(props) {
        super(props)

        this.handleLogout = this.handleLogout.bind(this)

    }

    handleLogout(e) {
        this.props.logout()
        this.props.history.push('/')
    }

    render () {
        return (
            <div className="profile-settings">
                <ul>
                    <li onClick={this.handleLogout}></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
        modal: state.ui.modal,
    })

const mapDispatchToProps = dispatch => ({
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
        // fetchUser: (userId) => dispatch(fetchUser(userId))
    })
  
export default connect(mapStateToProps, mapDispatchToProps)(PostIndexItemModal);
