import React from 'react';
import { Badge } from 'react-bootstrap';

const BridgeDetails = ({ maxToll, totalVehicle, remaining}) => {
    return (
        <div className='text-center border border-primary border-4 p-4 text-white'>
            <span className='bridge_details'>Total toll: <Badge pill bg="secondary">{maxToll}</Badge></span> <br />
            <span className='bridge_details'>Total number of vehicle on bridge: <Badge pill bg="secondary">{totalVehicle}</Badge><br />
            Remaining weight: <Badge pill bg="secondary">{remaining}</Badge></span>
        </div>
    );
};

export default BridgeDetails;