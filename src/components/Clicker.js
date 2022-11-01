import {useEffect, useState} from "react";


const Clicker = () => {

  const [counter, setCounter] = useState(0) 

  const stock = 14;

  useEffect(() => {
    console.log("Se montó el componente");
  }, [])

  useEffect(() => {
    console.log("Se renderizo el componente");
  })

  let date = new Date();
  let fecha = date.toDateString();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  const [time, setTime] = useState(0);


  const clickHandlerMore = () =>{
    console.log("hiciste una suma");
    setTime(fecha + " " + hour + ":" + minutes + ":" + seconds)
    if(counter < stock){
      setCounter(counter + 1)
    }
  }

  const clickHandlerLess = () =>{
    console.log("hiciste una resta")
    if(counter > 0){
      setCounter(counter - 1)    }
  }

  
    
  return (
    <div className="clickerSection">
      <div className="sectionCounter">
      <button onClick={clickHandlerLess} className="btn bg-red-600 border-0 rounded-none">-</button>
        <div className="  text-center counter">{ counter }</div>
        <button onClick={clickHandlerMore} className="btn  bg-green-600 border-0 rounded-none">+</button>
      </div>
    </div>
  )
}

export default Clicker
