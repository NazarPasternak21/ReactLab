import React from "react";
import Laptops from "../../Images/Laptops.jpg";
import styles from "./Home.styled";
import ASUS from "../../Images/ASUS.jpg";
import ACER from "../../Images/ACER.jpg";
import Lenovo from "../../Images/Lenovo.jpg";
import MSI from "../../Images/MSI.jpg"
import HP from "../../Images/HP.jpg"
import Dell from "../../Images/Dell.jpg"
import CardItem from "../../components/CardItem/CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from "react";

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
];

const moreDate = [
    {
        manufacturer: "MSI",
        CPUModel: "i7",
        image: MSI,
        GPUModel: "GTX 2070",
    },
    {
        manufacturer: "HP",
        CPUModel: "i3",
        image: HP,
        GPUModel: "GTX 970",
    },
    {
        manufacturer: "Dell",
        CPUModel: "i5",
        image: Dell,
        GPUModel: "RTX 1080",
    },
]

const Home = () => {

    const [ViewMoreOpened, setViewMoreOpened] = useState(false);

    const viewMore = () => {
        setViewMoreOpened((prevViewMoreOpened) => !prevViewMoreOpened);
    }

    return (
        <div className="container">
            <div style={styles.container} className="row">
                <div className="col-md-6">
                    <img style={styles.img}
                        src={Laptops}
                        alt="Зображення"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2 style={styles.textHeader}>Магазин найкращих ноутбуків</h2>
                    <p style={styles.text}>
                        Наш магазин пропонує тільки найкращі ноутбуки. 
                        У нашому асортименті є різні моделі ноутбуків на будь-який смак і бюджет.
                    </p>
                </div>
            </div>
            <div style={styles.cardWrapper}>
                {data.map(({ manufacturer, CPUModel, image, GPUModel }, idx) => (
                    <CardItem
                        manufacturer={manufacturer}
                        CPUModel={CPUModel}
                        imageSrc={image}
                        GPUModel={GPUModel}
                        key={idx}
                    />
                ))}
            </div>
            {ViewMoreOpened && (
                <div style={styles.cardWrapper}>
                    {moreDate.map(({ manufacturer, CPUModel, image, GPUModel }, idx) => (
                        <CardItem
                        manufacturer={manufacturer}
                        CPUModel={CPUModel}
                        imageSrc={image}
                        GPUModel={GPUModel}
                        key={idx}
                    />
                ))}
                </div>
            )}
            <div style={styles.button_container}>
                <button style={styles.button} className="btn btn-primary" onClick={viewMore}>
                    View more
                </button>
            </div>
        </div>
    );
}

export default Home
