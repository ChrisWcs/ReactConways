import React from 'react';
import PropTypes from 'prop-types';

const style = {
    width: 25,
    height: 25,
    border: "solid 1px black",
};

const aStyle = {
    background: "#00BCD4"
};

const dStyle = {
    background: "#B71C1C"
};

const Pixel = ({status}) => (
    <div style={{
            ...style,
            ...(status ? aStyle : dStyle),
            }}
    />        
);

Pixel.propTypes = {
    status: PropTypes.bool
};

export default Pixel;