import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';


class Settings extends React.Component{
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e) {
        this.props.closeModal();
        this.props.logout();
        this.props.history.push('/')
    }

    render () {
        return (
            <>
                <div className="profile-settings">
                    <ul>
                        <li onClick={this.handleLogout}>Log out</li>
                        <li onClick={() => this.props.closeModal()}>Cancel</li>
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
        modal: state.ui.modal,
    })

const mapDispatchToProps = dispatch => ({
        closeModal: () => dispatch(closeModal()),
        logout: () => dispatch(logout())
    })
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
