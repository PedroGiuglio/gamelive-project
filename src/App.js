import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';
import ItemDetail from './components/ItemDetail';
import Error404 from './components/Error404';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import ItemContainer from './components/ItemContainer';
import { CartContextProvider } from './components/context/AddContext';
import Cart from './components/Cart';





function App() {

  return (
    <>
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>  
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path={'/item/:id'} element={<ItemDetail/>}/>
      <Route path={'/cart'} element={<Cart/>}/>
      <Route path={'/firebase'} element={<ItemContainer/>}/>
      <Route path='' element={<Clicker/>}/>
      <Route path={'*'} element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
   </>
  );
}

export default App;
