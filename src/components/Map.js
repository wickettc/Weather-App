import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '400px',
    height: '400px',
};

function Map({ lat, lon }) {
    const center = {
        lat,
        lng: lon,
    };

    return (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
            <Marker position={center} />
        </GoogleMap>
    );
}

export default React.memo(Map);
