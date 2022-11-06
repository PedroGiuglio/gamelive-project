import { useCart } from "./context/AddContext"

const Cart = () => {

  const {products, clearCart, counter, getTotal, getCostoTotal} = useCart()  
  return (
    <div className="sectionCart">
        <div className="sectionCartDetail">
        <div className="font-bold mt-5 text-black text-xl text-center">Carrito ({counter})</div>
        <di className='titlesProducts'>
          <li>Producto</li>
          <li>Precio</li>
        </di>
        <div className="linea"></div>
        {products.map( (p, i) => <li className="productsCart" key={p.id}>
          <img src={p.img} className='imgCartSize'></img>
          <h1> {p.title} </h1> 
          <h3 className="priceDetail"> $ {p.price} </h3>
        </li>)}
        <div className="countTotal">
          <h3>Total: $ {getCostoTotal()}</h3>
        </div>
        <div className="sectionButton">
        <button onClick={clearCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded buttonClear">X   Limpiar Carrito</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded buttonCheck">CHECKOUT</button>
        <div className="linea"></div>
        </div>
       
    </div>
    
    </div>
  )
}
export default Cart