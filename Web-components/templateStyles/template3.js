import React, { useState, useEffect } from 'react';

// Editable Navbar Component
const Navbar = ({ backgroundClass, textClass }) => {
  const [TextEdit, setText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('NavbarTextEdit'));
    return savedText || {
      brand: 'Luxury Brand',
      Home: 'Home',
      About: 'About',
      Products: 'Products',
      Contact: 'Contact',
    };
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load text from local storage when the component mounts
  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('NavbarTextEdit'));
    if (savedText) {
      setText(savedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('NavbarTextEdit', JSON.stringify(TextEdit));
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
      <div className="container mx-auto flex justify-between items-center p-5">
        {editingKey === 'brand' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="text-black p-2"
          />
        ) : (
          <h1
            className={`text-2xl font-bold ${textClass}`}
            onDoubleClick={() => handleDoubleClick('brand')}
          >
            {TextEdit.brand}
          </h1>
        )}
        <ul className="flex space-x-6">
          {['Home', 'About', 'Products', 'Contact'].map((key) => (
            <li
              key={key}
              className={`hover:text-gray-300 cursor-pointer ${textClass}`}
              onDoubleClick={() => handleDoubleClick(key)}
            >
              {editingKey === key ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="text-black p-2"
                />
              ) : (
                TextEdit[key]
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Editable Hero Section
const HeroSection = ({ textClass }) => {
  const [heroText, setHeroText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('HeroTextEdit'));
    return savedText || {
      title: 'Timeless Elegance & Modern Sophistication',
      description: 'Discover the perfect balance of style and luxury.',
    };
  });
  
  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Load text from local storage when the component mounts
  useEffect(() => {
    const savedText = JSON.parse(localStorage.getItem('HeroTextEdit'));
    if (savedText) {
      setHeroText(savedText);
    }
  }, []);

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('HeroTextEdit', JSON.stringify(heroText));
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
    <section className="relative h-screen bg-black text-white flex items-center">
      <img
        src="https://images.samsung.com/is/image/samsung/assets/in/p6_gro1/p6_initial_explore_landing/ex26/vd0001_ex26_hashtag-thumbnail_pc_390x260.jpg"
        alt="Luxury Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 container mx-auto text-center">
        {editingKey === 'title' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="text-black text-6xl font-bold mb-6 leading-tight"
          />
        ) : (
          <h2
            className={`text-6xl font-bold mb-6 leading-tight ${textClass}`}
            onDoubleClick={() => handleDoubleClick('title')}
          >
            {heroText.title}
          </h2>
        )}
        {editingKey === 'description' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="text-black text-lg mb-8"
          />
        ) : (
          <p
            className={`text-lg mb-8 ${textClass}`}
            onDoubleClick={() => handleDoubleClick('description')}
          >
            {heroText.description}
          </p>
        )}
        <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition duration-300">
          Explore Collection
        </button>
      </div>
    </section>
  );
};
// Editable Features Section
// Editable Features Section
const FeaturesSection = ({ textClass }) => {
  const [featuresText, setFeaturesText] = useState(() => {
    const savedText = JSON.parse(localStorage.getItem('FeaturesTextEdit'));
    return (
      savedText || {
        title: 'Why Choose Us?',
        description: 'Luxury that speaks for itself, crafted for those who know the value of elegance.',
        features: [
          { title: 'Premium Quality', description: 'Crafted from the finest materials.' },
          { title: 'Timeless Design', description: 'Blending classic beauty with modern functionality.' },
          { title: 'Exclusive Collections', description: 'Unique collections for exquisite tastes.' },
        ],
      }
    );
  });

  const [editingKey, setEditingKey] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Save text to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('FeaturesTextEdit', JSON.stringify(featuresText));
  }, [featuresText]);

  // Enable editing for a specific key
  const handleDoubleClick = (key) => {
    setEditingKey(key);
    const [section, index, field] = key.split('_');
    if (section === 'feature') {
      setInputValue(featuresText.features[index][field]);
    } else {
      setInputValue(featuresText[key]);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    const [section, index, field] = editingKey.split('_');
    if (section === 'feature') {
      setFeaturesText((prev) => {
        const newFeatures = [...prev.features];
        newFeatures[index][field] = inputValue;
        return { ...prev, features: newFeatures };
      });
    } else {
      setFeaturesText((prev) => ({ ...prev, [editingKey]: inputValue }));
    }
    setEditingKey(null); // Exit editing mode
  };

  // Handle Enter key press to save the input value
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center mb-10">
        {editingKey === 'title' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="text-black text-4xl font-semibold mb-4"
          />
        ) : (
          <h2
            className={`text-4xl font-semibold mb-4 ${textClass}`}
            onDoubleClick={() => handleDoubleClick('title')}
          >
            {featuresText.title}
          </h2>
        )}
        {editingKey === 'description' ? (
          <input
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleSave}
            onKeyPress={handleKeyPress}
            autoFocus
            className="text-black"
          />
        ) : (
          <p
            className={` ${textClass}`}
            onDoubleClick={() => handleDoubleClick('description')}
          >
            {featuresText.description}
          </p>
        )}
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {featuresText.features.map((feature, index) => (
          <div
            key={index}
            className="p-8 rounded-lg shadow-md"
          >
            <h3
              className="text-2xl font-bold mb-3"
              onDoubleClick={() => handleDoubleClick(`feature_${index}_title`)}
            >
              {editingKey === `feature_${index}_title` ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="text-black"
                />
              ) : (
                feature.title
              )}
            </h3>
            <p
              className="text-gray-600"
              onDoubleClick={() => handleDoubleClick(`feature_${index}_description`)}
            >
              {editingKey === `feature_${index}_description` ? (
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleSave}
                  onKeyPress={handleKeyPress}
                  autoFocus
                  className="text-black"
                />
              ) : (
                feature.description
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};



// Editable Template3 Component
const Template3 = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar backgroundClass="bg-gradient-to-r from-blue-500 to-indigo-500" textClass="text-black" />
      <HeroSection textClass="text-white" />
      <FeaturesSection textClass="text-gray-800" />
    </div>
  );
};

export default Template3
