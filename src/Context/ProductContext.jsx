import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();
// const APi = "https://arshil-eyewear.onrender.com/Eyeglassrangeapi/"
const AppProvider = ({ children }) => {

    // const getSingleProduct = async (url) => {
    //     try {
    //         const res = await axios.get(url);
    //         const singleproduct = await res.data:
    //     }
    // };
    // useEffect(() => {
    //     getProducts(API);
    // },[])
    return (<AppContext.Provider >{children}</AppContext.Provider>);

    // value={{ ...state,getSingleProduct }}
    const useProductContext = () => {
        return useContext(AppContext);
    }
};

export {AppProvider};