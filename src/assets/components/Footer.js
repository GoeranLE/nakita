import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Media
import brick from "../img/brick3.png";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col>
          <img
            src={brick}
            alt="mario brick layer"
            style={{ height: "35px", width: "100%" }}
          />
          <nav className="navbar-light bg-light" style={{ height: "0" }}>
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center text-dark"
                  href="https://github.com/GoeranLE/nakita"
                >
                  <span>
                    If you wanna take a glimpse under the hood of this project,
                    just click on the icon{" "}
                  </span>
                  <i className="fab fa-github fa-1x"></i>
                </a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}
