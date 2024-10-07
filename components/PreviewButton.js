import React from 'react';

const PreviewButton = ({ htmlContent, cssContent }) => {
  const handlePreview = () => {
    const previewWindow = window.open('', '_blank');
    const combinedContent = `
      <html>
        <head>
          <style>${cssContent}</style>
        </head>
        <body>${htmlContent}</body>
      </html>
    `;
    previewWindow.document.write(combinedContent);
    previewWindow.document.close();
  };

  return (
    <button onClick={handlePreview} className="btn btn-primary" style={{
        margin: '10px',
        padding: '5px 10px',
        fontSize: '14px',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        border: 'none',
        color: '#fff',
      }}>
      Preview
    </button>
  );
};

export default PreviewButton;
