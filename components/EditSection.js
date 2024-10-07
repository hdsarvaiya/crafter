import React from "react";
import Edit from '@/components/Edit';



const EditBar = ({selectedComponent, handleUpdateComponent, components, setComponents, backgroundImage, setBackgroundImage,handleDeleteComponent,selectedComponentIndex}) => {

    return(
        <>
        <div className="p-2 w-[15vw] bg-slate-900">
          {/* <h3>Edit Component</h3> */}
          <Edit
  selectedComponent={selectedComponent}
  selectedComponentIndex={selectedComponentIndex}
  components={components}
  setComponents={setComponents}
  handleDeleteComponent={handleDeleteComponent}
  handleUpdateComponent={handleUpdateComponent}
          

          />
        </div>
        </>
    )
}

export default EditBar;