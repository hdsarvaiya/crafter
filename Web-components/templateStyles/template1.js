import React, { useState, useEffect } from 'react';
import { useEdit } from '@/components/EditProvider';

// Navbar Component
const Navbar = ({ backgroundClass, textClass }) => {
  const { handleTextEdit } = useEdit();

  const [TextEdit, setText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('TextEdit'));
    return savedText || {
      brand: 'Samsung',
      Home: 'Home',
      About: 'About',
      Services: 'Services',
      Pricing: 'Pricing',
      Contact: 'Contact',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load text from local storage when the component mounts
  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('TextEdit'));
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('TextEdit', JSON.stringify(TextEdit));
  }, [TextEdit]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(TextEdit[key]); // Set the current value of the input field
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    if (inputValue.trim() !== '') {
      setText((prev) => ({ ...prev, [editingKey]: inputValue }));
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
    <nav className={`shadow-lg ${backgroundClass}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {editingKey === 'brand' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="w-[50%] text-black p-2"
          />
        ) : (
          <span
            className={`no-underline font-bold ${textClass}`}
            aria-current="page"
            onDoubleClick={() => handleDoubleClick('brand')}
          >
            {TextEdit.brand}
          </span>
        )}
        <ul className="flex space-x-6">
          {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((key) => (
            <li key={key} className={`hover:text-gray-300 cursor-pointer ${textClass}`}>
              {editingKey === key ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="w-[50%] text-black p-2"
                />
              ) : (
                <span
                  className={`no-underline font-bold ${textClass}`}
                  aria-current="page"
                  onDoubleClick={() => handleDoubleClick(key)}
                >
                  {TextEdit[key]}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
// Hero Section
const HeroSection = ({ backgroundClass, textClass }) => {
  const [heroText, setHeroText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('HeroText'));
    return savedText || {
      title: 'The Next Generation',
      description: 'Discover the latest in innovation and technology.',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load text from local storage when the component mounts
  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('HeroText'));
    if (savedText) {
      setHeroText(savedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('HeroText', JSON.stringify(heroText));
  }, [heroText]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    setInputValue(heroText[key]); // Set the current value of the input field
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    if (inputValue.trim() !== '') {
      setHeroText((prev) => ({ ...prev, [editingKey]: inputValue }));
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
    <section className={`relative h-screen bg-gray-900 text-white flex items-center ${backgroundClass}`}>
      <div className="relative z-10 container mx-auto text-center">
        {editingKey === 'title' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className={`text-5xl text-black font-bold mb-4 ${textClass}`}
          />
        ) : (
          <h2
            className={`text-5xl font-bold mb-4 ${textClass}`}
            onDoubleClick={() => handleDoubleClick('title')}
          >
            {heroText.title}
          </h2>
        )}
        {editingKey === 'description' ? (
          <textarea
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className={`text-lg text-black mb-6 ${textClass}`}
          />
        ) : (
          <p
            className={`text-lg mb-6 ${textClass}`}
            onDoubleClick={() => handleDoubleClick('description')}
          >
            {heroText.description}
          </p>
        )}
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-500 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

// Product Showcase Section
const ProductShowcase = ({ backgroundClass, textClass }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    return (
      savedProducts || [
        {
          imgSrc:"https://images.unsplash.com/photo-1691449808001-bb8c157f0094?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2Ftc3VuZyUyMHBob25lfGVufDB8fDB8fHww",
          title: 'Galaxy S21',
          description: 'The ultimate smartphone experience.',
        },
        {
          imgSrc:
            'https://plus.unsplash.com/premium_photo-1661310118460-1f6697c5fb6e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbXN1bmclMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D',
          title: 'QN90A TV',
          description: 'Experience the next level of viewing.',
        },
        {
          imgSrc:
            'https://unsplash.com/photos/a-close-up-of-a-silver-cell-phone-1hDtgbntWb8',
          title: 'Galaxy Tab S7',
          description: 'The tablet that works like a PC.',
        },
      ]
    );
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const [sectionTitle, setSectionTitle] = useState(() => {
    return localStorage.getItem('sectionTitle') || 'Featured Products';
  });
  const [editingSectionTitle, setEditingSectionTitle] = useState(false);
  const [sectionTitleInput, setSectionTitleInput] = useState(sectionTitle);

  // Load data from local storage on component mount
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products'));
    if (savedProducts) {
      setProducts(savedProducts);
    }

    const savedSectionTitle = localStorage.getItem('sectionTitle');
    if (savedSectionTitle) {
      setSectionTitle(savedSectionTitle);
    }
  }, []);

  // Save products and section title to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('sectionTitle', sectionTitle);
  }, [sectionTitle]);

  const handleDoubleClick = (key, field) => {
    setEditingKey({ key, field });
    setInputValue(products[key][field]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = () => {
    if (editingKey && editingKey.key !== null && editingKey.key !== undefined) {
      setProducts((prev) =>
        prev.map((product, index) =>
          index === editingKey.key
            ? { ...product, [editingKey.field]: inputValue }
            : product
        )
      );
      setEditingKey(null);
    }
  };
  

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  const handleSectionTitleDoubleClick = () => {
    setEditingSectionTitle(true);
    setSectionTitleInput(sectionTitle);
  };

  const handleSectionTitleChange = (e) => {
    setSectionTitleInput(e.target.value);
  };

  const handleSectionTitleSave = () => {
    if (sectionTitleInput.trim() !== '') {
      setSectionTitle(sectionTitleInput);
    }
    setEditingSectionTitle(false);
  };

  return (
    <section className={`py-10 ${backgroundClass}`}>
      {editingSectionTitle ? (
        <input
          value={sectionTitleInput}
          onChange={handleSectionTitleChange}
          onBlur={handleSectionTitleSave}
          onKeyPress={handleKeyPress}
          autoFocus
          className={`text-3xl font-semibold text-center mb-6 ${textClass}`}
        />
      ) : (
        <h2
          className={`text-3xl font-semibold text-center mb-6 ${textClass}`}
          onDoubleClick={handleSectionTitleDoubleClick}
        >
          {sectionTitle}
        </h2>
      )}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.imgSrc}
              alt={product.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {editingKey && editingKey.key === index && editingKey.field === 'title' ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className={`font-bold text-xl ${textClass}`}
                />
              ) : (
                <h3
                  className={`font-bold text-xl ${textClass}`}
                  onDoubleClick={() => handleDoubleClick(index, 'title')}
                >
                  {product.title}
                </h3>
              )}
              {editingKey && editingKey.key === index && editingKey.field === 'description' ? (
                <textarea
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className={`text-gray-600 ${textClass}`}
                />
              ) : (
                <p
                  className={`text-gray-600 ${textClass}`}
                  onDoubleClick={() => handleDoubleClick(index, 'description')}
                >
                  {product.description}
                </p>
              )}
              <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
// Footer Component
const Footer = ({ textClass }) => {
  const [footerText, setFooterText] = useState(() => {
    const savedText = localStorage.getItem('footerText');
    return savedText || '© 2024 Samsung. All rights reserved.';
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load footer text from local storage when the component mounts
  useEffect(() => {
    const savedText = localStorage.getItem('footerText');
    if (savedText) {
      setFooterText(savedText);
    }
  }, []);

  // Save footer text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('footerText', footerText);
  }, [footerText]);

  // Enable editing for the footer text
  const handleDoubleClick = () => {
    setEditingKey('footer');
    setInputValue(footerText);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur
  const handleSave = () => {
    if (inputValue.trim() !== '') {
      setFooterText(inputValue);
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
    <footer className={`bg-black text-white text-center py-4 ${textClass}`}>
      {editingKey === 'footer' ? (
        <input
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleSave}
          onKeyPress={handleKeyPress}
          autoFocus
          className="p-2 text-black"
        />
      ) : (
        <p onDoubleClick={handleDoubleClick}>{footerText}</p>
      )}
    </footer>
  );
};


// Main Samsung Template Component
const Template1 = () => {
  const [backgroundClass, setBackgroundClass] = useState('');
  const [textClass, setTextClass] = useState('');

  // Load custom classes from localStorage (if needed)
  useEffect(() => {
    const savedBackgroundClass = localStorage.getItem('backgroundClass');
    const savedTextClass = localStorage.getItem('textClass');
    if (savedBackgroundClass) setBackgroundClass(savedBackgroundClass);
    if (savedTextClass) setTextClass(savedTextClass);
  }, []);

  // Save custom classes to localStorage (if needed)
  useEffect(() => {
    localStorage.setItem('backgroundClass', backgroundClass);
    localStorage.setItem('textClass', textClass);
  }, [backgroundClass, textClass]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar Section */}
      <Navbar backgroundClass={backgroundClass} textClass={textClass} />

      {/* Hero Section */}
      <HeroSection backgroundClass={backgroundClass} textClass={textClass} />

      {/* Product Showcase Section */}
      <ProductShowcase backgroundClass={backgroundClass} textClass={textClass} />

      {/* Footer Section */}
      <Footer textClass={textClass} />
    </div>
  );
};

export default Template1;
