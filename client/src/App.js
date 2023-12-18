import './App.css';
import Home from './component/Home/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Contact from './component/contact/Contact';
import Signin from './component/Sign/Signin';
import About from './component/About/About';
import Product from './component/Product/Product';
import Products from './component/Products/Products';
import CartLogic from './component/CartLogic/CartLogic';
import Register from './component/Register/Register';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<CartLogic/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Signin/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path="/product/:id" element={<Products />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
