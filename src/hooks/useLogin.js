import { useAuthContext } from "./useAuthContext"
import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"

const useLogin = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  // sign the user out
  const login = async (email, password) => {

    setError(null)
    setIsPending(true)

    try {
      const response = await projectAuth.signInWithEmailAndPassword(email, password)

      dispatch({ type: 'LOGIN', payload: response.user })

      if (!isCancelled) {
        setError(null)
        setIsPending(false)
      }
    }

    catch(err) {
      if (!isCancelled) {
        setIsPending(false)
        setError(err.message)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { login, error, isPending }
}

export { useLogin }
