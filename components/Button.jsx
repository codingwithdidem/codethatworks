import React from 'react';

const Button = ({ type, onClick, classes, children }) => {
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
