
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Layout from './pages/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './pages/Footer';
import Services from './pages/Services';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Product from './pages/Product/Product';
import Addproduct from './pages/Addproduct/Addproduct';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import EditProduct from './pages/EditProduct/EditProduct';
import Hooks from './pages/Hooks/Hooks';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='services' element={<Services />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='product' element={<Product />}> </Route>
          <Route path='singleproduct/:id' element={<SingleProduct />} />
          <Route path='editProduct/:id' element={<EditProduct />}></Route>
          <Route path='addproduct' element={<Addproduct />} />
          <Route path='hooks' element={<Hooks />}> </Route>
          <Route path='*' element={<Error />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
