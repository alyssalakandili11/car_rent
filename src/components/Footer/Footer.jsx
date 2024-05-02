
import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
    
    
  },

  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">


      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
        
                  <span>
              <br /> CAR RENTAL
                  </span>
                </Link>
              </h1>
            </div>


            <p className="footer__logo-content">
              Car bodies have come in many different types. In early days most cars were open, without a fixed top. Now, 
              aside from convertibles, most cars are closed. The most common styles include coupes and sedans. 
              A coupe is a two-door car with a small back seat.A sedan usually has four doors and seats four to five people. 
              Sedans with a lift-up rear door are called hatchbacks.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              
              <p className="office__info">Lyceum of Subic Bay</p>
              <p className="office__info">Phone: 0943432746</p>
              <p className="office__info">Email: Ashley@lsb.com</p>

            </div>
          </Col>


        


        
        
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
