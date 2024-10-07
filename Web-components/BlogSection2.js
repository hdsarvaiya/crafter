import React, { useState, useEffect } from 'react';

// BlogSection2 Component
const BlogSection2 = () => {
  const [blogPosts, setBlogPosts] = useState(() => {
    const savedPosts = JSON.parse(localStorage.getItem('BlogPosts'));
    return savedPosts || [
      {
        id: 1,
        title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
        description:
          'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
        category: 'Category 1',
        date: '12 Jun 2019',
      },
      {
        id: 2,
        title: 'Meditation bushwick direct trade taxidermy shaman',
        description:
          'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
        category: 'Category 2',
        date: '15 Jul 2020',
      },
      {
        id: 3,
        title: 'Woke master cleanse drinking vinegar salvia',
        description:
          'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
        category: 'Category 3',
        date: '25 Aug 2021',
      },
    ];
  });

  const [editingKey, setEditingKey] = useState({ id: null, type: null });
  const [inputValue, setInputValue] = useState('');

  // Save blog posts to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('BlogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  // Enable editing for a specific blog post key
  const handleDoubleClick = (id, type) => {
    const post = blogPosts.find((post) => post.id === id);
    setEditingKey({ id, type });
    setInputValue(type === 'title' ? post.title : type === 'description' ? post.description : type === 'category' ? post.category : post.date);
  };

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Save the edited value on blur or Enter key
  const handleSave = () => {
    if (inputValue.trim() !== '') {
      setBlogPosts((prev) =>
        prev.map((post) =>
          post.id === editingKey.id
            ? { ...post, [editingKey.type]: inputValue }
            : post
        )
      );
      setEditingKey({ id: null, type: null }); // Exit editing mode
    }
  };

  // Handle Enter key press to save the input value
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  return (
    <section className=" body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {blogPosts.map((post) => (
            <div key={post.id} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                {editingKey.id === post.id && editingKey.type === 'category' ? (
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    onKeyPress={handleKeyPress}
                    autoFocus
                    className="font-semibold title-font  mb-2"
                  />
                ) : (
                  <span
                    className="font-semibold title-font  cursor-pointer"
                    onDoubleClick={() => handleDoubleClick(post.id, 'category')}
                  >
                    {post.category}
                  </span>
                )}
                {editingKey.id === post.id && editingKey.type === 'date' ? (
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    onKeyPress={handleKeyPress}
                    autoFocus
                    className="mt-1  "
                  />
                ) : (
                  <span
                    className="mt-1   cursor-pointer"
                    onDoubleClick={() => handleDoubleClick(post.id, 'date')}
                  >
                    {post.date}
                  </span>
                )}
              </div>
              <div className="md:flex-grow">
                {editingKey.id === post.id && editingKey.type === 'title' ? (
                  <input
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    onKeyPress={handleKeyPress}
                    autoFocus
                    className=" font-medium  title-font mb-2"
                  />
                ) : (
                  <h2
                    className=" font-medium  title-font mb-2 cursor-pointer"
                    onDoubleClick={() => handleDoubleClick(post.id, 'title')}
                  >
                    {post.title}
                  </h2>
                )}
                {editingKey.id === post.id && editingKey.type === 'description' ? (
                  <textarea
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    onKeyPress={handleKeyPress}
                    autoFocus
                    className="leading-relaxed mb-4"
                  />
                ) : (
                  <p
                    className="leading-relaxed mb-4 cursor-pointer"
                    onDoubleClick={() => handleDoubleClick(post.id, 'description')}
                  >
                    {post.description}
                  </p>
                )}
                <a className="text-indigo-500 inline-flex items-center mt-4">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection2;
