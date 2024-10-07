import React from 'react';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

const generateCodeFiles = (htmlContent, cssContent, jsContent) => {
  const zip = new JSZip();

  // Create a main folder for the project
  const mainFolder = zip.folder('MyProject'); // You can name the folder as you like

  // Update the HTML content to link the CSS file
  const updatedHtmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="style.css"> <!-- Linking the CSS file -->
      <title>Your Page Title</title>
    </head>
    <body>
      ${htmlContent}
      <script src="scripts.js"></script>
    </body>
    </html>
  `;

  // Create files inside the main folder
  mainFolder.file('index.html', updatedHtmlContent);
  mainFolder.file('style.css', cssContent);
  mainFolder.file('scripts.js', jsContent);

  // Generate the ZIP file
  zip.generateAsync({ type: 'blob' }).then((content) => {
    saveAs(content, 'project.zip');
  });
};

const DownloadButton = ({ htmlContent, cssContent, jsContent }) => {
  const handleDownload = () => {
    generateCodeFiles(htmlContent, cssContent, jsContent);
  };

  return (
    <button
      onClick={handleDownload}
      className="btn btn-primary"
      style={{
        padding: '5px 10px',
        fontSize: '14px',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        border: 'none',
        color: '#fff',
      }}
    >
      Download Code
    </button>
  );
};

export default DownloadButton;