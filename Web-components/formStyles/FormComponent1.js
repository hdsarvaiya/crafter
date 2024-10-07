import React, { useState, useEffect } from 'react';

const FormComponent1 = ({ backgroundColor, textColor, fontSize }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  const textClass = textColor ? `text-[${textColor}]` : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}]` : '';

  const [formText, setFormText] = useState(() => {
    const savedFormText = JSON.parse(localStorage.getItem('formText'));
    return savedFormText || {
      formTitle: 'Form',
      description: 'This is a template made by PageCrafter',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submitButton: 'Submit',
      footer: 'Made with love by PageCrafter',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load form text from localStorage
  useEffect(() => {
    const savedFormText = JSON.parse(localStorage.getItem('formText'));
    if (savedFormText) {
      setFormText(savedFormText);
    }
  }, []);

  // Save form text to localStorage
  useEffect(() => {
    localStorage.setItem('formText', JSON.stringify(formText));
  }, [formText]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(formText[key]);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    setFormText((prev) => ({ ...prev, [editingKey]: inputValue }));
    setEditingKey(null);
  };

  // Handle Enter key press to save the input value
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <div className={`w-full p-8 ${backgroundClass} ${textClass} ${fontSizeClass}`}>
      <div className={`lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:mt-0 ${backgroundClass} ${textClass} ${fontSizeClass}`}>
        {/* Editable Form Title */}
        {editingKey === 'formTitle' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="w-full mb-1 p-2 border border-gray-300 rounded"
          />
        ) : (
          <h2
            className={`mb-1 font-medium ${textClass}`}
            onDoubleClick={() => handleDoubleClick('formTitle')}
          >
            {formText.formTitle}
          </h2>
        )}

        {/* Editable Description */}
        {editingKey === 'description' ? (
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="w-full mb-5 p-2 border border-gray-300 rounded"
          />
        ) : (
          <p
            className={`leading-relaxed mb-5 ${textClass} ${fontSizeClass}`}
            onDoubleClick={() => handleDoubleClick('description')}
          >
            {formText.description}
          </p>
        )}

        {/* Editable Name Label */}
        <div className="relative mb-4">
          {editingKey === 'nameLabel' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className="w-full mb-1 p-2 border border-gray-300 rounded"
            />
          ) : (
            <label
              htmlFor="name"
              className={`leading-7 ${textClass}`}
              onDoubleClick={() => handleDoubleClick('nameLabel')}
            >
              {formText.nameLabel}
            </label>
          )}
          <input
            type="text"
            id="name"
            name="name"
            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${textClass}`}
          />
        </div>

        {/* Editable Email Label */}
        <div className="relative mb-4">
          {editingKey === 'emailLabel' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className="w-full mb-1 p-2 border border-gray-300 rounded"
            />
          ) : (
            <label
              htmlFor="email"
              className={`leading-7 ${textClass}`}
              onDoubleClick={() => handleDoubleClick('emailLabel')}
            >
              {formText.emailLabel}
            </label>
          )}
          <input
            type="email"
            id="email"
            name="email"
            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${textClass}`}
          />
        </div>

        {/* Editable Message Label */}
        <div className="relative mb-4">
          {editingKey === 'messageLabel' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className="w-full mb-1 p-2 border border-gray-300 rounded"
            />
          ) : (
            <label
              htmlFor="message"
              className={`leading-7 ${textClass}`}
              onDoubleClick={() => handleDoubleClick('messageLabel')}
            >
              {formText.messageLabel}
            </label>
          )}
          <textarea
            id="message"
            name="message"
            className={`w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out ${textClass}`}
          />
        </div>

        {/* Editable Submit Button */}
        {editingKey === 'submitButton' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="w-full mb-1 p-2 border border-gray-300 rounded"
          />
        ) : (
          <button
            className={`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded ${textClass}`}
            onDoubleClick={() => handleDoubleClick('submitButton')}
          >
            {formText.submitButton}
          </button>
        )}

        {/* Editable Footer */}
        {editingKey === 'footer' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="w-full mt-3 p-2 border border-gray-300 rounded"
          />
        ) : (
          <p
            className={`text-xs text-gray-500 mt-3 ${textClass}`}
            onDoubleClick={() => handleDoubleClick('footer')}
          >
            {formText.footer}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormComponent1;
