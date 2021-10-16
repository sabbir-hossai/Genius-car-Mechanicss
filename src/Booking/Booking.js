import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { bookingId } = useParams();
    return (
        <div>
            <h1>this is booking :{bookingId}</h1>
        </div>
    );
};

export default Booking;