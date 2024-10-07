import React, { useState, useEffect } from 'react';

const Template4 = () => {
  // State for managing editable content
  const [content, setContent] = useState(() => {
    // Load saved content from localStorage
    const savedContent = localStorage.getItem('shopEasyTemplateContent');
    return savedContent ? JSON.parse(savedContent) : {
      brand: 'ShopEasy',
      heroTitle: 'Welcome to ShopEasy',
      heroDescription: 'Your one-stop shop for everything you need!',
      categories: ['Electronics', 'Fashion', 'Home & Kitchen', 'Sports'],
      featuredProducts: [
        { title: 'Gaming Laptop', price: '$1,299.99', imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/home/Galaxy-Book4_330x330.jpg?$330_330_JPG$' },
        { title: 'Smartphone', price: '$799.99', imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/home/Small-Tile_330x330-B6-Blue-2.png?$330_330_PNG$' },
        { title: 'Wireless Headphones', price: '$199.99', imageUrl: 'https://images.samsung.com/is/image/samsung/assets/in/home/240905/Buds3_330X330.jpg?$330_330_JPG$' },
        { title: 'Smartwatch', price: '$249.99', imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch7-l315-sm-l315fzgains-thumb-542367168?$216_216_PNG$' }
      ],
      footerText: 'ShopEasy © 2024',
      nav: ['Home', 'Products', 'Deals', 'Support', 'Contact']
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    // Save content to localStorage when content state changes
    localStorage.setItem('shopEasyTemplateContent', JSON.stringify(content));
  }, [content]);

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value
  const handleSave = () => {
    if (editingKey.includes('categories')) {
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
    const value = key.includes('categories')
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
                  content.nav && content.nav[index] ? content.nav[index] : item
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
      <section className="bg-cover bg-center h-96 flex items-center justify-center" style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvcHBpbmclMjB3ZWJzaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D')` }}>
        <div className="bg-white bg-opacity-70 p-8 rounded-lg text-center">
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
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">Shop Now</button>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {content.categories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                {editingKey === `categories.${index}` ? (
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    autoFocus
                    className="text-xl font-semibold"
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                  />
                ) : (
                  <h3 onDoubleClick={() => handleDoubleClick(`categories.${index}`)} className="text-xl font-semibold">
                    {category}
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {content.featuredProducts.map((product, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <img src={product.imageUrl} alt={product.title} className="mb-4 w-full h-32  object-cover rounded-lg" />
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-blue-600 font-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto text-center">
          {editingKey === 'footerText' ? (
            <input
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleSave}
              autoFocus
              className="text-center w-full text-white"
              onKeyDown={(e) => e.key === 'Enter' && handleSave()}
            />
          ) : (
            <p onDoubleClick={() => handleDoubleClick('footerText')}>
              {content.footerText}
            </p>
          )}
        </div>
      </footer>
    </div>
  );
};

export default Template4;
