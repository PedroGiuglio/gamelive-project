import { collection, docs, getDocs, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { CartContextProvider, useCart } from "./context/AddContext";


export const Card = ({id, title, price, img}) => {
  return (
    <Link to={`/item/${id}`}>
    <div className="card card-compact w-96 bg-base-100 shadow-xl itemCard">
     <figure className="urlImg"><img src={img} alt="videogames" /></figure>
  <div className="card-body cardExtension">
    <h2 className="card-title uppercase font-bold">${price}</h2>
    <p className="uppercase font-bold">{title}</p> 
  </div>
</div>
</Link>
  )
}


const ItemContainer = () => {

const { id: itemPromise } = useParams()
const [pruebas, setPruebas] = useState([])
const [loading, setLoading] = useState(true)


useEffect(() => {
  getData().then(response => {
    setLoading(false)
  })
}, [])

const getData = () => {
    const db = getFirestore()
    const itemsRef = collection(db, 'items')
    getDocs( itemsRef ).then( snapshot => {
        const data = snapshot.docs.map( e => ({id: e.id, ...e.data()}))
        setPruebas(data)
    })
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(pruebas.find(p => p.id == itemPromise))
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

  return (
    <CartContextProvider>
    <div className="itemList">
        { pruebas.map( i=> <Card key={i.id} {...i}></Card> )}
    </div>
    </CartContextProvider>
  )
}


export default ItemContainer
