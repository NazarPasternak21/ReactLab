import React from "react";
import { Card } from "antd";
import styles from "./CardItem.styled";

const CardItem = ({ manufacturer = 'No title.', CPUModel, imageSrc, GPUModel }) => (
    <Card
        hoverable
        style={{ width: 350, borderRadius: "20px" }}
        cover={
            <img style={styles.image} alt="example" src={imageSrc} />
        }
    >
        <div>
            <h2>{manufacturer}</h2>
            <p>CPU Model: {CPUModel}</p>
            <p>GPU Model: {GPUModel}</p>
        </div>
    </Card>
);

export default CardItem;
