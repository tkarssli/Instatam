import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => (
    <footer>
        <ul>
            <li>
                <a target="_blank" href="https://www.tamirkarssli.com">ABOUT US</a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/tkarssli/Instatam/blob/master/README.md">SUPPORT</a>
            </li>
            <li>
                <a target="_blank" href="https://www.linkedin.com/in/tkarssli/">JOBS</a>
            </li>
            <li>
                <a target="_blank" href="https://github.com/tkarssli/Instatam/wiki/Backend-routes">API</a>
            </li>
            <li>
                <Link to="/">PRIVACY</Link>
            </li>
            <li className="socials">
                <a target="_blank" href="https://www.linkedin.com/in/tkarssli/"><div className="github-icon glyph"></div></a>
                <a target="_blank" href="https://github.com/tkarssli/"><div className="linkedin-icon glyph"></div></a>

            </li>

            <li><p>2019 TAMIR KARSSLI</p></li>
        </ul>
    </footer>
)

export default Footer;