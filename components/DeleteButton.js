// DeleteButton.js
import React from 'react';

const DeleteButton = ({ selectedComponentIndex, components, setComponents }) => {
  const handleDelete = () => {
    if (components && selectedComponentIndex !== null) {
      // Safely filter out the selected component
      const newComponents = components.filter((_, index) => index !== selectedComponentIndex);
      setComponents(newComponents);
    }
  };

  return (
    <button
      className="btn btn-danger"
      onClick={handleDelete}
      disabled={selectedComponentIndex === null}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
