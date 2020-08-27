import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomeScreen from './components/HomeScreen';
import ProductScreen from './components/ProductScreen';



function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
        <header className= 'header'>
            <div className="brand">
                <button>
                    &#9776;
                </button>
                <Link to='/'>NIKE SHOP</Link>
            </div>
            <div className='header-links'>
                <a href="cart">Cart</a>
                <a href="signin">Sign In</a>
            </div>
        </header>
        {/* <aside className='sidebar'>
            <h3>Shopping List</h3>
            <ul>
                <li>
                    <a href="index.html">Sweat Pants</a>
                </li>
                <li>
                    <a href="index.html">Shirts</a>
                </li>
            </ul>
        </aside>
        <aside>
            Shopping Categories
        </aside>  */}
        <main className='main'>
            <div className='content'>
              <Route path='/products/:id' component={ProductScreen}/>
              <Route path='/' exact={true} component={HomeScreen} />
            </div>
        </main>
        <footer className='footer'> All Rights Reserve</footer>
        </div>
        </BrowserRouter>
  );
}

export default App;
