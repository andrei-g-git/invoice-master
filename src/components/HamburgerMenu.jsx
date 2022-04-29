import React from 'react';
import "../css/HamburgerMenu.scss";

function HamburgerMenu() {
    return (
        <div className="hamburger-menu-container">
            <div className="hamburger-menu">
                <a className="link"
                    href="/"
                >
                    Home
                </a>

                <a className="link"
                    href="/"
                >
                    Invoices
                </a>

                <a className="link"
                    href="/anon-stats"
                >
                    Statistics
                </a>
            </div>
        </div>
    )
}

export default HamburgerMenu;