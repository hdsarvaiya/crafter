import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="shadow-md border border-white flex items-center justify-center flex-col " style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move', padding: '10px', margin: '10px' }}>
      {children}
    </div>
  );
};

export default DraggableItem;
