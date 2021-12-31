import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BridgeDetails from "../components/BridgeDetails";
import BridgeStatus from "../components/BridgeStatus";
import VehicleInput from "../components/VehicleInput";


const Home = () => {
  const [status, setStatus] = useState("warning");
  const [maxToll, setMaxToll] = useState(0);
  const [totalVehicle, setTotalVehicle] = useState(0);
  const [remaining, setRemaining] = useState(0);
  return (
    <Container className="mt-5">
      <h1 variant="success" className="text-center">
        Bridge capacity maintaining
      </h1>
      <BridgeStatus status={status} />
      <Row>
          <Col><VehicleInput setStatus={setStatus} setMaxToll={setMaxToll} setTotalVehicle={setTotalVehicle} setRemaining={setRemaining} /></Col>
          <Col><BridgeDetails  maxToll={maxToll} totalVehicle={totalVehicle} remaining={remaining} /></Col>
      </Row>
    </Container>
  );
};

export default Home;
