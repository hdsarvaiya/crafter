import React, { useState } from "react";

const MediaWidthChanger = ({ setMediaWidth }) => {
  return (
    <div className="flex space-x-4 mb-4">
      <button
        onClick={() => setMediaWidth("mobile")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Mobile
      </button>
      <button
        onClick={() => setMediaWidth("tablet")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Tablet
      </button>
      <button
        onClick={() => setMediaWidth("laptop")}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Laptop
      </button>
    </div>
  );
};

export default MediaWidthChanger;
