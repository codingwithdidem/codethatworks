import React from 'react';

const Button = ({ children }) => {
  return (
    <button className="bg-purple-800 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
};

export default Button;
