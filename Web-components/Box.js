// Box.js
import React from 'react';

const Box = ({ width, height, borderWidth, borderColor, borderStyle, borderRadius, backgroundColor, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: width || '100%',
        height: height || '100px',
        backgroundColor: backgroundColor || 'transparent',
        borderWidth: borderWidth || '0px',
        borderStyle: borderStyle || 'solid',
        borderColor: borderColor || '#000',
        borderRadius: borderRadius || '0px',
        boxSizing: 'border-box',
      }}
    ></div>
  );
};

export default Box;
