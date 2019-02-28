import React from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from 'react-router'

const Hello = () => (
    <p>
        HELLO
        <Link to="/">back to home</Link>
    </p>

)
export default withRouter(Hello);