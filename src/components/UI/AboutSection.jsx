import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import d from "../../assets/all-images/IMG/d.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            
            <div className="about__section-content">

              <h4 className="section__subtitle">About Us</h4>

              <h2 className="section__title">CAR RENTAL</h2>
              <p className="section__description">
              Car bodies have come in many different types. In early days most cars were open, without a fixed top. Now, aside from convertibles, 
              most cars are closed. The most common styles include coupes and sedans. A coupe is a two-door car with a small back seat.
               A sedan usually has four doors and seats four to five people. Sedans with a lift-up rear door are called hatchbacks.
              </p>

            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="a">
              <img src={d} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
