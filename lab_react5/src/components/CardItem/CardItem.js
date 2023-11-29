import React from "react";
import { Card } from "antd";
import styles from "./CardItem.styled";
import { useNavigate } from "react-router-dom";

const CardItem = ({ id, manufacturer = 'No title.', cpumodel, imageSrc, gpumodel, price, viewButton }) => {
    const navigate = useNavigate();

    let card = {
        width: 350,
        borderRadius: "20px",
    };

    let image = styles.image;

    if (viewButton === true) {
        card = {
            width: 300,
            borderRadius: "20px",
        };
        image = {
            borderRadius: "10px",
            width: "300px",
            height: "175px",
        };
        console.log(imageSrc);
    }

    const goToItemPage = () => {
        navigate(`/catalog/${id}`);
    };

    return (
        <Card
            hoverable
            style={card}
            cover={<img style={image} alt="example" src={imageSrc} />}
        >
            <div>
                <h2>{manufacturer}</h2>
                <p>CPU Model: {cpumodel}</p>
                <p>GPU Model: {gpumodel}</p>
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
};

export default CardItem;
