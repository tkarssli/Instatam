import Profile from "./profile";
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions'
import { fetchUser } from "../../actions/user_actions";
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.session.id
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    openModal: modal => dispatch(openModal(modal))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)