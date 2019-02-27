import {connect} from 'react-redux';
import App from './app'

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

// const mapDispatchToProps = dispatch => ({
//     logout: () => dispatch(logout())
// })

export default connect(mapStateToProps, null)(App)