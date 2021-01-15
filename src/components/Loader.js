import React, { useEffect, useState } from 'react';

const Loader = () => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const timeRef = setTimeout(() => {
            setDisplayText(
                'Either allow location services or search for a place'
            );
        }, 2500);
        return () => {
            clearTimeout(timeRef);
        };
    }, []);

    return (
        <div className="loader-container">
            <div className="loader"></div>
            <div>{displayText}</div>
        </div>
    );
};

export default Loader;
