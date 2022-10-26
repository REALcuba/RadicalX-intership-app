import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//style
import "./interships_details.css";
import chart from "../../assets/svg/chart.svg"

function IntershipsDetails() {
  return (
    <div className="interships_container">
        <img src={chart} alt="" />
      {/* <Row className="rowOne">
        <Col xs={5}>Intership Title</Col>
        <Col xs={4}>Completion Period</Col>
        <Col xs={4}>Total Enrroled</Col>
        <Col xs={4}>Qualified Candidates</Col>
      </Row> */}
      {/* <Row className="rowTwo">
        <Col xs={6}></Col>
      </Row>
      <Row>
        <Col xs={6}></Col>
      </Row>
      <Row>
        <Col xs={6}></Col>
      </Row> */}
    </div>
  );
}
export default IntershipsDetails;
