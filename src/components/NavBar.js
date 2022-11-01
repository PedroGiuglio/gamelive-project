import { Link } from "react-router-dom"
import { useCart } from "./context/AddContext"


export const CartWidget = () => {
  const {count} = useCart()

  return (
    <div className="cartWidget">
         <img src="https://img.icons8.com/material-sharp/24/000000/shopping-cart.png"/> 
         <Link to='/cart' className="font-bold">{count}</Link>
    </div>
  )
}


const NavBar = () => {
  return (
    <header>
    <h3><Link to='/'>GameLive-Shop</Link></h3>
    <li><Link to='/PlayStation'>PlayStation</Link></li>
    <li><Link to='/Xbox'>Xbox</Link></li>
    <li><Link to='/Nintendo'>Nintendo</Link></li>
    <Link to='/cart'><CartWidget></CartWidget></Link>
    </header>
  )
}
export default NavBar