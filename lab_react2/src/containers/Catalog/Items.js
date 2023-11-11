import React from "react";
import styles from "./Items.styled";
import ASUS from "../../Images/ASUS.jpg";
import ACER from "../../Images/ACER.jpg";
import Lenovo from "../../Images/Lenovo.jpg";
import MacBook from "../../Images/MacBook.jpg"
import CardItem from "../../components/CardItem/CardItem";


const data = [
    {
        manufacturer: "ASUS",
        CPUModel: "i5",
        image: ASUS,
        GPUModel: "GTX 970",
    },
    {
        manufacturer: "ACER",
        CPUModel: "i7",
        image: ACER,
        GPUModel: "GTX 1080",
    },
    {
        manufacturer: "Lenovo",
        CPUModel: "i9",
        image: Lenovo,
        GPUModel: "RTX 3090",
    },
    {
        manufacturer: "MacBook",
        CPUModel: "Apple M2 8 Core",
        image: MacBook,
        GPUModel: "Apple M2 10 Core",
    },
];


export default function Items() {
    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {data.map(({ manufacturer, CPUModel, image, GPUModel }, idx) => (
                    <CardItem
                        manufacturer={manufacturer}
                        CPUModel={CPUModel}
                        imageSrc={image}
                        GPUModel={GPUModel}
                        viewButton = {true}
                        id={idx}                    />
                ))}
            </div>
        </div>
    );
}