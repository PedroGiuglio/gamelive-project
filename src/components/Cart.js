import { useCart } from "./context/AddContext"

const Cart = () => {

  const {products, clearCart, count} = useCart()  
  return (
    <div className="sectionCart">
        <div className="sectionCartDetail">
        <div className="font-bold mt-5 text-black text-xl">Carrito ({count})</div>
        <div className="linea"></div>
        {products.map( (p, i) => <li className="productsCart" key={i}>
          <img src={p.img} className='imgCartSize'></img>
          <h1> {p.title} </h1> 
          <h3 className="priceDetail"> $ {p.price} </h3>
        </li>)}
        <div className="sectionButton">
        <button onClick={clearCart} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded buttonClear">Limpiar Carrito</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Continuar Compra</button>
        </div>
    </div>
    </div>
  )
}
export default Cart