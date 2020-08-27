import React, {Component} from 'react';
// import data from '../data';
import { Link } from 'react-router-dom';
import axios from 'axios'
export default class ProductScreen extends Component {
    state = {
        products: {}
    }
    getListID = (id) => {
        axios.get(`/api/products/${id}`)
        .then((response) => {
        this.setState({
                products: response.data,
            });
        });
    }
    // removeFromCart = (id) => {
    //     axios.delete(`api/shootgames/${id}`).then(() =>{
    //     this.props.getShoots()
    //     })
    // }

    componentDidMount() {
        this.getListID();
    }
    
    render (){
        // console.log(props.match.params.id)
        // const products = this.state.products.find(x => x.id === props.match.params.id)
        // const { _id, name, description, img, createdby} = this.props.products
    return (
        <div>
        <div>
            <Link to="/">Back To Results</Link>
            <h1 className = 'detail-name'>{ this.state.products.name }</h1>
        </div>
        <div className="details">
            <div className='details-image'>
                <img className='nikepic' src={ this.state.products.image } alt='product'></img>
            </div>
            <div className="detail-info">
                <ul>
                    <li>
                    <h4 >{ this.state.products.name }</h4> 
                    </li>
                    <li>
                        {/* { this.state.products.rating } Stars ({ this.stateproducts.numReviews } Reviews) */}
                    </li>
                    <li>
                        Price: <b>${ this.state.products.price }</b>
                    </li>
                    <li>
                        Description:
                        <div>
                            { this.state.products.description }
                        </div>
                    </li>
                </ul>
            </div>
            <div className='details-action'>
                    <ul>
                        <li>
                            Price: {this.state.products.price}
                        </li>
                        <li>
                            Stauts: {this.state.products.stauts}
                        </li>
                        <li>
                            Price: {this.state.products.price}
                        </li>
                        <li>
                            Qty: <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </select>
                        </li>
                        <li>
                            <button>Add to Cart</button>
                        </li>
                    </ul>
            </div>
        </div>
        </div>
    )
}
}
