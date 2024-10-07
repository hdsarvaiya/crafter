import React from 'react';
import axios from 'axios';

const SaveButton = ({ components }) => {
  const handleSave = async () => {
    try {
      await axios.post('http://localhost:5000/api/save-layout', { components });
      alert('Layout saved successfully!');
    } catch (error) {
      console.error('Error saving layout:', error);
      alert('Error saving layout');
    }
  };

  return (
    <button onClick={handleSave} style={{
        padding: '5px 10px',
        fontSize: '14px',
        border:'solid 1px',
        borderRadius: '4px',
        backgroundColor: '#282c34',
        borderColor:'white',
        color: '#fff',
      }}>
      Save Layout
    </button>
  );
};

export default SaveButton;
