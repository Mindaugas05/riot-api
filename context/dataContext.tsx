'use client';

import { ReactNode, createContext, useState, Dispatch, SetStateAction, useContext } from "react";

export const DataContext = createContext<DataContextType | null>(null)

type DataContextProviderProps = {
    children: ReactNode;    
}

type DataContextType = {
    data: any;
    setData: Dispatch<SetStateAction<any>>;
}

export default function DataContextProvider({
    children
}: DataContextProviderProps) {
        const [data, setData] = useState(null);

    return (
        <DataContext.Provider value={{data, setData}}>
            {children}
        </DataContext.Provider>
    )
}

export function useDataContext() {
    const context = useContext(DataContext)
    if (!context) {
        throw new Error("useDataContext must be used within DataContectProvider")
    }
    return context
}
// this is a test contextapi PS ts is hard