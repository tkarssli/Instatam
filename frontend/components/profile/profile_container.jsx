import Profile from "./profile";
import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions'
import { fetchUser } from "../../actions/user_actions";
import { openSettingsModal } from "../../actions/modal_actions";
import { clearScroll } from "../../actions/scroll_actions"
import { createFollow, deleteFollow } from "../../actions/follow_actions";


const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    openSettingsModal: modal => dispatch(openSettingsModal(modal)),
    clearScroll: () => dispatch(clearScroll()),
    createFollow: userId => dispatch(createFollow(userId)),
    deleteFollow: userId => dispatch(deleteFollow(userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)