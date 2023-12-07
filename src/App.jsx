import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import ItemCount from './components/ItemCount/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import { CartProvider } from './context/CartContext'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Banner/>
            <Routes>
              <Route path='/' element={<ItemListContainer greeting = {'Todos nuestros productos'}/>}/>
              <Route path='/category/:categoryId' element={<ItemListContainer greeting ={'Productos por categoria'}/>}/>
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />} />
              <Route path='/checkout' element={<Checkout />} />
              <Route path='*' element={<h1>404 NOT FOUND</h1>} />
              {/* <Home /> */}
            </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
    
  )
}

export default App