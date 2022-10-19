import './App.css';
import Products from './components/Products';
import AddEdit from './components/AddEdit';
import NavBar from './components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signin from './components/Signin';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <NavBar /> */}
          

          <Routes>
          <Route path="/" exact element={<Signin/>}  />
          <Route path="/products" exact element={<Products name='VINOD'/>} />
          <Route path="/addproduct" exact element={<AddEdit/>}  />
          <Route path="/users" exact element={<Users/>}  />

          </Routes>
   
      </BrowserRouter> 
    </div>
  );
}

export default App;
