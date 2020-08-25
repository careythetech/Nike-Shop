import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data'

function App() {
  return (
    <div className="grid-container">
        <header className= 'header'>
            <div className="brand">
                <button>
                    &#9776;
                </button>
                <a href="index.html">NikeShop</a>
            </div>
            <div className='header-links'>
                <a href="cart">Cart</a>
                <a href="signin">Sign In</a>
            </div>
        </header>
        <aside className='sidebar'>
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
        </aside> 
        <main className='main'>
            <div className='content'>
                <ul className='products'>
                  {
                    data.products.map(products=>        
                    <li>
                      <div className='product'></div>
                      <img className="product-image" src={products.image}alt="product"/>
                      <div className='product-name'>
                          <a href="product.html">{products.name}</a>
                          </div>
                      <div className='product-brand'>{products.brand}</div>
                      <div className="product-price">{products.price}</div>
                      <div className="product-rating">{products.rating} Stars ({products.numReview})</div>
                  </li>)
                  }
                </ul>
            </div>
        </main>
        <footer className='footer'> All Rights Reserve</footer>
        </div>
  );
}

export default App;
