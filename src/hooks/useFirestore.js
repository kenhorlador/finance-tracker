import { useState, useEffect, useReducer } from 'react'
import { projectFirestore, timestamp } from '../firebase/config'

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

    case 'DELETED_DOCUMENT':
      return { success: true, doc: null, isPending: false, error: null }

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
    dispatch({ type: 'IS_PENDING' })
    try {
      const createdAt = timestamp.fromDate(new Date())
      const addedDoc = await ref.add({ ...doc, createdAt })
      dispatchNC({ type: 'ADDED_DOC', payload: addedDoc })
    }

    catch (err) {
      dispatchNC({ type: 'ERROR', payload: err.message })
    }
  }


  const deleteDoc = async (id) => {
    dispatch({ type: 'IS_PENDING'})

    try {
      await ref.doc(id).delete()
      dispatchNC({ type: 'DELETED_DOCUMENT'})
    }

    catch(err) {
      dispatchNC({ type: 'ERROR', payload: "Could not remove item"})
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])


  return { addDoc, deleteDoc, response }
}

export { useFirestore }
