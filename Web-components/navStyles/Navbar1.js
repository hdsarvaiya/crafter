import React, { useState, useEffect } from "react";

const Navbar1 = ({ backgroundColor, textColor, fontSize }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  const textClass = textColor ? `text-[${textColor}]` : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}]` : '';

  const [navbarText, setNavbarText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('navbar1Text'));
    return savedText
      ? savedText
      : {
          brand: 'PageCrafter',
          home: 'Home',
          about: 'About',
          services: 'Services',
          pricing: 'Pricing',
          contact: 'Contact',
        };
  });

  const [editingKey, setEditingKey] = useState(null); // Track which text is being edited
  const [inputValue, setInputValue] = useState(''); // Track the value of the input while editing

  // Load text from local storage when the component mounts
  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('navbar1Text'));
    if (savedText) {
      setNavbarText(savedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('navbar1Text', JSON.stringify(navbarText));
  }, [navbarText]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(navbarText[key]); // Set the current value of the input field
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    setNavbarText((prev) => ({ ...prev, [editingKey]: inputValue }));
    setEditingKey(null); // Exit editing mode
  };

  // Handle Enter key press to save the input value
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <nav className={`w-full ${backgroundClass}`}>
      <div className="container mx-auto flex items-center justify-between p-4">
        <span className={`font-bold ${textClass} ${fontSizeClass}`}>
          {editingKey === 'brand' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className="w-[50%] p-2 text-black"
            />
          ) : (
            <span onDoubleClick={() => handleDoubleClick('brand')}>
              {navbarText.brand}
            </span>
          )}
        </span>

        <div className="flex">
          <ul className="flex space-x-8">
            {Object.keys(navbarText).slice(1).map((key) => (
              <li key={key} className={`mr-5 hover:text-gray-900 ${textClass}`}>
                {editingKey === key ? (
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    onKeyPress={handleKeyPress}
                    autoFocus
                    className="w-[50%] p-2 text-black"
                  />
                ) : (
                  <span onDoubleClick={() => handleDoubleClick(key)}>
                    {navbarText[key]}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar1;
