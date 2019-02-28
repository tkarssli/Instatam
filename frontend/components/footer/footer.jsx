import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <ul>
            <li>
                <Link to="/">ABOUT US</Link>
            </li>
            <li>
                <Link to="/">SUPPORT</Link>
            </li>
            <li>
                <Link to="/">API</Link>
            </li>
            <li>
                <Link to="/">PRIVACY</Link>
            </li>
            <li></li>
            <li><p>2019 TAMIR KARSSLI</p></li>
        </ul>
    </footer>
)

export default Footer;