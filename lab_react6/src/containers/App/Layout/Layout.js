import React from "react";
import LaptopLogo from "../../../Images/Laptop_Logo.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from './Layout.styled';
import {
    useNavigate,
} from "react-router-dom";

const Layout = (props) => {
    const navigate = useNavigate();

    const catalogPage = () => {
        navigate('catalog');
    }

    const homePage = () => {
        navigate('/')
    }

    const cartPage = () => {
        navigate('/cart');
    }

    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img style={styles.logo} src={LaptopLogo} alt="logo" />
                </a>
                <ul className="navbar-nav mx-auto">
                    <li style={styles.navLink} className="nav-item">
                        <button className="nav-link" onClick={homePage}>Home</button>
                    </li>
                    <li style={styles.navLink} className="nav-item">
                        <button className="nav-link" onClick={catalogPage}>Catalog</button>
                        </li>
                    <li style={styles.navLink}  className="nav-item">
                        <button className="nav-link" onClick={cartPage}>Cart</button>
                    </li>
                </ul>   
                {props.searchLine && (
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Пошук..."
                            style={{ borderRadius: '10px' }}
                            value={props.searchTerm}
                            onChange={props.onSearchChange}
                        />
                    </div>
                )}
            </div>
        </header>
    );
}

export default Layout;
