import React from 'react';
import { Row, Col } from 'react-grid-system';

const Home = () => (
  <>
    <Row debug justify="center">
      <Col debug md={4}>primeira linha col 1</Col>
      <Col debug md={4}>primeira linha col 2</Col>
      <Col debug md={4}>primeira linha col 3</Col>
    </Row>
    <Row debug justify="center">
      <Col debug md={6}>primeira linha col 1</Col>
      <Col debug md={3}>primeira linha col 2</Col>
      <Col debug md={3}>primeira linha col 3</Col>
    </Row>
    <Row debug justify="center">
      <Col debug md={6}>primeira linha col 1</Col>
      <Col debug md={6}>primeira linha col 2</Col>
    </Row>
    <Row debug justify="center">
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
      <Col debug md={1} sm={2}>primeira linha col 1</Col>
    </Row>
  </>
);

export default Home;
