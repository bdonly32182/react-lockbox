import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {

    showProduct(){
        
        return this.props.product && this.props.product.map(products=>(
            
            <ProductItem key={products.id} product={products}  onRecieve={this.props.onRecieve} onDelProduct={this.props.onDelProduct} onEditProduct={this.props.onEditProduct}/>
        ))
    }
    render() {
        return (
            <div className="row">
                {this.showProduct()}
            </div>
        )
    }
}
