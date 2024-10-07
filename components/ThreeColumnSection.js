import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '@/constants/ItemTypes';

const ThreeColumnSection = ({ leftComponent, centerComponent, rightComponent, onDropLeft, onDropCenter, onDropRight }) => {
  const [{ isOverLeft }, dropLeft] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item) => {
      onDropLeft(item);
      return { sectionIndex: null };
    },
    collect: (monitor) => ({
      isOverLeft: !!monitor.isOver(),
    }),
  });

  const [{ isOverCenter }, dropCenter] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item) => {
      onDropCenter(item);
      return { sectionIndex: null };
    },
    collect: (monitor) => ({
      isOverCenter: !!monitor.isOver(),
    }),
  });

  const [{ isOverRight }, dropRight] = useDrop({
    accept: Object.values(ItemTypes),
    drop: (item) => {
      onDropRight(item);
      return { sectionIndex: null };
    },
    collect: (monitor) => ({
      isOverRight: !!monitor.isOver(),
    }),
  });

  const renderComponent = (component) => {
    return React.isValidElement(component) ? component : null;
  };

  return (
    <div style={{ display: 'flex', border: '1px solid #ddd', padding: '10px', boxSizing: 'border-box' }}>
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
        {leftComponent ? renderComponent(leftComponent) : 'Drop left component here'}
      </div>
      <div
        ref={dropCenter}
        style={{
          flex: 2,
          marginRight: '10px',
          background: isOverCenter ? '#e0e0e0' : 'white',
          padding: '10px',
          boxSizing: 'border-box',
          minHeight: '100px',
        }}
      >
        {centerComponent ? renderComponent(centerComponent) : 'Drop center component here'}
      </div>
      <div
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
      </div>
    </div>
  );
};

export default ThreeColumnSection;
