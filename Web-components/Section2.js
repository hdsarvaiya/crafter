import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@/constants/ItemTypes';

const Section2 = ({ leftComponent, rightComponent, onDropLeft, onDropRight }) => {
  console.log("Rendering Section component");
  console.log("Left component:", leftComponent);
  console.log("Right component:", rightComponent);

  const [{ isOverLeft }, dropLeft] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item) => {
      // console.log("Drop your Component here:", item);
      onDropLeft(item);
      return { sectionIndex: null };
    },
    collect: (monitor) => ({
      isOverLeft: !!monitor.isOver(),
    }),
  });

  const [{ isOverRight }, dropRight] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item) => {
      // console.log("Dropping on the right side:", item);
      onDropRight(item);
      return { sectionIndex: null };
    },
    collect: (monitor) => ({
      isOverRight: !!monitor.isOver(),
    }),
  });

  // Ensure that the components are valid React elements before rendering
  const renderComponent = (component) => {
    return React.isValidElement(component) ? component : null;
  };

  return (
    <div style={{  border: '1px solid #ddd', padding: '10px', boxSizing: 'border-box' }}>
      <div
        ref={dropLeft}
        style={{
          flex: 1,
          marginRight: '10px',
          background: isOverLeft ? '#e0e0e0' : 'white',
          padding: '10px',
          boxSizing: 'border-box',
          minHeight: '100px',
        }}
      >
        {leftComponent ? renderComponent(leftComponent) : 'Drop your Component here'}
      </div>
      {/* <div
        ref={dropRight}
        style={{
          flex: 1,
          marginLeft: '10px',
          background: isOverRight ? '#e0e0e0' : 'white',
          padding: '10px',
          boxSizing: 'border-box',
          minHeight: '100px',
        }}
      >
        {rightComponent ? renderComponent(rightComponent) : 'Drop right component here'}
      </div> */}
    </div>
  );
};

export default Section2;
