import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps)=> ({
    errors: state.errors.session,
    formType: 'login',

})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    demoLogin: user => dispatch(login(user))
})


const SessionFormContainer = connect(mapStateToProps, mapDispatchToProps)(SessionForm)
export default withRouter(SessionFormContainer);