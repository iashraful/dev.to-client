import React from 'react'
import {Link} from "react-router-dom"

export default class TopNavMenu extends React.Component {
    render() {
        const menuItems = this.props.items.filter((item) => {
            return !item.hide
        }).map((item) => {
            return (
                <Link className="navbar-item" to={item.path} key={item.path}>
                    {item.title}
                </Link>
            )
        });

        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        My Blog
                    </a>
                    <div className="navbar-burger burger" data-target="my-profile-navbar">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                <div id="my-profile-navbar" className="navbar-menu">
                    <div className="navbar-end">
                        {menuItems}
                    </div>
                </div>
            </nav>
        )
    }
}