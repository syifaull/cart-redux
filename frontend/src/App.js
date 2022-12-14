
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import NavbarComp from './components/NavbarComp';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
      <NavbarComp/>
        <Routes>
          <Route exact path='/' element = {<Home/>} />
          <Route path = '/not-found' element = {<NotFound/>} />
          <Route path = '/cart' element = {<Cart/>} />
          <Route path = '*' element = {<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
