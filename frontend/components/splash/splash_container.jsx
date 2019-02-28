import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import Splash from './splash'
import { logout } from '../../actions/session_actions'

const mapStateToProps = (state,ownProps) => ({
    currentUser: state.entities.users[state.session.id]
})

// const mapDispatchToProps = dispatch => ({
// })

export default withRouter(connect(mapStateToProps, null)(Splash))