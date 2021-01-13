const degreeToDirection = (degree) => {
    const num = Math.floor(degree / 22.5 + 0.5);
    const directions = [
        'N',
        'NNE',
        'NE',
        'ENE',
        'E',
        'ESE',
        'SE',
        'SSE',
        'S',
        'SSW',
        'SW',
        'WSW',
        'W',
        'WNW',
        'NW',
        'NNW',
    ];
    return directions[num % 16];
};

export default degreeToDirection;
