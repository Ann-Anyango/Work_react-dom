import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Login from './Login';
import Products from './Products';
import SingleProduct from './SingleProduct';

function App() {
  return (
    <div >

     <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products" element={<SingleProduct />} />
        <Route path="/newproduct" element={<newProduct />} />
       
      </Routes>
    </Router>
    </div>
  );
}

export default App;
