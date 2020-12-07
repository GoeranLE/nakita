import React from 'react';
import '../../App.css';
import Card from 'react-bootstrap/Card';


export default function Description() {

  return (
    <div className="description">
      <p>----------</p>
      <Card fluid="sm" bg="transparent" style={{border:"0px"}}>
        <div>The Idea</div>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {" "}
              As parents looking for a Kita place, <br></br>you want to look for
              a free slot in a kindergarden near you! <br></br>As Kita you want
              to let the parents know that you have some free capacity!
              Na,Kita will bring both together! {" "}
            </p>
            <footer className="blockquote-footer">Na,Kita</footer>
          </blockquote>
        </Card.Body>
      </Card>
      <p>----------</p>
    </div>
  );
}