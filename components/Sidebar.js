import React, { useState } from "react";
import { FaBars, FaEdit, FaChevronDown, FaChevronRight } from "react-icons/fa"; // Importing icons
import DraggableItem from "./DraggableItem";
import { CgComponents } from "react-icons/cg";
import { CgWebsite } from "react-icons/cg";
import { TbColumns1 } from "react-icons/tb";
import { TbColumns2 } from "react-icons/tb";
import { BsTextParagraph } from "react-icons/bs";
import { PiTextboxThin } from "react-icons/pi";
import { PiBatteryEmptyLight } from "react-icons/pi";
import Edit from "./Edit";
import Image from "next/image";
import { ItemTypes } from "@/constants/ItemTypes";

const Sidebar = ({
  selectedComponent,
  handleUpdateComponent,
  components,
  setComponents,
  backgroundImage,
  setBackgroundImage,
}) => {
  const [showItems, setShowItems] = useState(true); // Toggle for "Items" dropdown
  const [showNavbarItems, setShowNavbarItems] = useState(false); // Toggle for "Navbar" dropdown
  const [showNavbarStyles, setShowNavbarStyles] = useState(false); // Toggle for "Navbar Styles" dropdown
  const [showFormStyles, setShowFormStyles] = useState(false); // Toggle for "Form Styles" dropdown
  const [showSectionStyles, setShowSectionStyles] = useState(false);
  const [showFooterStyles, setShowFooterStyles] = useState(false);
  const [showBlogStyles, setShowBlogStyles] = useState(false);
  const [showImageStyles, setShowImageStyles] = useState(false);
  const [showTemplateItems, setShowTemplateItems] = useState(false); // Toggle for "Templates" dropdown

  return (
    <>
      <div className="bg-slate-900 text-white h-full w-64 p-3 border-r border-gray-300 flex flex-col">
        {/* Components Dropdown */}
        {showItems && (
          <div className="p-2  w-full bg-slate-800 mb-3 ">
            <button
              onClick={() => setShowNavbarItems(!showNavbarItems)}
              className="flex items-center bg-none cursor-pointer mb-1 focus:outline-none"
            >
              {showNavbarItems ? (
                <FaChevronDown size={14} />
              ) : (
                <FaChevronRight size={14} />
              )}
              <span className="flex items-center ml-2 gap-2 text-xl">
                <CgComponents />
                Components{" "}
              </span>
            </button>
            {showNavbarItems && (
              <div className="ml-4 mt-2">
                {/* Navbar Styles Dropdown */}
                <button
                  onClick={() => setShowNavbarStyles(!showNavbarStyles)}
                  className="flex items-center bg-none cursor-pointer mb-2 focus:outline-none"
                >
                  {showNavbarStyles ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <span className="ml-2 text-lg">Navbar Styles</span>
                </button>
                {showNavbarStyles && (
                  <div className="ml-4 mt-2">
                    <DraggableItem type="navbarStyle1">
                      <Image
                        src={"/assets/Nav-styles/Navbar1.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                    <DraggableItem type="navbarStyle2">
                      <Image
                        src={"/assets/Nav-styles/Navbar2.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                    <DraggableItem type="navbarStyle3">
                      <Image
                        src={"/assets/Nav-styles/Navbar3.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                    <DraggableItem type="navbarStyle4">
                      <Image
                        src={"/assets/Nav-styles/Navbar4.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                    {/* <DraggableItem type="navbarStyle5"><Image src={'/assets/Nav-styles/Navbar1.png'} width={120} height={120}  /></DraggableItem> */}
                  </div>
                )}

                {/* Form Styles Dropdown */}
                <button
                  onClick={() => setShowFormStyles(!showFormStyles)}
                  className="flex items-center bg-none cursor-pointer mb-2 focus:outline-none"
                >
                  {showFormStyles ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <span className="ml-2 text-lg">Form Styles</span>
                </button>
                {showFormStyles && (
                  <div className="ml-6 mt-2">
                    <DraggableItem type="formStyle1">
                      <Image
                        src={"/assets/Form-styles/Form1.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                    <DraggableItem type="formStyle2">
                      <Image
                        src={"/assets/Form-styles/Form2.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                    <DraggableItem type="formStyle3">
                      <Image
                        src={"/assets/Form-styles/Form3.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                  </div>
                )}

                {/* Section Styles Dropdown */}
                <button
                  onClick={() => setShowSectionStyles(!showSectionStyles)}
                  className="flex items-center bg-none cursor-pointer mb-2 focus:outline-none"
                >
                  {showSectionStyles ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <span className="ml-2 text-lg">Section Styles</span>
                </button>
                {showSectionStyles && (
                  <div className="ml-6 mt-2">
                    <DraggableItem
                      className={
                        "flex flex-col items-center justify-center gap-2"
                      }
                      type="section"
                    >
                      <TbColumns2 className={"text-3xl"} />
                      Double layer
                    </DraggableItem>
                    <DraggableItem
                      className={
                        "flex flex-col items-center justify-center gap-2"
                      }
                      type="section2"
                    >
                      <TbColumns1 className={"text-3xl"} />
                      Single Layer
                    </DraggableItem>
                    <DraggableItem
                      className={
                        "flex flex-col items-center justify-center gap-2"
                      }
                      type="section3"
                    >
                      Section 3
                    </DraggableItem>
                    <DraggableItem
                      className={
                        "flex flex-col items-center justify-center gap-2"
                      }
                      type="section4"
                    >
                      {" "}
                      Section 4
                    </DraggableItem>
                  </div>
                )}

                {/* Other Items */}
                {/* <DraggableItem type="form">Form</DraggableItem> */}

                <button
                  onClick={() => setShowFooterStyles(!showFooterStyles)}
                  className="flex items-center bg-none cursor-pointer mb-2 focus:outline-none"
                >
                  {showFooterStyles ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <span className="ml-2 text-lg">Footers </span>
                </button>
                {showFooterStyles && (
                  <div className="ml-6 mt-2">
                    <DraggableItem type="footer">
                      <Image
                        src={"/assets/Footer-Styles/footer1.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                    <DraggableItem type="footer2">
                      <Image
                        src={"/assets/Footer-Styles/footer2.png"}
                        width={120}
                        height={120}
                      />
                    </DraggableItem>
                  </div>
                )}

                <button
                  onClick={() => setShowBlogStyles(!showBlogStyles)}
                  className="flex items-center bg-none cursor-pointer mb-2 focus:outline-none"
                >
                  {showBlogStyles ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <span className="ml-2 text-lg">Blogs </span>
                </button>
                {showBlogStyles && (
                  <div className="ml-6 mt-2">
                    <DraggableItem
                      type="blogsection"
                      className="flex items-center flex-col justify-center gap-1 w-full"
                    >
                      <Image
                        src={"/assets/Form-styles/Blog1.png"}
                        width={120}
                        height={120}
                      />{" "}
                    </DraggableItem>{" "}
                    {/* Draggable Footer item */}
                    <DraggableItem
                      type="blogsection2"
                      className="flex items-center flex-col justify-center gap-1 w-full"
                    >
                      <Image
                        src={"/assets/Form-styles/Blog1.png"}
                        width={120}
                        height={120}
                      />{" "}
                    </DraggableItem>{" "}
                    {/* Draggable Footer item */}
                  </div>
                )}

                <button
                  onClick={() => setShowImageStyles(!showImageStyles)}
                  className="flex items-center bg-none cursor-pointer mb-2 focus:outline-none"
                >
                  {showImageStyles ? (
                    <FaChevronDown size={14} />
                  ) : (
                    <FaChevronRight size={14} />
                  )}
                  <span className="ml-2 text-lg">Images </span>
                </button>
                {showImageStyles && (
                  <div className="ml-6 mt-2">
                    <DraggableItem
                      type="image3"
                      className="flex items-center flex-col justify-center gap-1 w-full"
                    >
                      <img
                        src={
                          "https://mir-s3-cdn-cf.behance.net/projects/404/35c9e456691765.59b8a9b1d37ca.png"
                        }
                        width={120}
                        height={120}
                      />{" "}
                    </DraggableItem>
                    <DraggableItem type="image4" className="">
                      <img
                        src={
                          "https://i.pinimg.com/236x/ae/47/33/ae473372f6f7d3ba6edd6e1d4dbe07e0.jpg"
                        }
                        width={120}
                        height={50}
                      />{" "}
                    </DraggableItem>
                  </div>
                )}
                <DraggableItem
                  className={"flex items-center justify-center flex-col gap-1"}
                  type="image2"
                >
                  <CgWebsite className={"text-3xl"} />
                  Hero Content
                </DraggableItem>
                <DraggableItem
                  className={"flex items-center justify-center flex-col gap-1"}
                  type="box"
                >
                  <PiBatteryEmptyLight className={"text-3xl"} />
                  Empty Box
                </DraggableItem>
                <DraggableItem
                  className={"flex items-center justify-center flex-col gap-1"}
                  type="text2"
                >
                  <PiTextboxThin className={"text-3xl"} />
                  Text Area
                </DraggableItem>
                <DraggableItem
                  className={"flex items-center justify-center flex-col gap-1"}
                  type="paragraph"
                >
                  <BsTextParagraph className={"text-3xl"} />
                  Paragraph
                </DraggableItem>
              </div>
            )}
          </div>
        )}

        {/* Templates Dropdown */}
        <div className="p-2 w-full bg-slate-800  ">
          <button
            onClick={() => setShowTemplateItems(!showTemplateItems)}
            className="flex items-center bg-none cursor-pointer mt-2 mb-2 focus:outline-none"
          >
            {showTemplateItems ? (
              <FaChevronDown size={14} />
            ) : (
              <FaChevronRight size={14} />
            )}
            <span className="ml-2 flex w-full gap-2 items-center justify-center flex-row text-xl">
              <CgWebsite />
              Templates
            </span>
          </button>
          {showTemplateItems && (
            <div className="ml-2 mt-2">
              <DraggableItem type="templateStyle1">Template 1</DraggableItem>
              <DraggableItem type="templateStyle2">Template 2</DraggableItem>
              <DraggableItem type="templateStyle3">Template 3</DraggableItem>
              <DraggableItem type="templateStyle4">Template 4</DraggableItem>
              <DraggableItem type="templateStyle5">Template 5</DraggableItem>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
