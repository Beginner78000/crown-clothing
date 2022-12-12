import { createContext, useState } from "react";
import PRODUCTS from '../data/shop-data.json';

// useContext re-render the JSX in each component he is called when we trigger his update
export const ProductsContext = createContext({
    // Value we want to access
    products: [],
});

// Component
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products, setProducts };

    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}