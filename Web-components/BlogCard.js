import React, { useState } from 'react';

const BlogCard = ({ category, title, description, imgSrc, readMoreLink, likes, comments, onEdit }) => {
  console.log(imgSrc); // Add this line to check the imgSrc value

  const [isEditing, setIsEditing] = useState({
    title: false,
    description: false,
    likes: false,
    comments: false,
  });
  const [editValues, setEditValues] = useState({
    title: title,
    description: description,
    likes: likes,
    comments: comments,
  });

  const handleDoubleClick = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    onEdit(field, editValues[field]);
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {isEditing.title ? (
          <input
            value={editValues.title}
            onChange={(e) => setEditValues({ ...editValues, title: e.target.value })}
            onBlur={() => handleSave('title')}
            className="border p-2 w-full mb-2"
          />
        ) : (
          <h2
            onDoubleClick={() => handleDoubleClick('title')}
            className="text-lg font-medium mb-2 cursor-pointer"
          >
            {editValues.title}
          </h2>
        )}

        {isEditing.description ? (
          <textarea
            value={editValues.description}
            onChange={(e) => setEditValues({ ...editValues, description: e.target.value })}
            onBlur={() => handleSave('description')}
            className="border p-2 w-full mb-2"
          />
        ) : (
          <p
            onDoubleClick={() => handleDoubleClick('description')}
            className="leading-relaxed mb-3 cursor-pointer"
          >
            {editValues.description}
          </p>
        )}

        <img className="rounded-lg h-48 w-full object-cover" src={imgSrc} alt={editValues.title} />
        
        <div className="flex justify-between items-center mt-4">
          {isEditing.likes ? (
            <input
              value={editValues.likes}
              onChange={(e) => setEditValues({ ...editValues, likes: e.target.value })}
              onBlur={() => handleSave('likes')}
              className="border p-2 w-1/3"
            />
          ) : (
            <span onDoubleClick={() => handleDoubleClick('likes')} className="text-indigo-500 cursor-pointer">
              {editValues.likes} Likes
            </span>
          )}

          {isEditing.comments ? (
            <input
              value={editValues.comments}
              onChange={(e) => setEditValues({ ...editValues, comments: e.target.value })}
              onBlur={() => handleSave('comments')}
              className="border p-2 w-1/3"
            />
          ) : (
            <span onDoubleClick={() => handleDoubleClick('comments')} className="text-indigo-500 cursor-pointer">
              {editValues.comments} Comments
            </span>
          )}

          
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
