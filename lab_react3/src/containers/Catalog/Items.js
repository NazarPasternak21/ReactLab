// Items.js
import React from "react";
import styles from "./Items.styled";
import ASUS from "../../Images/ASUS.jpg";
import ACER from "../../Images/ACER.jpg";
import Lenovo from "../../Images/Lenovo.jpg";
import MacBook from "../../Images/MacBook.jpg";
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

export default function Items({ filter, searchTerm }) {
  const filteredData = filter
    ? data.filter(
        (item) =>
          item.CPUModel === filter ||
          item.GPUModel === filter ||
          item.manufacturer === filter
      )
    : data;

  const searchData = searchTerm
    ? filteredData.filter(
        (item) =>
          item.CPUModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.GPUModel.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredData;

  return (
    <div className="container">
      <div style={styles.cardWrapper}>
        {searchData.map(({ manufacturer, CPUModel, image, GPUModel }, idx) => (
          <CardItem
            manufacturer={manufacturer}
            CPUModel={CPUModel}
            imageSrc={image}
            GPUModel={GPUModel}
            viewButton={true}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
}
