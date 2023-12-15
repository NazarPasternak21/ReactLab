import React, { useEffect, useState } from "react";
import styles from "./Items.styled";
import { getAllLaptop } from "../../API/api";
import CardItem from "../../components/CardItem/CardItem";

export default function Items(props) {
    const [filteredLaptops, setFilteredLaptops] = useState([]);

    useEffect(() => {
        const fetchLaptop = async () => {
            try {
                const response = await getAllLaptop();
                let laptopsToDisplay = [...response.data];

                if (typeof props.selectedFilter === 'string') {
                    if (props.selectedFilter === "CPU") {
                        laptopsToDisplay.sort((a, b) => a.cpumodel.localeCompare(b.cpumodel));
                    } else if (props.selectedFilter === "GPU") {
                        laptopsToDisplay.sort((a, b) => a.gpumodel.localeCompare(b.gpumodel));
                    } else if (props.selectedFilter === "price") {
                        laptopsToDisplay.sort((a, b) => a.price - b.price);
                    }
                }

                if (props.appliedFilter) {
                    const filtered = laptopsToDisplay.filter(
                        laptop =>
                            laptop.manufacturer.toLowerCase().includes(props.inputValue.toLowerCase()) &&
                            ((props.selectedCategory === "Manufacturer" && laptop.manufacturer.toLowerCase() === props.selectedFilter.toLowerCase()) ||
                            (props.selectedCategory === "CPU" && laptop.cpumodel.toLowerCase() === props.selectedFilter.toLowerCase()) ||
                            (props.selectedCategory === "GPU" && laptop.gpumodel.toLowerCase() === props.selectedFilter.toLowerCase()))
                    );
                    setFilteredLaptops(filtered);
                } else {
                    setFilteredLaptops(laptopsToDisplay);
                }
            } catch (error) {
                console.error("Помилка завантаження даних про ноутбук:", error);
            }
        };

        fetchLaptop();
    }, [props.inputValue, props.selectedCategory, props.selectedFilter, props.appliedFilter]);

    return (
        <div className="container">
            <div style={styles.cardWrapper}>
                {filteredLaptops.map(laptop => (
                    <CardItem
                        id={laptop.id}
                        manufacturer={laptop.manufacturer}
                        cpumodel={laptop.cpumodel}
                        imageSrc={laptop.imageSrc}
                        gpumodel={laptop.gpumodel}
                        price={laptop.price}
                        key={laptop.id}
                        viewButton={true}
                    />
                ))}
            </div>
        </div>
    );
}
