import React, { useState } from 'react';
import Image from 'next/image';
import TextComponent from '@/Web-components/Text-Components/TextComponent'; // Import the text component

function Images2() {
  const [textPosition, setTextPosition] = useState({ top: '45%', left: '50%' });

  // Handler to allow dragging of text over the image
  const handleDrag = (event) => {
    const container = event.target.parentNode.getBoundingClientRect();
    const newLeft = ((event.clientX - container.left) / container.width) * 100;
    const newTop = ((event.clientY - container.top) / container.height) * 100;
    setTextPosition({ top: `${newTop}%`, left: `${newLeft}%` });
  };

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center" style={{height:'90vh'}}>
      {/* Image Component */}
      <img
        className="absolute w-full h-full object-cover"
        src={"https://wallpaperbat.com/img/9766750-clothes-background.jpg"}
        alt="Mountain"
      />

      {/* TextComponent positioned over the image */}
      <div
        className="absolute cursor-move"
        style={{ top: textPosition.top, left: textPosition.left, transform: 'translate(-50%, -50%)' }}
        onDragEnd={handleDrag}
        draggable
      >
        <TextComponent />
      </div>
    </div>
  );
}

export default Images2;
