import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export default function useSignup() {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {

    setError(null)
    setIsPending(true)

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error("Could not create new user")
      }

      await res.user.updateProfile({ displayName })

      // dispatch a login action
      dispatch({type: 'LOGIN', payload: res.user})

      setIsPending(false)
      setError(null)

    }

    catch (err) {

      setError(err.message)
      setIsPending(false)

    }

  }

  return { error, isPending, signup }
}
