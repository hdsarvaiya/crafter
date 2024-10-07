import React, { useState, useEffect } from 'react';

const Navbar_3 = ({ backgroundColor, textColor, fontSize }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  const textClass = textColor ? `text-[${textColor}]` : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}]` : '';

  const [navbarText, setNavbarText] = useState(() => {
    const savedText = localStorage.getItem('navbarText_3');
    return savedText ? JSON.parse(savedText) : {
      brand: 'MyWebsite',
      home: 'Home',
      about: 'About',
      services: 'Services',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    localStorage.setItem('navbarText_3', JSON.stringify(navbarText));
  }, [navbarText]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(navbarText[key]);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    setNavbarText((prev) => ({ ...prev, [editingKey]: inputValue }));
    setEditingKey(null);
  };

  // Handle "Enter" key press to save
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <nav className={`border-gray-200 flex flex-row ${backgroundClass}`}>
      <div className="w-full flex-row flex items-center justify-between mx-auto p-2">
        <span className="flex items-center space-x-3 rtl:space-x-reverse">
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
              className={`self-center font-bold whitespace-nowrap ${textClass} ${fontSizeClass}`}
              onDoubleClick={() => handleDoubleClick('brand')}
            >
              {navbarText.brand}
            </span>
          )}
        </span>
        <div className="flex md:order-2">
          <div className="flex items-center justify-between relative">
            <input
              type="text"
              className="block w-full p-3 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className={`items-center justify-center pr-3 w-full flex order-1`}>
          <ul className="flex p-2 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse">
            <li>
              {editingKey === 'home' ? (
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
                  className={`block py-2 px-3 rounded ${textClass} ${fontSizeClass}`}
                  onDoubleClick={() => handleDoubleClick('home')}
                >
                  {navbarText.home}
                </span>
              )}
            </li>
            <li>
              {editingKey === 'about' ? (
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
                  className={`block py-2 px-3 rounded ${textClass} ${fontSizeClass}`}
                  onDoubleClick={() => handleDoubleClick('about')}
                >
                  {navbarText.about}
                </span>
              )}
            </li>
            <li>
              {editingKey === 'services' ? (
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
                  className={`block py-2 px-3 rounded ${textClass} ${fontSizeClass}`}
                  onDoubleClick={() => handleDoubleClick('services')}
                >
                  {navbarText.services}
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar_3;
