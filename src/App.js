import './App.css';
import Home from './component/Home';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Product from './component/Product';
import Sale from './component/Sale';
import Sale_Exp from './component/Sale_Exp';


function App() {

  return (
    <div className="App">
      <BrowserRouter>  
       
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='Home' element={<Home/>}/>
        <Route path='Product' element={<Product/>}></Route>
        <Route path='Sale' element={<Sale/>}></Route>
       <Route path='Sale_Exp' element={<Sale_Exp/>}></Route>
        
       

      </Routes>
      {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;




{/* <Route path='Register' element={<Register/>}/>
<Route path='List' element={<List/>}/> */}