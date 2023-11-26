// CardItem.js
import React from "react";
import { Card } from "antd";
import styles from "./CardItem.styled";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, manufacturer = 'No title.', CPUModel, imageSrc, GPUModel, price, viewButton }) => {

    const navigate = useNavigate();

    let card = {
        width: 350, borderRadius: "20px"
    }

    let image = styles.image;

    if (viewButton === true) {
        card = {
            width: 300,
            borderRadius: "20px"
        }
        image = {
            borderRadius: "10px",
            width: "300px",
            height: "175px"
        }
    }

    const goToItemPage = () => {
        navigate(`/catalog/${id}`, { state: { manufacturer, CPUModel, GPUModel, imageSrc, price } });
    }

    return (
        <Card
            hoverable
            style={card}
            cover={
                <img style={styles.image} alt="example" src={imageSrc} />
            }
        >
            <div>
                <h2>{manufacturer}</h2>
                <p>CPU Model: {CPUModel}</p>
                <p>GPU Model: {GPUModel}</p>
                <p>Price: ${price}</p>
                {viewButton && (
                    <div style={styles.button_container}>
                        <button style={styles.button} className="btn btn-primary" onClick={goToItemPage}>
                            View more
                        </button>
                    </div>
                )}
            </div>
        </Card>
    );
}

export default CardItem;
