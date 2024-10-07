import React, { useRef, useState, useEffect } from "react";
import { useDrop, useDrag } from "react-dnd";
import Image from "@/Web-components/Image-componets/Image";
import Images2 from "@/Web-components/Image-componets/Image2";
import Image3 from "@/Web-components/Image-componets/Image3";
import Image4 from "@/Web-components/Image-componets/Image4";
import Section from "@/Web-components/Section";
import Section2 from "@/Web-components/Section2";
import Section3 from "@/Web-components/Section3";
import Section4 from "@/Web-components/Section4";
import Footer from "@/Web-components/footerStyles/Footer";
import Footer2 from "@/Web-components/footerStyles/Footer2";
import Box from "@/Web-components/Box";
import axios from "axios";
import TextComponent from "@/Web-components/Text-Components/TextComponent";
import TextComponent2 from "@/Web-components/Text-Components/TextComponent2";
import { Checkbox } from "flowbite-react";
import Navbar1 from "@/Web-components/navStyles/Navbar1";
import Navbar2 from "@/Web-components/navStyles/Navbar2";
import Navbar3 from "@/Web-components/navStyles/Navbar3";
import Navbar4 from "@/Web-components/navStyles/Navbar4";
import FormComponent from "@/Web-components/formStyles/FormComponent1";
import Template1 from "@/Web-components/templateStyles/template1";
import Template2 from "@/Web-components/templateStyles/template2";
import Template3 from "@/Web-components/templateStyles/template3";
import Template4 from "@/Web-components/templateStyles/template4";
import Template5 from "@/Web-components/templateStyles/template5";

import FormComponent1 from "@/Web-components/formStyles/FormComponent1";
import Form2 from "@/Web-components/formStyles/Form2";
import Form3 from "@/Web-components/formStyles/Form3";
import TextBoxComponent from "@/Web-components/Text-Components/TextComponent";
import ParagraphComponent from "@/Web-components/Paragraph";
import BlogCard from "@/Web-components/BlogCard";
import BlogSection from "@/Web-components/BlogSection";
import BlogSection2 from "@/Web-components/BlogSection2";
// import { ItemTypes } from "@/constants/ItemTypes";

const ItemTypes = {
  NAVBAR: "navbar",
  FORM: "form",
  IMAGE: "image",
  IMAGE2: "image2",
  IMAGE3: "image3",
  IMAGE4: "image4",
  SECTION: "section",
  SECTION2: "section2",
  SECTION3: "section3",
  SECTION4: "section4",
  FOOTER: "footer",
  FOOTER2: "footer2",
  BOX: "box",
  CHECKBOX: "checkbox",
  TEXT: 'text',
  TEXT2: 'text2',
  BlogSection: 'blogsection',
  BlogSection2: 'blogsection2',
  Paragraph: 'paragraph',


  NAVBARSTYLE1: "navbarStyle1",
  NAVBARSTYLE2: "navbarStyle2",
  NAVBARSTYLE3: "navbarStyle3",
  NAVBARSTYLE4: "navbarStyle4",
  NAVBARSTYLE5: "navbarStyle5",

  FORMSTYLE1: "formStyle1",
  FORMSTYLE2: "formStyle2",
  FORMSTYLE3: "formStyle3",
  FORMSTYLE4: "formStyle4",
  FORMSTYLE5: "formStyle5",

  TEMPLATESTYLE1: "templateStyle1",
  TEMPLATESTYLE2: "templateStyle2",
  TEMPLATESTYLE3: "templateStyle3",
  TEMPLATESTYLE4: "templateStyle4",
  TEMPLATESTYLE5: "templateStyle5",
};

