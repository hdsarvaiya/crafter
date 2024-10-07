import React, { useState } from 'react';

const EditText = ({ text, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (currentText !== text) {
      onUpdate(currentText);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
          onBlur={handleBlur} // Stop editing on blur
          autoFocus // Focus on input when editing starts
        />
      ) : (
        <span onDoubleClick={handleDoubleClick}>{text}</span> // Enable editing on double-click
      )}
    </div>
  );
};

export default EditText;


