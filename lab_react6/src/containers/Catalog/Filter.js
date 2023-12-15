import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./Filter.styled"; 

export default function Filters({ onFilterChange, onClearFilter, selectedCategory, selectedFilter, filterMenuVisible, setFilterMenuVisible }) {
    const [selectedFilterCategory, setSelectedFilterCategory] = useState(null);
    const [selectedFilterValue, setSelectedFilterValue] = useState(null);

    const handleCategoryChange = (category) => {
        setSelectedFilterCategory(category);
        setSelectedFilterValue(null);
        onFilterChange(category, null);
    };

    const handleFilterChange = (filter) => {
        setSelectedFilterValue(filter);
        onFilterChange(selectedFilterCategory, filter);
    };

    return (
        <div style={styles.filterButtonsContainer}>
            <div style={{ display: "flex" }}>
                {["CPU", "GPU", "Manufacturer"].map((category) => (
                    <div key={category}>
                        <button
                            style={{
                                ...styles.button,
                                ...(selectedFilterCategory === category && styles.activeButton),
                                ...styles.largerButton,
                            }}
                            onClick={() => {
                                handleCategoryChange(category);
                                setFilterMenuVisible(!filterMenuVisible);
                            }}
                        >
                            {category}
                        </button>
                        {selectedFilterCategory === category && filterMenuVisible && (
                            <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                                {category === "CPU" ? (
                                    ["i5", "i7", "i9"].map((char) => (
                                        <li
                                            key={char}
                                            style={{
                                                ...styles.button,
                                                ...(selectedFilterValue === char && styles.activeButton),
                                            }}
                                            onClick={() => handleFilterChange(char)}
                                        >
                                            {char}
                                        </li>
                                    ))
                                ) : category === "GPU" ? (
                                    ["GTX 970", "GTX 1080", "RTX 3090", "Apple M2 8 Core", "Apple M2 10 Core"].map((char) => (
                                        <li
                                            key={char}
                                            style={{
                                                ...styles.button,
                                                ...(selectedFilterValue === char && styles.activeButton),
                                            }}
                                            onClick={() => handleFilterChange(char)}
                                        >
                                            {char}
                                        </li>
                                    ))
                                ) : (
                                    ["ASUS", "ACER", "Lenovo", "MacBook"].map((char) => (
                                        <li
                                            key={char}
                                            style={{
                                                ...styles.button,
                                                ...(selectedFilterValue === char && styles.activeButton),
                                            }}
                                            onClick={() => handleFilterChange(char)}
                                        >
                                            {char}
                                        </li>
                                    ))
                                )}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <Button
                    style={{ ...styles.button, ...(selectedFilterCategory === null && styles.activeButton) }}
                    onClick={() => {
                        onClearFilter();
                        setFilterMenuVisible(false); 
                    }}
                >
                    Clear Filter
                </Button>
            </div>
        </div>
    );
}
