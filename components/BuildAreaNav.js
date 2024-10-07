// AreaNav.js
import React from "react";
import DownloadButton from "@/components/DownloadButton";
import PreviewButton from "@/components/PreviewButton";
import SaveButton from "@/components/SaveButton";
import DeleteButton from "@/components/DeleteButton";

const AreaNav = ({ htmlContent, cssContent, handleSetHtmlContent, components, selectedComponentIndex,setComponents,handleDeleteComponent  }) => {
  return (
    <div className="w-full flex justify-between items-center bg-slate-950 shadow-lg h-auto text-white p-2">
      <h1 className="text-sm font-bold">PageCrafter</h1>
      <div className="flex space-x-4 ">

        <DownloadButton
          htmlContent={htmlContent}
          cssContent={cssContent}
          handleSetHtmlContent={handleSetHtmlContent}
        />
        <PreviewButton
          htmlContent={htmlContent}
          cssContent={cssContent}
          handleSetHtmlContent={handleSetHtmlContent}
        />
        <SaveButton components={components} />

      </div>
    </div>
  );
};

export default AreaNav;
