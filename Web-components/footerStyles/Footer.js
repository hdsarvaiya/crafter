import React, { useState, useEffect } from 'react';

const Footer = ({ backgroundColor, textColor, fontSize }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  const textClass = textColor ? `text-[${textColor}]` : '';
  const fontSizeClass = fontSize ? `text-[${fontSize}]` : '';

  const [footerText, setFooterText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('FooterText'));
    return savedText || {
      about: 'About Us',
      aboutDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
      contact: 'Contact',
      email: 'Email: info@example.com',
      phone: 'Phone: +123 456 7890',
      followUs: 'Follow Us',
      facebook: 'Facebook',
      twitter: 'Twitter',
      instagram: 'Instagram',
      copyright: '&copy; 2024 Your Company. All rights reserved.',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load text from local storage when the component mounts
  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('FooterText'));
    if (savedText) {
      setFooterText(savedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('FooterText', JSON.stringify(footerText));
  }, [footerText]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(footerText[key]); // Set the current value of the input field
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    if (inputValue.trim() !== '') {
      setFooterText((prev) => ({ ...prev, [editingKey]: inputValue }));
      setEditingKey(null); // Exit editing mode
    }
  };

  // Handle Enter key press to save the input value
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <footer className={`py-10 px-5 font-sans ${backgroundClass} ${textClass} ${fontSizeClass}`}>
      <div className="flex flex-wrap justify-between">
        <div className="flex-1 min-w-[200px] mr-5">
          {editingKey === 'about' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className={`mb-4 ${textClass}`}
              style={{ fontSize: fontSize }}
            />
          ) : (
            <h4 className="mb-4" style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('about')}>
              {footerText.about}
            </h4>
          )}
          {editingKey === 'aboutDescription' ? (
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className={`leading-relaxed mb-4 ${textClass}`}
              style={{ fontSize: fontSize }}
            />
          ) : (
            <p className="leading-relaxed" style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('aboutDescription')}>
              {footerText.aboutDescription}
            </p>
          )}
        </div>
        <div className="flex-1 min-w-[200px] mr-5">
          {editingKey === 'contact' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className={`mb-4 ${textClass}`}
              style={{ fontSize: fontSize }}
            />
          ) : (
            <h4 className="mb-4" style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('contact')}>
              {footerText.contact}
            </h4>
          )}
          {editingKey === 'email' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              style={{ fontSize: fontSize }}
              className="border p-2 mb-2"
            />
          ) : (
            <p style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('email')}>
              {footerText.email}
            </p>
          )}
          {editingKey === 'phone' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              style={{ fontSize: fontSize }}
              className="border p-2 mb-2"
            />
          ) : (
            <p style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('phone')}>
              {footerText.phone}
            </p>
          )}

        </div>
        
        
        
        
        <div className="flex flex-col min-w-[200px]">
          {editingKey === 'followUs' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              className={`mb-4 ${textClass}`}
              style={{ fontSize: fontSize }}
            />
          ) : (
            <h4 className="mb-4" style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('followUs')}>
              {footerText.followUs}
            </h4>
          )}
          <ul className="list-none flex items-center gap-2 p-0">
          {editingKey === 'facebook' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              style={{ fontSize: fontSize }}
              className="border p-2 mb-2"
            />
          ) : (
            <span style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('facebook')}>
              {footerText.facebook}
            </span>
          )}
          {editingKey === 'twitter' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              style={{ fontSize: fontSize }}
              className="border p-2 mb-2"
            />
          ) : (
            <span style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('twitter')}>
              {footerText.twitter}
            </span>
          )}
          {editingKey === 'instagram' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              onKeyPress={handleKeyPress}
              autoFocus
              style={{ fontSize: fontSize }}
              className="border p-2 mb-2"
            />
          ) : (
            <span style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('instagram')}>
              {footerText.instagram}
            </span>
          )}
          </ul>
        </div>
      </div>
      <div className="text-center pt-5 mt-5 border-t border-gray-700">
        {editingKey === 'copyright' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            style={{ fontSize: fontSize }}
          />
        ) : (
          <p style={{ fontSize: fontSize }} onDoubleClick={() => handleDoubleClick('copyright')}>
            {footerText.copyright}
          </p>
        )}
      </div>
    </footer>
  );
};

export default Footer;
