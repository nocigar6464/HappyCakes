import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import houseImage from "../assets/images/house.png";
import phoneImage from "../assets/images/phone.png";
import cakeImage from "../assets/images/birthday-cake.png";

const Navigation = () => {
  return (
    <section>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#ef0078",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
        }}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <img src={houseImage} alt="House" width="16" height="16" />
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <img src={phoneImage} alt="Phone" width="16" height="16" />
              <Nav.Link as={Link} to="/contacto">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand as={Link} to="/">
            Happy Cake
          </Navbar.Brand>
          <img src={cakeImage} alt="Cake" width="16" height="16" />
        </Container>
      </Navbar>
    </section>
  );
};

export default Navigation;
