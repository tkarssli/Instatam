import {connect} from 'react-redux';
import Navbar from './navbar'
import { logout } from '../../actions/session_actions'
import { clearScroll } from '../../actions/scroll_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],
    modal: state.ui.modal.post
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    clearScroll: () => dispatch(clearScroll())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)