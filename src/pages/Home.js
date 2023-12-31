import axios from "../axios";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";
import img1 from "../assets/Post1.jpg";
import img2 from "../assets/banner.jpg";
import Footer from "./Footer";
import Testimonial from "../components/Testimonial";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const lastProducts = products.slice(0, 8);
  useEffect(() => {
    axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
  }, []);
  return (
    <div>
      <img
        src={img1}
        className="home-banner"
        alt=""
        width={"100%"}
        height={"100%"}
      />

      <div className="featured-products-container container mt-4">
        <h2>Latest Vehicles</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {lastProducts.map((product) => (
            <ProductPreview {...product} />
          ))}
        </div>
        <div>
          <Link
            to="/category/all"
            style={{
              textAlign: "right",
              display: "block",
              textDecoration: "none",
            }}
          >
            See more {">>"}
          </Link>
        </div>
      </div>
      <div className="recent-products-container container mt-4">
        <h2>Categories</h2>
        <Row>
          {categories.map((category) => (
            <LinkContainer
              to={`/category/${category.name.toLocaleLowerCase()}`}
            >
              <Col md={3}>
                <div
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`,
                  }}
                  className="category-tile"
                >
                  {category.name}
                </div>
              </Col>
            </LinkContainer>
          ))}
        </Row>
      </div>
      {/* <div className="sale__banner--container mt-4">
        <a href="https://www.youtube.com/@selvaCars">
          <img
            src={img2}
            className="banner"
            alt="watch"
            width={"100%"}
            height={"100%"}
          />
        </a>
      </div> */}

      <div className="iframe">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/JK4DDI1GkAo?si=DrWpukvcQyNaPcn1?controls=0"
        />
      </div>
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default Home;
