"use client"

import React, { createContext, useContext, useState, ReactNode, Children } from "react";

const AppContext = createContext<any>(null)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [qno, setQno] = useState<number | null>(1);
  const [qid, setQid] = useState<string | null>("q1");
  const [answered, setAnswered] = useState<any | null>({});
  const [flagged,setFlagged] = useState<[] | null>([]);
  const [modal,setModal] = useState<boolean>(false)

  return (
    <AppContext.Provider value={{ qno,setQno,qid,setQid,answered,setAnswered,flagged,setFlagged,modal,setModal}}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
    const context = useContext(AppContext);
    return context;
  }