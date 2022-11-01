import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { useCart } from "./context/AddContext";


const ItemDetail = () => {

  const { id } = useParams()
  const { id: idParam} = useParams()

  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true)
  const {addToCart} = useCart()

  useEffect(() => {
    getProduct().then(response =>{
      setLoading(false)
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
        resolve(item.find(i => i.id == idParam))
      }, 3000);
    })
  }

  if (loading) {
    return (
      <div className="spinner-container">
      <div className="loading-spinner"></div>
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addHandler}>Agregar al Carrito</button>
      </div>      
</div>
  )
}

export default ItemDetail