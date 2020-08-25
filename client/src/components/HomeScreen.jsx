import React from 'react'
import data from '../data';
import { Link } from 'react-router-dom';
export default function HomeScreen(props) {
    return (
        <div>
            <ul className='products'>
                {
                    data.products.map(products =>
                        <li>
                            <div className='product'></div>
                            <Link to={`/products/${products.id}`}>
                            <img className="product-image" src={products.image} alt="product" />
                            </Link>
                            <div className='product-name'>
                                <Link to={`/products/${products.id}`}>{products.name}</Link>
                            </div>
                            <div className='product-brand'>{products.brand}</div>
                            <div className="product-price">{products.price}</div>
                            <div className="product-rating">{products.rating} Stars ({products.numReview})</div>
                        </li>)
                }
            </ul>
        </div>
    )
}

