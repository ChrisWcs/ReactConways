import React from 'react';
import PropTypes from 'prop-types';

const style = {
    fontFamily: "Arial",
    fontSize: "35px",
    letterSpacing: "3px",
    textAlign: "center"
};

const Title = ({title}) => (
    <h1 style={style} >{title}</h1>
);

Title.propTypes = {
    title: PropTypes.string
};

export default Title;