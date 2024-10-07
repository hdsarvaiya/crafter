import React, { useState, useEffect } from 'react';

const Template5 = () => {
  // Load saved content from localStorage
  const [content, setContent] = useState(() => {
    const savedContent = localStorage.getItem('movieTemplateContent');
    return savedContent ? JSON.parse(savedContent) : {
      brand: 'VMOvies',
      heroTitle: 'Welcome to StreamFlix',
      heroDescription: 'Watch the latest movies and TV shows.',
      movies: [
        { title: "Inception", year: "2010", img: ".." },
        { title: "The Dark Knight", year: "2008", img: ".." },
        { title: "The Matrix", year: "1999", img: ".." },
        { title: "Interstellar", year: "2014", img: ".." },
        { title: "Avengers: Endgame", year: "2019", img: ".." },
        { title: "The Lion King", year: "1994", img: ".." },
        { title: "Forrest Gump", year: "1994", img: ".." },
        { title: "The Shawshank Redemption", year: "1994", img: "https://resizing.flixster.com/tdMXmsVnR-vIj4Q5IACpEZ7O1ak=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15987_v_h8_au.jpg" }
      ],
      categories: ['Action', 'Comedy', 'Drama', 'Horror', 'Romance', 'Sci-Fi'],
      footerText: 'StreamFlix © 2024',
      nav: ['Home', 'Products', 'Deals', 'Support', 'Contact']
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Save content to localStorage when content state changes
    localStorage.setItem('movieTemplateContent', JSON.stringify(content));
  }, [content]);

  // Handle input change
  const handleInputChange = (e) => setInputValue(e.target.value);

  // Save the edited value
  const handleSave = () => {
    if (editingKey.includes('movies')) {
      const index = parseInt(editingKey.split('.')[1]);
      const updatedMovies = [...content.movies];
      updatedMovies[index].title = inputValue;
      setContent((prev) => ({ ...prev, movies: updatedMovies }));
    } else if (editingKey.includes('categories')) {
      const index = parseInt(editingKey.split('.')[1]);
      const updatedCategories = [...content.categories];
      updatedCategories[index] = inputValue;
      setContent((prev) => ({ ...prev, categories: updatedCategories }));
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

  const handleDoubleClick = (key) => {
    setEditingKey(key);
    const value = key.includes('movies')
      ? content.movies[parseInt(key.split('.')[1])].title
      : key.includes('categories')
        ? content.categories[parseInt(key.split('.')[1])]
        : content[key];
    setInputValue(value);
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <div className="text-3xl font-bold text-blue-600">
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
          <nav className="space-x-6">
            {content.nav.map((item, index) => (
              <span
                key={index}
                onDoubleClick={() => handleDoubleClick(`nav.${index}`)}
                className="hover:text-blue-600 cursor-pointer"
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
                  content.nav[index]
                )}
              </span>
            ))}
          </nav>
          <div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">Sign In</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1710962537846-dca5c74f5c6c?w=500&auto=format&fit=crop&q=60')` }}>
          <div className="bg-opacity-60 p-8 rounded-lg text-center">
            {editingKey === 'heroTitle' ? (
              <input
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleSave}
                autoFocus
                className="text-5xl font-bold w-full text-center"
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              />
            ) : (
              <h1 onDoubleClick={() => handleDoubleClick('heroTitle')} className="text-5xl font-bold mb-4">
                {content.heroTitle}
              </h1>
            )}
            {editingKey === 'heroDescription' ? (
              <input
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleSave}
                autoFocus
                className="text-lg w-full text-center"
                onKeyDown={(e) => e.key === 'Enter' && handleSave()}
              />
            ) : (
              <p onDoubleClick={() => handleDoubleClick('heroDescription')} className="text-lg mb-6">
                {content.heroDescription}
              </p>
            )}
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">Watch Now</button>
          </div>
        </div>
      </section>

      {/* Trending Movies Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Trending Movies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {content.movies.map((movie, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={movie.img} alt={movie.title} className="w-full h-40 object-cover rounded-t-lg" />
                <div className="p-4">
                  {editingKey === `movies.${index}` ? (
                    <input
                      value={inputValue}
                      onChange={handleInputChange}
                      onBlur={handleSave}
                      autoFocus
                      className="w-full text-black p-2"
                      onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    />
                  ) : (
                    <h3 onDoubleClick={() => handleDoubleClick(`movies.${index}`)} className="text-xl font-semibold mb-2">
                      {movie.title}
                    </h3>
                  )}
                  <p className="text-gray-700 mb-2">{movie.year}</p>
                  <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300">Watch Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
            {content.categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
                {editingKey === `categories.${index}` ? (
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    autoFocus
                    className="w-full text-black p-2"
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                  />
                ) : (
                  <span onDoubleClick={() => handleDoubleClick(`categories.${index}`)} className="text-lg font-semibold">
                    {category}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-gray-800 text-gray-100 text-center">
        {editingKey === 'footerText' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            autoFocus
            className="text-center w-full"
            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          />
        ) : (
          <p onDoubleClick={() => handleDoubleClick('footerText')}>{content.footerText}</p>
        )}
      </footer>
    </div>
  );
};

export default Template5;
