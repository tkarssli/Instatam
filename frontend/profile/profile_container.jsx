
import Profile from "./profile";
import {connect} from 'react-redux';
import { logout } from '../actions/session_actions'


const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userName]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(PNF)