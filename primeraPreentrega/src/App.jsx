/* 
 import './App.css' */
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
/* import CartWidget from './components/CartWidget/CartWidget'; */
import {BrowserRouter,Routes,Route} from 'react-router-dom';
/* import Amplificadores from './components/Amplificadores'
import Accesorios from './components/Accesorios'
import Guitarras from './components/Guitarras'
import GuitarrasId from './components/GuitarrasId' */
import Error from './components/Error';
import ItemDetailContainer from './components/ItemDatailContainer/ItemDetailContainer'
import CartWidget from './components/CartWidget/CartWidget';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <NavBar/>

    <Routes>

      <Route path={'/'} element={<ItemListContainer/>}/>
      <Route path={'/category/:id'} element={<ItemListContainer/>}/>
      <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
      <Route path={'/cart'} element={<CartWidget/>}/>
      <Route path='*' element={<Error/>}/>
      
    {/*   <Route path='/Guitarras' element={<Guitarras/>}/>
      <Route path='/Guitarras/:id/:name' element={<GuitarrasId/>}/>
      <Route path='/Amplificadores' element={<Amplificadores/>}/>
      <Route path='/Accesorios' element={<Accesorios/>}/>
      <Route path='/Cart' element={<CartWidget/>}/> */}
    </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
