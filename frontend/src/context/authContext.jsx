import { Children, createContext, useContext, useState } from "react"

export const AuthContext = createContext()

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  )

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  )
}




// import { createContext,useContext,useState } from "react";

// export const AuthContext =createContext();

// export const useAuthContext =()=>{
//     return useContext(AuthContext);
// }

// export const AuthContextProvider = ({ children }) => {
//     const getUserFromStorage = () => {
//         try {
//             const storedUser = localStorage.getItem("user");
//             return storedUser ? JSON.parse(storedUser) : null; // Only parse if it's valid
//         } catch (error) {
//             console.error("Error parsing stored user:", error);
//             return null; // Fallback to null if there's an error
//         }
//     };

//     const [authUser, setAuthUser] = useState(getUserFromStorage());

//     return (
//         <AuthContext.Provider value={{ authUser, setAuthUser }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

