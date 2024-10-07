import React, { useState, useEffect } from 'react';

const Form3 = () => {
  const [formText, setFormText] = useState(() => {
    const savedFormText = JSON.parse(localStorage.getItem('editableFormText'));
    return savedFormText || {
      formTitle: 'Master Cleanse Reliac Heirloom',
      description:
        "Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.",
      fullNameLabel: 'Full Name',
      emailLabel: 'Email',
      buttonText: 'Button',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load form text from localStorage
  useEffect(() => {
    const savedFormText = JSON.parse(localStorage.getItem('editableFormText'));
    if (savedFormText) {
      setFormText(savedFormText);
    }
  }, []);

  // Save form text to localStorage
  useEffect(() => {
    localStorage.setItem('editableFormText', JSON.stringify(formText));
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
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
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
              onDoubleClick={() => handleDoubleClick('formTitle')}
            >
              {formText.formTitle}
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
              className="w-full mb-5 p-2 border border-gray-300 rounded"
            />
          ) : (
            <p
              className="lg:w-2/3 mx-auto leading-relaxed text-base"
              onDoubleClick={() => handleDoubleClick('description')}
            >
              {formText.description}
            </p>
          )}
        </div>

        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            {/* Editable Full Name Label */}
            {editingKey === 'fullNameLabel' ? (
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
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
                onDoubleClick={() => handleDoubleClick('fullNameLabel')}
              >
                {formText.fullNameLabel}
              </label>
            )}
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative flex-grow w-full">
            {/* Editable Email Label */}
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
                className="leading-7 text-sm text-gray-600"
                onDoubleClick={() => handleDoubleClick('emailLabel')}
              >
                {formText.emailLabel}
              </label>
            )}
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {/* Editable Button Text */}
          {editingKey === 'buttonText' ? (
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
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onDoubleClick={() => handleDoubleClick('buttonText')}
            >
              {formText.buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Form3;
