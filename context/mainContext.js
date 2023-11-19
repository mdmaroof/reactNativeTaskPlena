import { useContext, createContext, Children, useState } from "react";

export const ContextProvider = createContext();

export const MainProvider = ({ children }) => {
    const [cartData, setCartData] = useState([]);
    const [fav, setFav] = useState({});
    
    return (
        <ContextProvider.Provider value={{ cartData, setCartData, fav, setFav }}>
            {children}
        </ContextProvider.Provider>
    )
}

export const GetDataContext = () => {
    const { cartData, setCartData, fav, setFav } = useContext(ContextProvider);
    return { cartData, setCartData, fav, setFav }
}