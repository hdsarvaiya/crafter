import React, { useState, useEffect } from 'react';

const TextComponent = ({ backgroundColor, textColor, fontSize }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  const textClass = textColor ? `text-[${textColor}]` : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}]` : '';

  const [textData, setTextData] = useState(() => {
    const savedTextData = JSON.parse(localStorage.getItem('textData')) || {
      title: 'Editable Title',
      description: 'This is an editable description.',
    };
    return savedTextData;
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Save text data to localStorage
  useEffect(() => {
    localStorage.setItem('textData', JSON.stringify(textData));
  }, [textData]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(textData[key]);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    if (editingKey) {
      setTextData((prev) => ({ ...prev, [editingKey]: inputValue }));
    }
    setEditingKey(null);
  };

  // Handle Enter key press to save the input value
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className={`p-4 ${backgroundClass} ${textClass} ${fontSizeClass}`}>
      {/* Editable Title */}
      {editingKey === 'title' ? (
        <input
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleSave}
          onKeyPress={handleKeyPress}
          autoFocus
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
      ) : (
        <h1
          className={`mb-2 font-medium ${textClass}`}
          onDoubleClick={() => handleDoubleClick('title')}
        >
          {textData.title}
        </h1>
      )}

      {/* Editable Description */}
      {editingKey === 'description' ? (
        <textarea
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleSave}
          onKeyPress={handleKeyPress}
          autoFocus
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
      ) : (
        <p
          className={`mb-2 ${textClass}`}
          onDoubleClick={() => handleDoubleClick('description')}
        >
          {textData.description}
        </p>
      )}
    </div>
  );
};

export default TextComponent;
