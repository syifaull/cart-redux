
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import NavbarComp from './components/NavbarComp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarComp/>
        <Routes>
          <Route exact path='/' element = {<Home/>} />
          <Route path= '/cart' element = {<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
