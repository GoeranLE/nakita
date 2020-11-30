import React from 'react';
import '../../App.css';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Searchbar() {
  return (
    <Container fluid>
    <Row className="justify-content-center">
    <Col className="col-md-6">
    <Form>
        <FormControl size="sm" className="mb-2 mr-sm-2" type="text" placeholder="Enter your PLZ" />
        <Button variant="primary">Submit</Button>
      </Form>
    </Col>
  </Row>
  </Container>
  );
}