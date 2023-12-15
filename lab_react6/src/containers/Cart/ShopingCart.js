import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
} from "../Redux/reduces/laptopSlice";
import {
  StyledBackToCatalogButton,
  StyledContinueButton,
  StyledIncrementButton,
  StyledDecrementButton,
} from "./ShoppingCart.styled";

const ShoppingCart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.laptop.laptopItems);
  const dispatch = useDispatch();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);

  const laptopTotalQuantity = cartItems.reduce((total, laptop) => {
    return total + laptop.price * laptop.laptopQuantity;
  }, 0);

  const handleBackToCatalog = () => {
    navigate("/catalog");
  };

  const handleContinue = () => {
    setShowCheckoutForm(true);
  };

  const handleSubmit = (values) => {
    navigate("/success");
  };

  const handleGoBack = () => {
    setShowCheckoutForm(false);
  };

  return (
    <div>
      {showCheckoutForm ? (
        <CheckoutForm onSubmit={handleSubmit} onGoBack={handleGoBack} />
      ) : (
        <Card>
          <CardHeader style={{ textAlign: "center" }}>
            <h2 style={{ fontWeight: "bold" }}>Shopping Cart</h2>
          </CardHeader>
          <CardBody>
            <Row>
              {cartItems.map((laptop, index) => (
                <Col key={index} sm={6} md={4}>
                  <Card style={{ width: "380px", height: "400px" }}>
                    <CardBody>
                      <img
                        src={laptop.imageSrc}
                        alt={laptop.manufacturer}
                        style={{ width: "350px", height: "180px" }}
                      />
                      <h4 style={{ fontWeight: "bold" }}>{laptop.manufacturer}</h4>
                      <p>CPU: {laptop.cpumodel}</p>
                      <p>GPU: {laptop.gpumodel}</p>
                      <p>Quantity: {laptop.laptopQuantity}</p>
                      <div>
                        <StyledIncrementButton
                          onClick={() => dispatch(incrementQuantity(laptop.id))}
                        >
                          +
                        </StyledIncrementButton>
                        <StyledDecrementButton
                          onClick={() => dispatch(decrementQuantity(laptop.id))}
                        >
                          -
                        </StyledDecrementButton>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Row>
          </CardBody>
          <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <StyledBackToCatalogButton onClick={handleBackToCatalog} style={{ fontWeight: "bold" }}>
                Back to Catalog
              </StyledBackToCatalogButton>
            </div>
            <p style={{ fontWeight: "bold" }}>Total amount: {laptopTotalQuantity} $</p>
            <div>
              <StyledContinueButton onClick={handleContinue} style={{ fontWeight: "bold" }}>
                Continue
              </StyledContinueButton>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ShoppingCart;