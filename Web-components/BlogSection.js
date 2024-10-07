import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard'; // Adjust the path if necessary

const BlogSection = () => {
  // Define the default blog posts
  const defaultBlogPosts = [
    {
      category: 'CATEGORY',
      title: 'The Catalyzer',
      description: 'Photo booth fam kinfolk',
      imgSrc: 'https://i.pinimg.com/236x/b0/9d/ce/b09dce1fbeeec696d0c581cf4cff3163.jpg',
      likes: '1.2K',
      comments: '6',
    },
    {
      category: 'CATEGORY',
      title: 'The 400 Blows',
      description: 'Photo booth fam kinfo',
      imgSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSW4PxXrnmTVz4hJFngiVYOIW6T4K1nB10dtG8tMhAX_tJa9NXswTrwagRld2tFbTydXPSxiBItByjQiTavBJEFXSYBoS3LU-Ty7FOnzVQ&usqp=CAE',
      readMoreLink: '#',
      likes: '1.2K',
      comments: '6',
    },
    {
      category: 'CATEGORY',
      title: 'Shooting Stars',
      description: 'Photo booth fam kinfolk c',
      imgSrc: 'https://assets.ajio.com/medias/sys_master/root/20230712/5nbb/64aec13feebac147fc678da0/basics_green_striped_slim_fit_shirt_with_patch_pocket.jpg',
      readMoreLink: '#',
      likes: '1.2K',
      comments: '6',
    },
  ];

  const [blogPosts, setBlogPosts] = useState(() => {
    const savedBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    return savedBlogPosts || defaultBlogPosts;
  });

  // Save blog posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  // Function to handle editing blog posts
  const handleEditPost = (index, key, value) => {
    const updatedPosts = [...blogPosts];
    updatedPosts[index][key] = value;
    setBlogPosts(updatedPosts);
  };

  return (
    <section className="w-full p-1 flex items-center justify-center">
      <div className="flex items-center justify-center flex-row space-x-4 overflow-x-auto">
        {blogPosts.map((post, index) => (
          <div className="flex-shrink-0 w-72"> {/* Ensures fixed card width */}
            <BlogCard
              key={index}
              {...post}
              onEdit={(key, value) => handleEditPost(index, key, value)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
