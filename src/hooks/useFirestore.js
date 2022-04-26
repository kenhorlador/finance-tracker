import { useState, useEffect, useReducer } from 'react'
import { projectFirestore } from '../firebase/config'

const initialState = {
  doc : null,
  error : null,
  success : false,
  isPending: false
}

const firestoreReducer = (state, action) => {
  switch (action.type) {

    case 'IS_PENDING':
      return { success: false, doc: null, isPending: true, error: null }

    case 'ERROR':
      return { success: false, doc: null, isPending: false, error: action.payload }

    case 'ADDED_DOC':
      return { success: true, doc: action.payload, isPending: false, error: null }

    default:
      return state
  }
}

const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState)
  const [isCancelled, setIsCancelled] = useState(false)

  // collection ref
  const ref = projectFirestore.collection(collection)

  // dispatch if not cancelled
  const dispatchNC = (action) => {
    if (!isCancelled) {
      dispatch(action)
    }
  }

  const addDoc = async (doc) => {
    try {
      const addedDoc = await ref.add(doc)
      dispatchNC({ type: 'ADD_DOC', payload: addedDoc })
    }

    catch (err) {
      dispatchNC({ type: 'ERROR' })
    }
  }


  const deleteDoc = (id) => {

  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])


  return { addDoc, deleteDoc, response }
}

export default useFirestore
