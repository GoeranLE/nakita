import React from "react";
import "../../App.css";
import Card from "react-bootstrap/Card";

export default function Description() {
  return (
    <div className="description">
      <p>--------------</p>
      <Card fluid="sm" bg="transparent" style={{ border: "0px" }}>
        <div>The Idea</div>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              As fresh baked parents looking for a Kita place, <br></br> it can
              become a really tuff challenge especially in your near
              neighbourhood!
              <br></br>
              <br></br>It's hard to find a starting point!
              <br></br>TADA -- Trommelwirbel aka Drum Roll --<br></br> <br></br>{" "}
              Na,Kita will help out!
              <br></br> <br></br>
              Na,Kita will bring together what belongs together! Parents to the
              Kita and the other way round!{" "}
            </p>
            <footer className="blockquote-footer">Na,Kita</footer>
          </blockquote>
        </Card.Body>
      </Card>
      <p>--------------</p>
    </div>
  );
}
