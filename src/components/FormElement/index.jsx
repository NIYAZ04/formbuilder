import React from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import { ElementTypesText } from '../../constants/elementTypes'
import { openDrawer } from '../../store/drawerSlice'
import { removeEditorElement } from '../../store/globalSlice'
import { AiFillStar } from 'react-icons/ai'; // Importing 5-star rating icon


const TextInput = ({ ...props }) => {
  const { placeHolder } = props
  return (
    <div className="px-4 py-2  flex flex-col gap-1">
      {placeHolder}
      <input
        type="text"
        className="bg-white p-1 rounded-lg border border-slate-300"
      />
    </div>
  )
}

const TextArea = ({ ...props }) => {
  const { placeHolder } = props
  return (
    <div className="px-4 py-2  flex flex-col gap-1">
      {placeHolder}
      <textarea
        rows={3}
        className="bg-white p-1 rounded-lg border border-slate-300"
      />
    </div>
  )
}

const DropDown = ({ ...props }) => {
  const { placeHolder, options } = props

  return (
    <div className="px-4 py-2 flex flex-col gap-1">
      {placeHolder}
      <select className="bg-white p-2 rounded-lg border border-slate-300">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

const StarRating = ({ ...props }) => {
  const [rating, setRating] = React.useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="px-4 py-2 flex flex-col gap-1">
      <div>Star Rating: {rating}</div>
      <div>
        {[...Array(5)].map((_, index) => (
          <AiFillStar
            key={index}
            onClick={() => handleStarClick(index)}
            style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
          />
        ))}
      </div>
    </div>
  );
};

const FileUpload = ({ ...props }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle the file upload logic here, for example:
    console.log('Uploaded file:', file);
  };

  return (
    <div className="px-4 py-2 flex flex-col gap-1">
      <div>File Upload</div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};


const SubmitButton = () => {
  const handleSubmit = () => {
    // Implement your submit logic here
    console.log('Form submitted');
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

const ElementTypes = {
  'text-input': TextInput,
  'text-area': TextArea,
  dropdown: DropDown,
  'star-rating': StarRating, // Adding 5-star rating component to ElementTypes
  'file-upload': FileUpload, // Adding file upload component to ElementTypes
  submit: SubmitButton, // Adding submit button to ElementTypes

}

const FormElement = ({ withToolkit, ...props }) => {
  const { type, id } = props

  const dispatch = useDispatch()

  const deleteClick = () => {
    dispatch(removeEditorElement({ id }))
  }

  const editClick = () => {
    dispatch(openDrawer({ id }))
  }

  return (
    <>
      {ElementTypes[type]({ ...props })}
      {withToolkit && (
        <div className="group absolute inset-0 bg-transparent opacity-0 hover:opacity-100 flex p-2 px-10">
          <div className="flex gap-4 p-1 items-center text-lg h-max ml-auto">
            <div className="h-max p-1 px-2 rounded text-xs font-bold text-white bg-slate-900">
              {ElementTypesText[type]}
            </div>
            <button onClick={editClick}>
              <AiOutlineEdit />
            </button>
            <button onClick={deleteClick}>
              <RiDeleteBin5Line />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default FormElement