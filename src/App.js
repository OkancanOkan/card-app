import './App.css';
import Header from "../src/components/Header"
import {BrowserRouter , Route} from "react-router-dom"
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
    <Header/>
     <div>
    </div>
    </BrowserRouter>
  );
}

export default App;
