import React, { useState, useEffect } from "react";

const Navbar_2 = ({ backgroundColor, textColor, fontSize }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  const textClass = textColor ? `text-[${textColor}]` : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}]` : '';

  const [navbarText, setNavbarText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('navbar2Text'));
    return savedText ? savedText : {
      brand: 'PageCrafter',
      firstLink: 'First Link',
      secondLink: 'Second Link',
      thirdLink: 'Third Link',
      fourthLink: 'Fourth Link',
    };
  });

  const [editingKey, setEditingKey] = useState(null); // Track which text is being edited
  const [inputValue, setInputValue] = useState(''); // Track the value of the input while editing

  // Load text from local storage when the component mounts
  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('navbar2Text'));
    if (savedText) {
      setNavbarText(savedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('navbar2Text', JSON.stringify(navbarText));
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
    <>
      <header className={`body-font ${backgroundClass} ${textClass} ${fontSizeClass}`}>
        <div className={`container mx-auto flex flex-wrap p-3 flex-row items-center justify-between w-full ${backgroundClass} ${textClass} ${fontSizeClass}`}>
          <span className={`flex font-bold items-center ${textClass} ${fontSizeClass}`}>
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
              <span
                className="ml-3 text-xl"
                onDoubleClick={() => handleDoubleClick('brand')}
              >
                {navbarText.brand}
              </span>
            )}
          </span>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
            <span className={`mr-5 ${textClass}`}>
              {editingKey === 'firstLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="w-[50%] p-2 text-black"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('firstLink')}>
                  {navbarText.firstLink}
                </span>
              )}
            </span>
            <span className={`mr-5 hover:text-gray-900`}>
              {editingKey === 'secondLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="w-[50%] p-2 text-black"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('secondLink')}>
                  {navbarText.secondLink}
                </span>
              )}
            </span>
            <span className={`mr-5 hover:text-gray-900`}>
              {editingKey === 'thirdLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="w-[50%] p-2 text-black"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('thirdLink')}>
                  {navbarText.thirdLink}
                </span>
              )}
            </span>
            <span className={`mr-5 hover:text-gray-900`}>
              {editingKey === 'fourthLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="w-[50%] p-2 text-black"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('fourthLink')}>
                  {navbarText.fourthLink}
                </span>
              )}
            </span>
          </nav>
          <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-black rounded text-base md:mt-0">
            Get Started
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar_2;
