import { AuthContext } from "../context/AuthContext.js";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("Could not use useAuthContext outside authContext: useAuthContext must be inside AuthContextProvider")
  }

  return context
}
