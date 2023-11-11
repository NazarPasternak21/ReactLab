import Footer from "../App/Footer/Footer";
import Layout from "../App/Layout/Layout";
import Items from "./Items";
import React from "react";

export default function Catalog () {
    return (
        <div>
            <Layout searchLine="true" />
            <Items />
            <Footer />
        </div>
    );
}