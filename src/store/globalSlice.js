import { createSlice } from '@reduxjs/toolkit'
import { v4 as generateID } from 'uuid'

const generateEditorElement = (type) => {
  const commonFields = {
    id: generateID(),
    type,
    placeHolder: 'Placeholder Label',
  }

  switch (type) {
    case 'text-input':
    case 'text-area':
      return commonFields
    case 'dropdown':
      return {
        ...commonFields,
        options: [
          {
            label: 'Option 1',
            value: '',
          },
          {
            label: 'Option 2',
            value: '',
          },
          {
            label: 'Option 3',
            value: '',
          },
        ],
      };
    case 'star-rating':
      return {
        ...commonFields,
        rating: 0, // Default rating value
      };
    case 'file-upload':
      return {
        ...commonFields,
        file: null, // To store uploaded file
        uploadFile: (file) => {
          // Method to handle file upload
          console.log('Uploading file:', file);
          // You can perform additional logic here, like uploading the file to a server
        },
      };
      case 'submit':
      return commonFields; // No additional data needed for submit button
    default:
      return null
  }
}

export const globalSlice = createSlice({
  name: 'global',
  initialState: {
    editorElements: [],
  },
  reducers: {
    insertEditorElement: (state, action) => {
      const { type } = action.payload
      state.editorElements.push(generateEditorElement(type))
    },

    insertAtEditorElement: (state, action) => {
      const { index, type } = action.payload
      state.editorElements.splice(index, 0, generateEditorElement(type))
    },

    moveEditorElement: (state, action) => {
      const { from, to } = action.payload
      const editorElements = [...state.editorElements]
      const element = editorElements[from]
      editorElements.splice(from, 1)
      editorElements.splice(to, 0, element)
      state.editorElements = editorElements
    },

    removeEditorElement: (state, action) => {
      const { id } = action.payload
      state.editorElements = state.editorElements.filter(
        (element) => element.id !== id
      )
    },

    updateEditorElement: (state, action) => {
      const { id, element } = action.payload
      const editorElements = [...state.editorElements]
      const index = editorElements.findIndex((element) => element.id === id)
      editorElements[index] = element
      state.editorElements = editorElements
    },
  },
})

export const {
  insertEditorElement,
  moveEditorElement,
  insertAtEditorElement,
  removeEditorElement,
  updateEditorElement,
} = globalSlice.actions
export default globalSlice.reducer