const DragArea = ({ backgroundColor, components, setComponents, onComponentSelect, setHtmlContent, selectedComponentIndex, setBackgroundColor, setBackgroundImage }) => {
  const backgroundClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
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
  const handleDropIntoSection2 = (sectionIndex, item, side) => {
    const newComponents = [...components];
    const component = newComponents[sectionIndex];
    if (component && component.type === "section2") {
      if (side === "left") {
        component.leftComponent = serializeComponent(item);
      } else {
        component.rightComponent = serializeComponent(item);
      }
      setComponents(newComponents);
    }
  };
  const handleDropIntoSection3 = (sectionIndex, item, side) => {
    const newComponents = [...components];
    const component = newComponents[sectionIndex];
    if (component && component.type === "section3") {
      if (side === "left") {
        component.leftComponent = serializeComponent(item);
      } else {
        component.rightComponent = serializeComponent(item);
      }
      setComponents(newComponents);
    }
  };
  const handleDropIntoSection4 = (sectionIndex, item, side) => {
    const newComponents = [...components];
    const component = newComponents[sectionIndex];
    if (component && component.type === "section4") {
      if (side === "left") {
        component.leftComponent = serializeComponent(item);
      } else {
        component.rightComponent = serializeComponent(item);
      }
      setComponents(newComponents);
    }
  };

  const handleTextChange = (id, newText) => {
    setComponents((prevComponents) =>
      prevComponents.map((comp) =>
        comp.id === id ? { ...comp, text: newText } : comp
      )
    );
  };

  const serializeComponent = (component) => ({
    type: component.type,
    props: component.props,
  });

  const deserializeComponent = (component, index) => {
    switch (component.type) {
      case "navbarStyle1":
        return <Navbar1 {...component.props} />;
      case "navbarStyle2":
        return <Navbar2 {...component.props} />;
      case "navbarStyle3":
        return <Navbar3 {...component.props} />;
      case "navbarStyle4":
        return <Navbar4 {...component.props} />;
      case "navbarStyle5":
        return <Navbar5 {...component.props} />;
      
      case "blogsection":
        return <BlogSection {...component.props} />;
      case "blogsection2":
        return <BlogSection2 {...component.props} />;

        case "paragraph":
          return <ParagraphComponent {...component.props} />;

      case "templateStyle1":
        return <Template1 {...component.props} />;
      case "templateStyle2":
        return <Template2 {...component.props} />;
      case "templateStyle3":
        return <Template3 {...component.props} />;
      case "templateStyle4":
        return <Template4 {...component.props} />;
      case "templateStyle5":
        return <Template5 {...component.props} />;


      case "formStyle1":
        return <FormComponent1 {...component.props} />;
      case "formStyle2":
        return <Form2 {...component.props} />;
      case "formStyle3":
        return <Form3 {...component.props} />;
      case "text":
        return <TextComponent text={component.text}
          onTextChange={(newText) => handleTextChange(index, newText)} {...component.props} />;
      case "text2":
        return <TextComponent2 text={component.text}
          onTextChange={(newText) => handleTextChange(index, newText)} {...component.props} />;
      case "image":
        return <Image {...component.props} />;
      case "image2":
        return <Images2 {...component.props} />;
      case "image3":
        return <Image3 {...component.props} />;
      case "image4":
        return <Image4 {...component.props} />;
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
      case "section2":
        return (
          <Section2
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
              handleDropIntoSection2(component.index, item, "left")
            }
            onDropRight={(item) =>
              handleDropIntoSection2(component.index, item, "right")
            }
          />
        );
      case "section3":
        return (
          <Section3
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
              handleDropIntoSection3(component.index, item, "left")
            }
            onDropRight={(item) =>
              handleDropIntoSection3(component.index, item, "right")
            }
          />
        );
      case "section4":
        return (
          <Section4
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
              handleDropIntoSection4(component.index, item, "left")
            }
            onDropRight={(item) =>
              handleDropIntoSection4(component.index, item, "right")
            }
          />
        );
      case "footer":
        return <Footer {...component.props} />;
      case "footer2":
        return <Footer2 {...component.props} />;
      case "box":
        return <Box {...component.props} />;
      case "checkbox":
        return <Checkbox {...component.props} />;
     
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
    drop: (item, monitor) => {
      const didDrop = monitor.didDrop();
      if (didDrop) {
        return;
      }
      if (hoverIndex !== null) {
        moveElement(hoverIndex, item);
        setHoverIndex(null);
        updateHtmlContent();
      } else {
        setComponents((prevComponents) => [
          ...prevComponents,
          {
            type: item.type,
            text: item.type === ItemTypes.TEXT ? 'Enter your text here' : 'Navbar',
          },
        ]);
      }
    },

    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
    hover: (item, monitor) => {

      const clientOffset = monitor.getClientOffset();
      if (clientOffset) {
        const hoverIndex = getHoverIndex(clientOffset);
        setHoverIndex(hoverIndex);
      }
    },
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
      style={{
        flex: 1,
        padding: "20px",
        border: "1px solid #ccc",
        minHeight: "100vh",
        background: isOver ? "#f0f0f0" : "#eeee",
        position: "relative",
        backgroundColor: backgroundColor, // Apply the backgroundColor prop here
      }}
      className={`drag-area ${isOver ? "hover" : ""} ${backgroundClass}`}
    >
      <div ref={dropAreaRef} style={{ position: "relative" }}>
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
            deserializeComponent={deserializeComponent}
            handleDropIntoSection={handleDropIntoSection}
            handleDropIntoSection2={handleDropIntoSection2}
            handleDropIntoSection3={handleDropIntoSection3}
            handleDropIntoSection4={handleDropIntoSection4}
            selectedComponentIndex={selectedComponentIndex}
            isHovering={index === hoverIndex}
            handleTextChange={handleTextChange}
          />
        ))}
        {hoverIndex !== null && (
          <div
            style={{
              position: "absolute",
              top: (hoverIndex / (components.length + 1)) * 100 + "%",
              left: 0,
              right: 0,
              zIndex: 1,
              backgroundColor: "#000",
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
  deserializeComponent,
  handleDropIntoSection,
  handleDropIntoSection2,
  handleDropIntoSection3,
  handleDropIntoSection4,
  isHovering,
  selectedComponentIndex,
  handleTextChange,
  handleTextDrop,
  handleTextDragOver
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
      style={{
        position: "relative",
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
        overflow: "hidden",
        boxSizing: "border-box",
        boxShadow: index === selectedComponentIndex ? "0 0 10px #00f" : "none",
        zIndex: index === selectedComponentIndex ? 1 : "auto",
      }}
    >
      {component.type === "navbarStyle1" && <Navbar1 {...component.props} />}
      {component.type === "navbarStyle2" && <Navbar2 {...component.props} />}
      {component.type === "navbarStyle3" && <Navbar3 {...component.props} />}
      {component.type === "navbarStyle4" && <Navbar4 {...component.props} />}
      {component.type === "navbarStyle5" && <Navbar5 {...component.props} />}

      {component.type === "blogcard" && <BlogCard {...component.props} />}
      {component.type === "blogsection" && <BlogSection {...component.props} />}
      {component.type === "blogsection2" && <BlogSection2 {...component.props} />}
      {component.type === "templateStyle1" && <Template1 {...component.props} />}
      {component.type === "templateStyle2" && <Template2 {...component.props} />}
      {component.type === "templateStyle3" && <Template3 {...component.props} />}
      {component.type === "templateStyle4" && <Template4 {...component.props} />}
      {component.type === "templateStyle5" && <Template5 {...component.props} />}
      {component.type === "formStyle1" && <FormComponent1 {...component.props} />}
      {component.type === "formStyle2" && <Form2 {...component.props} />}
      {component.type === "formStyle3" && <Form3 {...component.props} />}
      {component.type === "image" && <Image {...component.props} />}
      {component.type === "image2" && <Images2 {...component.props} />}
      {component.type === "image3" && <Image3 {...component.props} />}
      {component.type === "image4" && <Image4 {...component.props} />}
      
      {component.type === "paragraph" && <ParagraphComponent {...component.props} />}

      {component.type === "text" && <TextComponent text={component.text}
        onTextChange={(newText) => handleTextChange(index, newText)} {...component.props} />}
      {component.type === "text2" && <TextComponent2 text={component.text}
        onTextChange={(newText) => handleTextChange(index, newText)} {...component.props} />}
      {component.type === "section" && (
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
          onDropLeft={(item) => handleDropIntoSection(index, item, "left")}
          onDropRight={(item) => handleDropIntoSection(index, item, "right")}
        />
      )}
      {component.type === "section2" && (
        <Section2
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
          onDropLeft={(item) => handleDropIntoSection2(index, item, "left")}
          onDropRight={(item) => handleDropIntoSection2(index, item, "right")}
        />
      )}
      {component.type === "section3" && (
        <Section3
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
          onDropLeft={(item) => handleDropIntoSection3(index, item, "left")}
          onDropRight={(item) => handleDropIntoSection3(index, item, "right")}
        />
      )}
      {component.type === "section4" && (
        <Section4
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
          onDropLeft={(item) => handleDropIntoSection4(index, item, "left")}
          onDropRight={(item) => handleDropIntoSection4(index, item, "right")}
        />
      )}
      {component.type === "footer" && <Footer {...component.props} />}
      {component.type === "footer2" && <Footer2 {...component.props} />}
      {component.type === "box" && <Box {...component.props} />}
      {component.type === "checkbox" && <Checkbox {...component.props} />}
    </div>
  );
};

export default DragArea;