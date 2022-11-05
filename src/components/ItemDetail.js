import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useCart } from "./context/AddContext";
import Clicker from "./Clicker";


const ItemDetail = () => {

  const { id } = useParams()
  const { data: idParam} = useParams()

  const [item, setItem] = useState([]);
  const [loading2, setLoading2] = useState(true)
  const {addToCart} = useCart()

  useEffect(() => {
    getProduct().then(response =>{
      setLoading2(false)
    })
  }, [])

  const getProduct = () => {
    const db = getFirestore()
    const productsCollection =  collection(db, 'items')
    const docRef = doc( productsCollection, id)
    getDoc( docRef ).then( res => {
      setItem(res.data())
    })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(item.find(i => i.data == idParam))
      }, 2000);
    })
  }

  if (loading2) {
    return (
      <div className="itemListDetail">
      <div className="backImg">
        <img className="urlImg" src='https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg'></img>
      </div>
      <div className="sectionTitle">
        <h2>...</h2>
        <h4>$...</h4>
      </div>
      <div className="sectionStock">
        <p>Stock disponible: ...</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Agregar al Carrito</button>
      </div>      
</div>
    )
  }

  const addHandler = () => {
    addToCart(item)
  }
  


  return (
    <div className="itemListDetail">
      <div className="backImg">
        <img className="urlImg" src={item.img}></img>
      </div>
      <div className="sectionTitle">
        <h2>{item.title}</h2>
        <h4>${item.price}</h4>
      </div>
      <div className="sectionStock">
        <p>Stock disponible: {item.stock}</p>
        <Clicker/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded buttton" onClick={addHandler}>Agregar al Carrito</button>
      </div>      
</div>
  )
}

export default ItemDetail