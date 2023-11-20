import React from "react";
import { Card } from "antd";
import styles from "./CardItem.styled";

const CardItem = ({ manufacturer = 'No title.', CPUModel, imageSrc, GPUModel, viewButton }) => {
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
                {viewButton && (
                    <div style={styles.button_container}>
                        <button style={styles.button} className="btn btn-primary">
                            View more
                        </button>
                    </div>
                )}
            </div>
        </Card>
    );
}

export default CardItem;
