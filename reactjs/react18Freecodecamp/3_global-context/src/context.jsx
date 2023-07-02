import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext()

// custom hook
// export const useGlobalContext = () => useContext(GlobalContext)

const AppContext = ({children}) => {
    const [name, setName] = useState('peter')
    // return <GlobalContext.Provider value={{name: name, setName: setName}}></GlobalContext.Provider>
    return <GlobalContext.Provider value={{name, setName}}>
        {children}
    </GlobalContext.Provider>
}

export default AppContext