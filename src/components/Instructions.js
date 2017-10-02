import React from 'react';

const content = `This is a demonstration of Conway's Game of Life. A random board is generated. Hit reset
                 to generate a new random board. Hit start begin the simulation. Every half a second the 
                 board updates. Hit end to pause the simulation. The dark red color is dead, the blue color is alive.
                 Made by Christian Hansen.`;

const pStyle = {
    fontFamily: "Arial",
    fontSize: "20px",
    letterSpacing: "2px",
    textAlign: "left",
    width: "700px",
};

const Instructions = () => (
    <p style={pStyle}>{content}</p>
);

export default Instructions;