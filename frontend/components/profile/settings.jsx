import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import { closeSettingsModal } from '../../actions/modal_actions';


class Settings extends React.Component{
    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this)
    }

    handleLogout(e) {
        this.props.closeSettingsModal();
        this.props.logout();
        this.props.history.push('/')
    }

    render () {
        return (
            <>
                <div className="settings">
                    <ul>
                        <li onClick={this.handleLogout}>Log out</li>
                        <li onClick={() => this.props.closeSettingsModal()}>Cancel</li>
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
        modal: state.ui.modal.settings,
    })

const mapDispatchToProps = dispatch => ({
        closeSettingsModal: () => dispatch(closeSettingsModal()),
        logout: () => dispatch(logout())
    })
  
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Settings));
