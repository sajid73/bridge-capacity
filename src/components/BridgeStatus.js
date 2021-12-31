import React from 'react';
import { Badge } from 'react-bootstrap';

const BridgeStatus = ({status}) => {
    return (
        <div className='my-5 text-center'>
            <h3>Bridge Status: <Badge className="p-4 w-5" bg={status === "warning" ? "warning" : (status ? "success" : "danger")}>{status === "warning" ? `In queue` : (status ? "Processing" : "Full")}</Badge></h3>
        </div>
    );
};

export default BridgeStatus;