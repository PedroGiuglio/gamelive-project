import { createContext, useContext, useState } from "react";

const CartContext = createContext({
    products: [],
    addToCart: () => {},
    clearCart: () => {},
    counter: 0,
    getTotal: () => {},
    getCostoTotal: ()=> {}
});

const useCart = () => {
    return useContext( CartContext)
}


const CartContextProvider = ({ children }) => {
    
    const [products, setProducts] = useState([])

    const addToCart = (product, counter) => {
        if (isInCart(product)){
            const itemEnc = products.find(p=>p.title===product.title)
            itemEnc.stock += counter        
            console.log("El item cart nuevo", product)     
        } else {
            console.log("El item cart nuevo", product)
            product.stock = counter
            setProducts(products => products.concat(product))
        }
     }
    
    const clearCart = () => {
    setProducts([])
    }

    const getTotal = () => {
        const quantitys = products.map(ic => ic.stock)
        const total = quantitys.reduce((total, cant) => total + cant, 0 )
        return total
    }
   
    const getCostoTotal = () =>{
        const subtotales = products.map(p => p.price)
        const initialValue = 0;
        const total = subtotales.reduce((total, cant) => Number(total) + Number(cant), initialValue )
        console.log(total)
        return Math.round(total) 
        
             
      }

    const isInCart = (producto) =>{
        return products.some(p=>p.title===producto.title)
    }

    const context = {
        products: products,
        addToCart: addToCart,
        clearCart: clearCart,
        counter: products.length,
        getTotal: getTotal,
        getCostoTotal: getCostoTotal,
    }

    return (
        <CartContext.Provider value ={ context }>
            { children }
        </CartContext.Provider>
    )
}

export { useCart, CartContextProvider}