
import './App.css';
import Navbar from './Components/navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import modern_banner from './Components/assets/banner_mens.png';
import traditional_banner from './Components/assets/banner_women.png';
import handicraft_banner from './Components/assets/banner_kids.png';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/modern' element={<ShopCategory banner={modern_banner} category="modern"/>}/>
        <Route path='/traditional' element={<ShopCategory banner={traditional_banner} category="traditional"/>}/>
        <Route path='/handicraft' element={<ShopCategory banner={handicraft_banner} category="handicraft"/>}/>
        <Route path="product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          </Routes>
          <Footer/>
      
      </BrowserRouter>
 

    </div>
  );
}

export default App;
