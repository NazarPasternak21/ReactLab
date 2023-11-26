import React, { useState, useEffect } from "react";
import CardItem from "../../components/CardItem/CardItem"; // Add this import
import styles from "./Items.styled";
import { getAllLaptops } from "../../API/api";

const Items = ({ filter, searchTerm }) => {
    const [laptops, setLaptops] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllLaptops();
                setLaptops(response.data);
            } catch (error) {
                console.error('Помилка отримання лаптопів:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const filteredData = filter
        ? laptops.filter(
            (item) =>
                item.CPUModel === filter ||
                item.GPUModel === filter ||
                item.manufacturer === filter
        )
        : laptops;

    const searchData = searchTerm
        ? filteredData.filter(
            (item) =>
                item.CPUModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.GPUModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : filteredData;

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {searchData.map(({ id, manufacturer, CPUModel, image, GPUModel, price }) => (
                    <CardItem
                        key={id}
                        manufacturer={manufacturer}
                        CPUModel={CPUModel}
                        imageSrc={image}
                        GPUModel={GPUModel}
                        price={price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Items;
