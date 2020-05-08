import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Logo from "../assets/images/serverless-events-logo-small.png"

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><img src={Logo} alt="Serverless Events" className="logo-img" /></Link>
        <nav>
            <a className="menu-link" onClick={props.onToggleMenu} href="#">Menu</a>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
