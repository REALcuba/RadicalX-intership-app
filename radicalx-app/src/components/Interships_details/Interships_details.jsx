import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//style
import "./interships_details.css"

function IntershipsDetails() {
  return (
    <Container fluid className="interships_container">
      <Row className="rowOne">
        <Col xs={4}>Intership Title</Col>
        <Col xs={4}>2 of 2</Col>
        <Col xs={4}>3 of 3</Col>
        <Col xs={4}>4 of 4</Col>
        <Col xs={4}>5 of 5</Col>
      </Row>
      <Row className="rowTwo">
        <Col xs={6}>Completion Period</Col>
      </Row>
      <Row>
        <Col xs={6}>Total Enrroled</Col>
      </Row>
      <Row>
        <Col xs={6}>Qualified Candidates</Col>
      </Row>
    </Container>
  );
}
export default IntershipsDetails;
