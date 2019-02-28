import { connect } from 'react-redux';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps)=> ({
    errors: state.errors.session,
    formType: 'signup'

})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(signup(user)),
    demoLogin: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)