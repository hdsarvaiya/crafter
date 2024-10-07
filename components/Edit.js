import React, { useState, useEffect } from "react";
import DeleteButton from "./DeleteButton";
import { SketchPicker } from 'react-color';
import {
  CiTextAlignLeft,
  CiTextAlignRight,
  CiTextAlignCenter,
} from "react-icons/ci";

const Edit = ({ selectedComponent, handleUpdateComponent,selectedComponentIndex,setComponents,handleDeleteComponent,components }) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [padding, setPadding] = useState("");
  const [margin, setMargin] = useState("");
  const [borderWidth, setBorderWidth] = useState("");
  const [borderStyle, setBorderStyle] = useState("");
  const [borderColor, setBorderColor] = useState("");
  const [borderRadius, setBorderRadius] = useState("");
  const [textAlign, setTextAlign] = useState("");
  const [fontFamily, setFontFamily] = useState("");
  const [backgroundImage, setBackgroundImage] = useState("");
  const [backgroundImageWidth, setBackgroundImageWidth] = useState("");
  const [backgroundImageHeight, setBackgroundImageHeight] = useState("");

  useEffect(() => {
    if (selectedComponent) {
      setWidth(
        selectedComponent.width
          ? selectedComponent.width.replace("px", "")
          : "100"
      );
      setHeight(
        selectedComponent.height
          ? selectedComponent.height.replace("px", "")
          : "100"
      );
      setBackgroundColor(selectedComponent.backgroundColor || "#ffffff");
      setTextColor(selectedComponent.textColor || "#000000");
      setFontSize(
        selectedComponent.fontSize
          ? selectedComponent.fontSize.replace("px", "")
          : "16"
      );
      setPadding(
        selectedComponent.padding
          ? selectedComponent.padding.replace("px", "")
          : "0"
      );
      setMargin(
        selectedComponent.margin
          ? selectedComponent.margin.replace("px", "")
          : "0"
      );
      setBorderWidth(
        selectedComponent.borderWidth
          ? selectedComponent.borderWidth.replace("px", "")
          : "1"
      );
      setBorderStyle(selectedComponent.borderStyle || "solid");
      setBorderColor(selectedComponent.borderColor || "#000000");
      setBorderRadius(
        selectedComponent.borderRadius
          ? selectedComponent.borderRadius.replace("px", "")
          : "0"
      );
      setTextAlign(selectedComponent.textAlign || "left");
      setFontFamily(selectedComponent.fontFamily || "Arial");
      setBackgroundImage(selectedComponent.backgroundImage || "");
      setBackgroundImageWidth(
        selectedComponent.backgroundImageWidth
          ? selectedComponent.backgroundImageWidth.replace("rem", "")
          : "100"
      );
      setBackgroundImageHeight(
        selectedComponent.backgroundImageHeight
          ? selectedComponent.backgroundImageHeight.replace("px", "")
          : "100"
      );
    }
  }, [selectedComponent]);

  const handleImmediateChange = (field, value) => {
    const updatedComponent = {
      ...selectedComponent,
      [field]: value,
    };
    handleUpdateComponent(updatedComponent);
  };


  const [color, setColor] = useState('#ffffff'); // Default color for drag area background
  const [imageUrl, setImageUrl] = useState('');

  const handleColorChange = (selectedColor) => {
    setColor(selectedColor.hex); // Update local state
    onColorChange(selectedColor.hex); // Pass color to DragArea
  };

  const handleImageUrlChange = () => {
    onImageUrlChange(imageUrl); // Pass image URL to DragArea
    setImageUrl(''); // Clear input after setting the image
  };


  return (
    <div className="p-3 w-[15vw] mx-auto text-white flex flex-col items-center">
      {/* <h2 className="mb-2 text-lg">Edit Component</h2> */}

      {/* Dimensions */}
      <div className="pb-4">

      <DeleteButton 
            selectedComponentIndex={selectedComponentIndex} 
            components={components} 
            setComponents={setComponents}
            onDelete={handleDeleteComponent} // Pass the delete handler to DeleteButton
          />

        <h3 className="text-lg mb-2">Dimensions:</h3>
        <div className=" gap-4 grid grid-rows-2 grid-cols-2 ">
          <label className="block font-bold bg-slate-800 p-2 rounded-md">
            Width:
            <input
              type="number"
              value={width}
              onChange={(e) => {
                const newWidth = `${e.target.value}px`;
                setWidth(e.target.value);
                handleImmediateChange("width", newWidth);
              }}
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
          <label className="block font-bold bg-slate-800 p-2   rounded-md">
            Height:
            <input
              type="number"
              value={height}
              onChange={(e) => {
                const newHeight = `${e.target.value}px`;
                setHeight(e.target.value);
                handleImmediateChange("height", newHeight);
              }}
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
          <label className="block font-bold bg-slate-800 p-2  rounded-md">
            Padding:
            <input
              type="number"
              value={padding}
              onChange={(e) => {
                const newPadding = `${e.target.value}px`;
                setPadding(e.target.value);
                handleImmediateChange("padding", newPadding);
              }}
              placeholder="Padding in px"
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
          <label className="block font-bold bg-slate-800 p-2  rounded-md">
            Margin:
            <input
              type="number"
              value={margin}
              onChange={(e) => {
                const newMargin = `${e.target.value}px`;
                setMargin(e.target.value);
                handleImmediateChange("margin", newMargin);
              }}
              placeholder="Margin in px"
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
        </div>
      </div>

      {/* Background */}
      <div className="pb-4">
        <h3 className="text-lg mb-2">Color</h3>
        <div className="flex gap-4">
          <label className="block font-normal text-sm bg-slate-800 p-2  rounded-md">
            Background:
            <input
              type="color"
              value={backgroundColor}
              onChangeComplete={handleColorChange}
              onChange={(e) => {
                setBackgroundColor(e.target.value);
                handleImmediateChange("backgroundColor", e.target.value);
              }}
              className="block mt-1 w-12 h-8 border-none cursor-pointer"
            />

          </label>
          <label className="block font-bold bg-slate-800 p-2  rounded-md">
            Text :
            <input
              type="color"
              value={textColor}
              onChange={(e) => {
                setTextColor(e.target.value);
                handleImmediateChange("textColor", e.target.value);
              }}
              className="block mt-1 w-12 h-8 border-none cursor-pointer"
            />
          </label>
        </div>
      </div>

      {/* Text */}
      <div className="pb-4">
        <h3 className="text-lg mb-2">Text</h3>
        <div className="gap-4 flex">
          <label className="block font-bold bg-slate-800 p-2  rounded-md">
            Size:
            <input
              type="number"
              value={fontSize}
              onChange={(e) => {
                const newFontSize = `${e.target.value}px`;
                setFontSize(e.target.value);
                handleImmediateChange("fontSize", newFontSize);
              }}
              placeholder="Font Size in px"
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
          <label className="block font-bold bg-slate-800 p-2  rounded-md">
            Family:
            <input
              type="text"
              value={fontFamily}
              onChange={(e) => {
                setFontFamily(e.target.value);
                handleImmediateChange("fontFamily", e.target.value);
              }}
              placeholder="Font Family"
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
        </div>

        {/* Text Align */}
        <div className="flex items-center mt-4 gap-4">
          {/* <label className="block font-bold bg-slate-800 p-2">
            Text Align:

          </label> */}
          <div className="flex gap-4  w-full items-center justify-center ">
            <button
              className={`p-2 ${
                textAlign === "left" ? "bg-blue-500" : "bg-slate-800"
              } text-xl`}
              onClick={() => {
                setTextAlign("left");
                handleImmediateChange("textAlign", "left");
              }}
            >
              <CiTextAlignLeft className="text-2xl" />
            </button>
            <button
              className={`p-2 ${
                textAlign === "center" ? "bg-blue-500" : "bg-slate-800"
              }`}
              onClick={() => {
                setTextAlign("center");
                handleImmediateChange("textAlign", "center");
              }}
            >
              <CiTextAlignCenter className="text-2xl" />
            </button>
            <button
              className={`p-2 ${
                textAlign === "right" ? "bg-blue-500" : "bg-slate-800"
              }`}
              onClick={() => {
                setTextAlign("right");
                handleImmediateChange("textAlign", "right");
              }}
            >
              <CiTextAlignRight className="text-2xl" />
            </button>
          </div>
        </div>
      </div>



      {/* Border */}
      <div className="pb-4">
        <h3 className="text-lg mb-2">Border</h3>
        <div className=" gap-4 grid grid-rows-2 grid-cols-2 ">
          <label className=" font-bold bg-slate-800 p-2 flex flex-col items-start justify-center  rounded-md">
           Width:
            <input
              type="number"
              value={borderWidth}
              onChange={(e) => {
                const newBorderWidth = `${e.target.value}px`;
                setBorderWidth(e.target.value);
                handleImmediateChange("borderWidth", newBorderWidth);
              }}
              placeholder="Border Width in px"
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
          <label className=" font-bold bg-slate-800 p-2 flex flex-col items-start justify-center  rounded-md">
             Style:
            <input
              type="text"
              value={borderStyle}
              onChange={(e) => {
                setBorderStyle(e.target.value);
                handleImmediateChange("borderStyle", e.target.value);
              }}
              placeholder="Border Style"
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
          <label className=" font-bold bg-slate-800 p-2 flex flex-col items-start justify-center  rounded-md">
             Color:
            <input
              type="color"
              value={borderColor}
              onChange={(e) => {
                setBorderColor(e.target.value);
                handleImmediateChange("borderColor", e.target.value);
              }}
              className=" border-none cursor-pointer block mt-1 w-16 h-8 border"
            />
          </label>
          <label className=" font-bold bg-slate-800 p-2 flex flex-col items-start justify-center  rounded-md">
             Radius:
            <input
              type="number"
              value={borderRadius}
              onChange={(e) => {
                const newBorderRadius = `${e.target.value}px`;
                setBorderRadius(e.target.value);
                handleImmediateChange("borderRadius", newBorderRadius);
              }}
              placeholder="Border Radius in px"
              className="block mt-1 p-1 text-xs text-black w-16 h-8 border"
            />
          </label>
        </div>
      </div>

      {/* Background Image */}
      <div className="pb-4">
        <h3 className="text-lg mb-2">Background Image</h3>
        <div className="space-y-4">
          <label className="block font-bold bg-slate-800 p-2  rounded-md">
            Image URL:
            <input
              type="text"
              value={backgroundImage}
              onChange={(e) => {
                setBackgroundImage(e.target.value);
                handleImmediateChange("backgroundImage", e.target.value);
              }}
              placeholder="Paste your URL"
              className="block mt-1 text-xs p-1 text-black w-full border"
            />
          </label>

        </div>
        <button onClick={handleImageUrlChange} style={{ width: '100%' }}>
        Set Background Image
      </button>
      </div>
    </div>
  );
};

export default Edit;
