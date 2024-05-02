import React from "react";


import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      
      <AboutSection aboutClass="aboutPage" />



    </Helmet>
  );
};

export default About;
