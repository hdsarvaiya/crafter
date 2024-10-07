import React, { useState, useEffect } from 'react';

const ParagraphComponent = ({ background, textCol, fontSizeValue }) => {
  const backgroundStyle = background ? `bg-[${background}]` : '';
  const textColorStyle = textCol ? `text-[${textCol}]` : '';
  const fontSizeStyle = fontSizeValue ? `text-[${fontSizeValue}]` : '';

  const [paragraphData, setParagraphData] = useState(() => {
    const savedParagraphData = JSON.parse(localStorage.getItem('paragraphData')) || {
      paragraph: 'Elephants and horses share some common traits despite their physical differences. Both animals are known for their strength, endurance, and roles in human history. The horse is often associated with speed, freedom, and loyalty, while the elephant represents wisdom, patience, and immense strength. When considering what an elephant might mean to a horse, the perspective becomes one of mutual respect and understanding of their differing but equally valuable strengths.',
    };
    return savedParagraphData;
  });

  const [editingParagraph, setEditingParagraph] = useState(null);
  const [inputParagraph, setInputParagraph] = useState('');

  // Save paragraph data to localStorage
  useEffect(() => {
    localStorage.setItem('paragraphData', JSON.stringify(paragraphData));
  }, [paragraphData]);

  // Enable editing for the paragraph
  const handleParagraphDoubleClick = (key) => {
    setEditingParagraph(key);
    setInputParagraph(paragraphData[key]);
  };

  // Handle input change for paragraph
  const handleParagraphChange = (e) => {
    setInputParagraph(e.target.value);
  };

  // Save the edited paragraph value
  const saveParagraph = () => {
    if (editingParagraph) {
      setParagraphData((prev) => ({ ...prev, [editingParagraph]: inputParagraph }));
    }
    setEditingParagraph(null);
  };

  // Handle Enter key press to save paragraph
  const handleParagraphKeyPress = (e) => {
    if (e.key === 'Enter') {
      saveParagraph();
    }
  };

  return (
    <div className={`p-4 ${backgroundStyle} ${textColorStyle} ${fontSizeStyle}`}>
      {/* Editable Paragraph */}
      {editingParagraph === 'paragraph' ? (
        <textarea
          value={inputParagraph}
          onChange={handleParagraphChange}
          onBlur={saveParagraph}
          onKeyPress={handleParagraphKeyPress}
          autoFocus
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
      ) : (
        <p
          className={`mb-2 ${textColorStyle}`}
          onDoubleClick={() => handleParagraphDoubleClick('paragraph')}
        >
          {paragraphData.paragraph}
        </p>
      )}
    </div>
  );
};

export default ParagraphComponent;
