import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/products/ProductList';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {productsDelete,productsFetch} from '../../action'
 class Product extends Component {
    constructor(props){
        super(props);
      
        this.onDelProduct = this.onDelProduct.bind(this)
        this.onEditProduct =this.onEditProduct.bind(this)
    }
    componentDidMount(){
        this.props.productsFetch()
    }
    onDelProduct(product){
       this.props.productsDelete(product.id)
        
      
    }
    onEditProduct(product){
        this.props.history.push('product/edit/'+product.id)
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Product</h1>
                        </div>
                        <div className ="col-md-6">
                            <button className="btn btn-success title float-right" onClick={()=>this.props.history.push('product/add')}>add</button>
                        </div>
                    </div>
                    {this.props.products && Array.isArray(this.props.products) &&
                        <ProductList product={this.props.products} onDelProduct={this.onDelProduct} onEditProduct={this.onEditProduct}/>

                    }
                </div>
                <Footer />
                
            </div>
        )
    }
}
function mapStateToProps ({products}){
    //decontructor คือ ตัวแปรมันเหมือนกัน สามารถเขียนแบบนี้ได้ค่าเหมือน home.js
    return {products}

}
export default withRouter(connect(mapStateToProps,{productsDelete,productsFetch})(Product))