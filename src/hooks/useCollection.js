import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/config'

const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    let unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id })
      })

      setDocuments(results)
      setError(null)
    }, error => setError(error.message))

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection])

  return { documents, error }
}

export { useCollection }
