import { createContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseinit";

export const UserContext = createContext(null);

const UserContextComponent = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  const value = { user, loading, error };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextComponent;
