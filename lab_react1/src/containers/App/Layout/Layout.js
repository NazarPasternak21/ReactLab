import React from "react";
import LaptopLogo from "../../../Images/Laptop_Logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Layout.styled';

const Layout = () => {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img style={styles.logo} src={LaptopLogo} alt="logo" />
                </a>
                <ul className="navbar-nav mx-auto">
                    <li style={styles.navLink} className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li style={styles.navLink} className="nav-item">
                        <a className="nav-link" href="/">Catalog</a>
                    </li>
                    <li style={styles.navLink}  className="nav-item">
                        <a className="nav-link" href="/">Cart</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Layout;
