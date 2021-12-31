import React, { useState } from "react";
import {
  Alert,
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup
} from "react-bootstrap";
import { knapsack } from "../hooks/knapsack";
import { tollType, vehicleInput } from "../hooks/vehiclesWeight";

const VehicleInput = ({ setStatus, setMaxToll, setTotalVehicle, setRemaining }) => {
  const [show, setShow] = useState(false);
  const [vehicle, setVehicle] = useState();
  const [weight, setWeight] = useState(0);
  const [maxCapacity, setMaxCapacity] = useState(0);
  const handleSelect = (e) => {
    setVehicle(e);
  };
  const handleCapacity = (e) => {
    setMaxCapacity(parseInt(e.target.value));
  };
  const weightSelect = (e) => {
    if (e.target.value === "") {
      return;
    }
    if (isNaN(parseFloat(e.target.value))) {
      setShow(true);
    } else {
      setShow(false);
      setWeight(parseFloat(e.target.value));
    }
  };

  const handleSubmit = (e) => {
    let totalWeight = 0;
    const toll = tollType.find((e) => e.type === vehicle);
    const newob = {
      w: weight,
      v: toll.toll,
    };
    vehicleInput.push(newob);
    setStatus(true);
    setTimeout(() => {
      const onBridge = knapsack(vehicleInput, maxCapacity);
      setMaxToll(onBridge.maxToll);
      setTotalVehicle(onBridge.selectedVehicle.length);
      console.log(onBridge);
      onBridge.selectedVehicle.map(v => totalWeight = totalWeight + v.w);
      console.log(totalWeight);
      setRemaining(maxCapacity - totalWeight);
      if(totalWeight === 0 || totalWeight < maxCapacity)
      {
        setStatus(true);
        console.log("true");
      }
      else{
        setStatus(false);
        console.log("false");
      }
    }, 2000);
    console.log(vehicleInput);
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-5 text-white" controlId="maxCapacity">
        <Form.Label>Enter maximum capacity of the bridge</Form.Label>
        <Form.Control
          type="text"
          placeholder="Maximum capacity"
          onChange={handleCapacity}
          required
        />
      </Form.Group>
      <InputGroup className="mb-3 bg-white">
        <DropdownButton
          variant="outline-secondary"
          title={vehicle || "Select vehicle type"}
          id="input-group-dropdown-1"
          onSelect={handleSelect}
          name="vehicleDropDown"
          required
        >
          {tollType.map((t) => (
            <Dropdown.Item key={t.type} eventKey={t.type} title={t.type}>
              {t.type}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <FormControl onBlur={weightSelect} required />
      </InputGroup>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Your inputed weight must be a number. Not a alphabet or combination
            of alphabet and number
          </p>
        </Alert>
      )}
      <input type="submit" value="Submit" className="submit_btn" />
    </Form>
  );
};

export default VehicleInput;
