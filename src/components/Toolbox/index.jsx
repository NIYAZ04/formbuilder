import React from 'react'
import DraggableTool from '../DraggableTool'
import { MdTextRotationNone, MdOutlineTextRotateVertical } from 'react-icons/md'
import { IoIosArrowDropdown } from 'react-icons/io'
import { AiFillStar } from 'react-icons/ai'; // Importing 5-star rating icon
import { BsFileEarmarkArrowUp } from 'react-icons/bs'; // Importing file upload icon


const Toolbox = () => {
  return (
    <div className="flex flex-col flex-1 gap-4 w-full max-w-xs min-w-[20rem]">
      <h1 className="text-center text-2xl">ITEMS</h1>
      <DraggableTool type="text-input">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          <MdTextRotationNone className="text-xl" /> Text Input
        </div>
      </DraggableTool>
      <DraggableTool type="text-area">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          <MdOutlineTextRotateVertical className="text-xl" />
          Text Area
        </div>
      </DraggableTool>
      <DraggableTool type="dropdown">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          <IoIosArrowDropdown className="text-xl" />
          Dropdown
        </div>
      </DraggableTool>
      {/*adding more items*/}
      <DraggableTool type="star-rating">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          <AiFillStar className="text-xl" />
          5-Star Rating
        </div>
      </DraggableTool>
      <DraggableTool type="file-upload">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          <BsFileEarmarkArrowUp className="text-xl" />
          File Upload
        </div>
      </DraggableTool>
      <DraggableTool type="submit">
        <div className="cursor-pointer m-1.5 p-1.5 border-2 border-dashed border-slate-300 flex items-center">
          Submit Button
        </div>
      </DraggableTool>
      
    </div>
  )
}

export default Toolbox