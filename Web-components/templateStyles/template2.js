import React, { useState, useEffect } from 'react';

const Template2 = () => {
  // State for managing editable content
  const [content, setContent] = useState(() => {
    // Load saved content from localStorage
    const savedContent = localStorage.getItem('gamingTemplateContent');
    return savedContent ? JSON.parse(savedContent) : {
      brand: 'GAMING HUB',
      heroTitle: 'Join the Battle!',
      heroDescription: 'Unleash your inner warrior and conquer new worlds.',
      featuredInfo: [
        { title: 'The Evolution of Gaming', text: 'From classic arcade games to modern immersive experiences, gaming has evolved into a multifaceted industry that attracts millions of players worldwide.' },
        { title: 'The Rise of Esports', text: 'Esports has transformed competitive gaming into a spectator sport, with professional leagues and tournaments offering substantial prizes and drawing large audiences.' },
        { title: 'Gaming Communities', text: 'Online gaming fosters vibrant communities, allowing players to connect, collaborate, and share their gaming experiences across various platforms and genres.' }
      ],
      footerText: 'GAMING HUB © 2024',
      nav: ['Home', 'Games', 'News', 'Community', 'Support']
    };
  });

  // State for handling editing mode
  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Save content to localStorage whenever it changes
  useEffect(() => {
    console.log('Saving content to localStorage:', content); // Debug log
    localStorage.setItem('gamingTemplateContent', JSON.stringify(content));
  }, [content]);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    if (editingKey.includes('featuredInfo')) {
      const index = parseInt(editingKey.split('.')[1]);
      const field = editingKey.split('.')[2];
      const updatedInfo = [...content.featuredInfo];
      updatedInfo[index][field] = inputValue;
      setContent((prev) => ({ ...prev, featuredInfo: updatedInfo }));
    } else if (editingKey.includes('nav')) {
      const index = parseInt(editingKey.split('.')[1]);
      const updatedNav = [...content.nav];
      updatedNav[index] = inputValue;
      setContent((prev) => ({ ...prev, nav: updatedNav }));
    } else {
      setContent((prev) => ({ ...prev, [editingKey]: inputValue }));
    }
    setEditingKey(null);
  };

  // Enable editing mode for a specific section
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    const value = key.includes('featuredInfo')
      ? content.featuredInfo[parseInt(key.split('.')[1])][key.split('.')[2]]
      : content[key];
    setInputValue(value);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="container mx-auto flex justify-between items-center px-4 py-4">
        <div className="text-3xl font-bold">
          {editingKey === 'brand' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              autoFocus
              className="w-[50%] text-black p-2"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Save on Enter key
            />
          ) : (
            <span onDoubleClick={() => handleDoubleClick('brand')}>{content.brand}</span>
          )}
        </div>
        <nav className="flex space-x-6">
          {content.nav.map((item, index) => (
            <span
              key={index}
              onDoubleClick={() => handleDoubleClick(`nav.${index}`)}
              className="hover:text-gray-200 cursor-pointer"
            >
              {editingKey === `nav.${index}` ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  autoFocus
                  className="w-[50%] text-black p-2"
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Save on Enter key
                />
              ) : (
                content.nav && content.nav[index] ? content.nav[index] : item
              )}
            </span>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-black text-white h-96 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=500&auto=format&fit=crop&crop=entropy')] bg-cover bg-center opacity-50"></div>
        <div className="relative z-10 text-center p-4">
          {/* Editable Hero Title */}
          {editingKey === 'heroTitle' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              autoFocus
              className="text-4xl bg-transparent text-white p-2 border-b border-white"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Save on Enter key
            />
          ) : (
            <h1 className="text-4xl cursor-pointer" onDoubleClick={() => handleDoubleClick('heroTitle')}>
              {content.heroTitle}
            </h1>
          )}

          {/* Editable Hero Description */}
          {editingKey === 'heroDescription' ? (
            <textarea
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              autoFocus
              className="mt-2 bg-transparent text-white p-2 border-b border-white"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Save on Enter key
            />
          ) : (
            <p className="mt-2 cursor-pointer" onDoubleClick={() => handleDoubleClick('heroDescription')}>
              {content.heroDescription}
            </p>
          )}
        </div>
      </section>

      {/* Featured Information Section */}
      <section className="container mx-auto px-4 py-10">
        {content.featuredInfo.map((info, index) => (
          <div key={index} className="mb-6">
            {/* Editable Title */}
            {editingKey === `featuredInfo.${index}.title` ? (
              <input
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleSave}
                autoFocus
                className="text-xl font-bold mb-2 p-2 border-b border-gray-300"
                onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Save on Enter key
              />
            ) : (
              <h2 className="text-xl font-bold mb-2 cursor-pointer" onDoubleClick={() => handleDoubleClick(`featuredInfo.${index}.title`)}>
                {info.title}
              </h2>
            )}

            {/* Editable Text */}
            {editingKey === `featuredInfo.${index}.text` ? (
              <textarea
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleSave}
                autoFocus
                className="mb-2 p-2 border border-gray-300"
                onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Save on Enter key
              />
            ) : (
              <p className="mb-2 cursor-pointer" onDoubleClick={() => handleDoubleClick(`featuredInfo.${index}.text`)}>
                {info.text}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <footer className="container mx-auto px-4 py-4">
        {editingKey === 'footerText' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            autoFocus
            className="w-full text-center p-2 border-b border-gray-300"
            onKeyDown={(e) => e.key === 'Enter' && handleSave()} // Save on Enter key
          />
        ) : (
          <p className="text-center cursor-pointer" onDoubleClick={() => handleDoubleClick('footerText')}>
            {content.footerText}
          </p>
        )}
      </footer>
    </div>
  );
};

export default Template2;
