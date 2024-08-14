import React, { useContext } from "react";
import { useSelector } from "react-redux";

const SessionContext = React.createContext<any>({});

export const useSession = () => {
  const context = useContext(SessionContext);

  return context;
};

export const SessionProvider = ({ children }: any) => {
  const isLoggedIn = useSelector((s: any) => s.auth.isLoggedIn);

  return (
    <SessionContext.Provider value={{ isLoggedIn }}>
      {children}
    </SessionContext.Provider>
  );
};
