import React, { useState, useEffect } from "react";

const Navbar_4 = ({ backgroundColor, textColor, fontSize }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  const textClass = textColor ? `text-[${textColor}]` : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}]` : '';

  const [navbarText, setNavbarText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('navbar4Text'));
    return savedText ? savedText : {
      brand: 'Tailblocks',
      firstLink: 'First Link',
      secondLink: 'Second Link',
      thirdLink: 'Third Link',
      fourthLink: 'Fourth Link',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('navbar4Text'));
    if (savedText) {
      setNavbarText(savedText);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('navbar4Text', JSON.stringify(navbarText));
  }, [navbarText]);

  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(navbarText[key]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    setNavbarText((prev) => ({ ...prev, [editingKey]: inputValue }));
    setEditingKey(null);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <>
      <header className={` ${backgroundClass} ${textClass} ${fontSizeClass}`}>
        <div className={`"container mx-auto flex flex-wrap  items-center border-b-2 border-gray-200"${backgroundClass} ${textClass} ${fontSizeClass}`}>


          {/* Nav Links Section */}
          <nav className={`"md:ml-auto flex flex-wrap items-center gap-3 justify-center"${backgroundClass} ${textClass} ${fontSizeClass}`}>
            <span className=" hover:text-gray-900 transition-all duration-300">
              {editingKey === 'firstLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="border-b-2 border-indigo-500 focus:outline-none"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('firstLink')}>
                  {navbarText.firstLink}
                </span>
              )}
            </span>
            <span className=" hover:text-gray-900 transition-all duration-300">
              {editingKey === 'secondLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="border-b-2 border-indigo-500 focus:outline-none"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('secondLink')}>
                  {navbarText.secondLink}
                </span>
              )}
            </span>
            <span className="  transition-all duration-300">
              {editingKey === 'thirdLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="border-b-2 border-indigo-500 focus:outline-none"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('thirdLink')}>
                  {navbarText.thirdLink}
                </span>
              )}
            </span>
            <span className="hover:text-gray-900 transition-all duration-300">
              {editingKey === 'fourthLink' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="border-b-2 border-indigo-500 focus:outline-none"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('fourthLink')}>
                  {navbarText.fourthLink}
                </span>
              )}
            </span>
          </nav>

                    {/* Branding Section */}
                    <span className="flex items-center title-font font-medium  p-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 ">
              {editingKey === 'brand' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="border-b-2 border-indigo-500 focus:outline-none"
                />
              ) : (
                <span onDoubleClick={() => handleDoubleClick('brand')}>
                  {navbarText.brand}
                </span>
              )}
            </span>
          </span>

          {/* Button Section */}
          <button className="ml-auto inline-flex items-center bg-indigo-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-lg transition-all duration-300">
            Button
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

export default Navbar_4;
