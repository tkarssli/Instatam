import {connect} from 'react-redux';
import App from './app'

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    ...ownProps
})

// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout())
// })

export default connect(mapStateToProps, null)(App)