import {connect} from 'react-redux';
import Splash from './splash'
import { logout } from '../../actions/session_actions'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

// const mapDispatchToProps = dispatch => ({
// })

export default connect(mapStateToProps, null)(Splash)