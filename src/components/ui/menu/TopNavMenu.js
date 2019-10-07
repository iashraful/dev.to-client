import React from 'react'
import {Link} from "react-router-dom"

export default class TopNavMenu extends React.Component {
    render() {
        document.addEventListener('DOMContentLoaded', () => {

            // Get all "navbar-burger" elements
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

            // Check if there are any navbar burgers
            if ($navbarBurgers.length > 0) {

                // Add a click event on each of them
                $navbarBurgers.forEach( el => {
                    el.addEventListener('click', () => {

                        // Get the target from the "data-target" attribute
                        const target = el.dataset.target;
                        const $target = document.getElementById(target);

                        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                        el.classList.toggle('is-active');
                        $target.classList.toggle('is-active');

                    });
                });
            }

        });

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
            <nav className="navbar is-fixed-top is-dark dev-dark">
                <div className="container">
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
                        <div className="navbar-start" style={{flexGrow: 1, justifyContent: 'center'}}>
                            <input placeholder="Search..." style={{width: '33%', margin: '6px 0 6px 0'}}/>
                        </div>
                        <div className="navbar-end">
                            {menuItems}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}