import { useState } from "react";
import { projectAuth } from "../firebase/config";

export default function useSignup() {

  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  const signup = async (email, password, displayName) => {

    setError(null)
    setIsPending(true)

    try {
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      console.log(res)

      if (!res) {
        throw new Error("Could not create new user")
      }

      console.log("user created")

      await res.user.updateProfile({ displayName })

      setIsPending(false)
      setError(null)

    }

    catch (err) {

      console.log(err.message)
      setError(err.message)
      setIsPending(false)

    }

  }

  return { error, isPending, signup }
}
