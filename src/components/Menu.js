import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#events">Upcoming events</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#about">About</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/#howto">How to add event</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/addevent">Add an event</Link></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
