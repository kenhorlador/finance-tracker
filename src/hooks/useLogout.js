import { useAuthContext } from "./useAuthContext"
import { useState, useEffect } from "react"
import { projectAuth } from "../firebase/config"

const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  // sign the user out
  const logout = async () => {

    setError(null)
    setIsPending(true)

    try {
      await projectAuth.signOut()

      dispatch({ type: 'LOGOUT'})

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

  return { logout, error, isPending }
}

export { useLogout }
