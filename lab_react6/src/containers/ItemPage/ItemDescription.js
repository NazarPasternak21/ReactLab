import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./ItemDescription.styled";
import {
    useNavigate, useParams,
} from "react-router-dom";
import { getLaptop } from "../../API/api";
import { useDispatch } from "react-redux";
import { addToCart } from '../Redux/reduces/laptopSlice';

export default function ItemDescription() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [laptop, setLaptop] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchLaptop = async () => {
            try {
                const response = await getLaptop(id);
                setLaptop(response.data);
            } catch (error) {
                console.error("Помилка завантаження даних про ноутбук:", error);
            }
        };

        fetchLaptop();
    }, [id]);

    const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value, 10);
        setSelectedQuantity(quantity);
    };

    const handleAddToCart = () => {
        const laptopWithQuantity = { ...laptop, laptopQuantity: selectedQuantity };
        dispatch(addToCart(laptopWithQuantity));
    };

    const goBack = () => {
        navigate("/catalog");
    };

    if (!laptop) {
        return <div className="loader">loading...</div>;
    }

    return (
        <div style={styles.container} className="container">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={laptop.imageSrc}
                        style={styles.img}
                        alt="Зображення"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2 style={styles.textHeader}>{laptop.manufacturer}</h2>
                    <p style={styles.text}>
                        This is a very good laptop. It has {laptop.cpumodel} and 
                        comes with {laptop.gpumodel}. The laptop features sophisticated colors and design.
                    </p>
                    <div style={styles.fields}>
                        <p>Countable field</p>
                        <div className="search-box" style={{ marginLeft: '10px'}}>
                            <input
                                id="search"
                                type="number"
                                placeholder="1234..."
                                style={{ borderRadius: '10px', width: '80px' }}
                                value={selectedQuantity}
                                onChange={handleQuantityChange}
                            />
                        </div>
                    </div>
                    <div style={styles.priceAndButtons}>
                        <h2>Price: ${laptop.price}</h2>
                        <button style={styles.button1} className="btn btn-primary" onClick={goBack}>Go back</button>
                        <button style={styles.button2} className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
