import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps)=> ({
    errors: state.errors.session,
    formType: 'login'

})

const mapDispatchToProps = dispatch => ({
    processForm: user => dispatch(login(user)),
    demoLogin: user => dispatch(login(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)