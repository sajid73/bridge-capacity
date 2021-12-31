import React from 'react';

const BridgeDetails = ({ maxToll, totalVehicle}) => {
    return (
        <div>
            Total toll: {maxToll} <br />
            Total number of vehicle on bridge: {totalVehicle}
        </div>
    );
};

export default BridgeDetails;