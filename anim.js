const AXIS_CONFIGS_INDEX = {
    x: {
        label: 'X Axis',
        min: 0,
        max: 100,
        tickInterval: 10,
        gridLines: true
    },
    y: {
        label: 'Y Axis',
        min: 0,
        max: 100,
        tickInterval: 10,
        gridLines: true
    },
    z: {
        label: 'Z Axis',
        min: 0,
        max: 100,
        tickInterval: 20,
        gridLines: false
    }
};

// Example of accessing the configuration for the X axis
console.log(AXIS_CONFIGS_INDEX.x);
