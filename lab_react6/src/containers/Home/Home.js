import React from "react";
import Laptops from "../../Images/Laptops.jpg";
import styles from "./Home.styled";
import MSI from "../../Images/MSI.jpg"
import HP from "../../Images/HP.jpg"
import Dell from "../../Images/Dell.jpg"
import CardItem from "../../components/CardItem/CardItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect } from "react";
import { getAllLaptop} from "../../API/api";

const moreDate = [
    {
        manufacturer: "MSI",
        cpumodel: "i7",
        image: MSI,
        gpumodel: "GTX 2070",
        price: 999.99, 
    },
    {
        manufacturer: "HP",
        cpumodel: "i3",
        image: HP,
        gpumodel: "GTX 970",
        price: 499.99, 
    },
    {
        manufacturer: "Dell",
        cpumodel: "i5",
        image: Dell,
        gpumodel: "RTX 1080",
        price: 599.99, 
    },
]

const Home = () => {

    const [isViewMoreOpened, setIsViewMoreOpened] = useState(false);
    const [isShowed, setIsShowed] = useState(false);
    const [laptops, setLaptop] = useState([]);

    useEffect(() => {
        const fetchLaptop = async () => {
            try {
                const response = await getAllLaptop();
                setLaptop(response.data);
            } catch (error) {
                console.error("Помилка завантаження даних про ноутбук:", error);
            }
        };

        fetchLaptop();
    }, []);

    const viewMore = () => {
        setIsViewMoreOpened((prevIsViewMoreOpened) => !prevIsViewMoreOpened);
        setIsShowed(!isShowed);
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
                {laptops.map(laptop => (
                    <CardItem
                        manufacturer={laptop.manufacturer}
                        cpumodel={laptop.cpumodel}
                        imageSrc={laptop.imageSrc}
                        gpumodel={laptop.gpumodel}
                        price={laptop.price}
                        key={laptop.id}
                        id={laptop.id}
                    />
                ))}
            </div>
            {isViewMoreOpened && (
                <div style={styles.cardWrapper}>
                    {moreDate.map(({ manufacturer, cpumodel, image, gpumodel, price }, idx) => (
                        <CardItem
                        manufacturer={manufacturer}
                        cpumodel={cpumodel}
                        imageSrc={image}
                        gpumodel={gpumodel}
                        price={price}
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