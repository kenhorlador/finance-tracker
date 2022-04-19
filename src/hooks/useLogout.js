import { useAuthContext } from "./useAuthContext"
import { useState } from "react"
import { projectAuth } from "../firebase/config"

export const useLogout = () => {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  setError(null)
  setIsPending(true)

  // sign the user out
  const logout = async () => {

    try {
      await projectAuth.signOut()

      dispatch({ type: 'LOGOUT'})

      setError(null)
      setIsPending(false)
    }

    catch(err) {
      setIsPending(false)
      setError(err.message)
    }
  }

  return { logout, error, isPending }
}
