import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

export default class HomeScreen extends Component {

    state= {
        products: []
    }
    getList = () => {
        axios.get('/api/products/')
        .then((response) => {
        this.setState({
                products: response.data,
            });
        });
    }

    componentDidMount() {
        this.getList();
    }

    render() {
    return (
        <div>
            <ul className='products'>
                {
                    this.state.products.map(products =>
                        <li key={products.id}>
                            <div className='product'></div>
                            <Link to={`/products/${products.id}`}>
                            <img className="product-image" 
                            src={products.image} alt="product" />
                            </Link>
                            <div className='product-name'>
                                <Link to={`/products/${products.id}`}>
                                    {products.name}</Link>
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
}

