import React, { useRef, useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";
import Navbar from "./Navbar";
import FormComponent from "./FormComponent";
import Image from "./Image";
import Section from "../Web-components/Section";
import Footer from "./Footer";
import Box from "./Box";
import axios from "axios";

const ItemTypes = {
  NAVBAR: "navbar",
  FORM: "form",
  IMAGE: "image",
  SECTION: "section",
  FOOTER: "footer",
  BOX: "box",
};

const DragArea = ({ components, setComponents, onComponentSelect, setHtmlContent }) => {
  const dropAreaRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const moveElement = (index, item) => {
    const newComponents = components.filter((_, i) => i !== item.index);
    newComponents.splice(index, 0, { ...item, width: "100%", height: "auto" });
    setComponents(newComponents);
  };

  const handleDropIntoSection = (sectionIndex, item, side) => {
    const newComponents = [...components];
    const component = newComponents[sectionIndex];
    if (component && component.type === "section") {
      if (side === "left") {
        component.leftComponent = serializeComponent(item);
      } else {
        component.rightComponent = serializeComponent(item);
      }
      setComponents(newComponents);
    }
  };

  const serializeComponent = (component) => ({
    type: component.type,
    props: component.props,
  });

  const deserializeComponent = (component) => {
    switch (component.type) {
      case "navbar":
        return <Navbar {...component.props} />;
      case "form":
        return <FormComponent {...component.props} />;
      case "image":
        return <Image {...component.props} />;
      case "section":
        return (
          <Section
            leftComponent={
              component.leftComponent
                ? deserializeComponent(component.leftComponent)
                : null
            }
            rightComponent={
              component.rightComponent
                ? deserializeComponent(component.rightComponent)
                : null
            }
            onDropLeft={(item) =>
              handleDropIntoSection(component.index, item, "left")
            }
            onDropRight={(item) =>
              handleDropIntoSection(component.index, item, "right")
            }
          />
        );
      case "footer":
        return <Footer {...component.props} />;
      case "box":
        return <Box {...component.props} />;
      default:
        return null;
    }
  };

  const fetchComponentsFromDatabase = async () => {
    try {
      const response = await axios.get("/api/components");
      const fetchedComponents = response.data;
      setComponents(fetchedComponents.map(deserializeComponent));
    } catch (error) {
      console.error("Error fetching components:", error);
    }
  };

  const saveComponentsToDatabase = async () => {
    try {
      const serializedComponents = components.map((component) => {
        if (component.type === "section") {
          return {
            ...component,
            leftComponent: component.leftComponent
              ? serializeComponent(component.leftComponent)
              : null,
            rightComponent: component.rightComponent
              ? serializeComponent(component.rightComponent)
              : null,
          };
        }
        return serializeComponent(component);
      });
      await axios.post("/api/components", serializedComponents);
    } catch (error) {
      console.error("Error saving components:", error);
    }
  };

  const [{ isOver }, drop] = useDrop({
    accept: Object.values(ItemTypes),
    hover: (item, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset) {
        const hoverIndex = getHoverIndex(clientOffset);
        setHoverIndex(hoverIndex);
      }
    },
    drop: (item) => {
      if (hoverIndex !== null) {
        moveElement(hoverIndex, item);
        setHoverIndex(null);
        updateHtmlContent();
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const getHoverIndex = (clientOffset) => {
    const hoverBoundingRect = dropAreaRef.current.getBoundingClientRect();
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;
    const hoverIndex = Math.floor(
      hoverClientY / (hoverBoundingRect.height / (components.length + 1))
    );
    return Math.min(hoverIndex, components.length);
  };

  const handleRemoveComponent = (index) => {
    const newComponents = components.filter((_, i) => i !== index);
    setComponents(newComponents);
    updateHtmlContent();
  };

  const updateHtmlContent = () => {
    if (dropAreaRef.current) {
      setHtmlContent(dropAreaRef.current.innerHTML);
    }
  };

  useEffect(() => {
    updateHtmlContent();
  }, [components]);

  useEffect(() => {
    fetchComponentsFromDatabase();
  }, []);

  return (
    <div
      ref={drop}
      className={`flex-1 p-5 border border-gray-300 min-h-screen relative ${
        isOver ? "bg-gray-200" : "bg-white"
      } drag-area`}
    >
      <h3 className="text-lg font-semibold">Drag Area</h3>
      <div ref={dropAreaRef} className="relative">
        {components.map((component, index) => (
          <DraggableComponent
            key={index}
            index={index}
            component={component}
            onComponentSelect={onComponentSelect}
            handleRemoveComponent={handleRemoveComponent}
            setHoverIndex={setHoverIndex}
            getHoverIndex={getHoverIndex}
            setComponents={setComponents}
            components={components}
            updateHtmlContent={updateHtmlContent}
            serializeComponent={serializeComponent}
            isHovering={index === hoverIndex} // Pass hover state to child
          />
        ))}
        {hoverIndex !== null && (
          <div
            className="absolute left-0 right-0 h-[2px] z-[1]"
            style={{
              top: `${(hoverIndex / (components.length + 1)) * 100}%`,
            }}
          />
        )}
      </div>
    </div>
  );
};

const DraggableComponent = ({
  index,
  component,
  onComponentSelect,
  handleRemoveComponent,
  setHoverIndex,
  getHoverIndex,
  setComponents,
  components,
  updateHtmlContent,
  serializeComponent,
  isHovering, // Receive hover state
}) => {
  const [{ isDragging }, drag] = useDrag({
    type: component.type,
    item: { ...component, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      onClick={() => onComponentSelect(index)}
      className={`relative box-border overflow-hidden ${
        isDragging ? "opacity-50" : "opacity-100"
      } ${isHovering ? "border-2 border-black" : ""}`}
      style={{
        width: component.width,
        height: component.height,
        backgroundColor: component.backgroundColor,
        color: component.textColor,
        fontSize: component.fontSize,
        padding: component.padding,
        margin: component.margin,
        borderWidth: component.borderWidth,
        borderStyle: component.borderStyle,
        borderColor: component.borderColor,
        borderRadius: component.borderRadius,
        textAlign: component.textAlign,
        fontFamily: component.fontFamily,
        backgroundImage: component.backgroundImage
          ? `url(${component.backgroundImage})`
          : "none",
      }}
    >
      {component.type === "navbar" && <Navbar {...component.props} />}
      {component.type === "form" && <FormComponent {...component.props} />}
      {component.type === "image" && <Image {...component.props} />}
      {component.type === "section" && (
        <Section
          leftComponent={component.leftComponent}
          rightComponent={component.rightComponent}
        />
      )}
      {component.type === "footer" && <Footer {...component.props} />}
      {component.type === "box" && <Box {...component.props} />}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleRemoveComponent(index);
        }}
        className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center cursor-pointer z-10"
      >
        &times;
      </button>
    </div>
  );
};

export default DragArea;
