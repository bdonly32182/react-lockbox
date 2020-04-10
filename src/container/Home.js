import React,{Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Moniter from '../components/monitor/Moniter';
import plant from '../components/image/plant.jpg';
import {connect} from 'react-redux'
import {productsFetch} from '../action'

class Home extends Component{

  constructor(props){
    super(props)
  }
  componentDidMount(){
    this.props.productsFetch();

 
  }
  render(){
    return (
      <div className="container-fluid">
        <Header />
        <Moniter product={this.props.products} />
        <hr />
        <Footer name="LockBox" email ="palit.sun@cpc.ac.th" />
      </div>
    )
  }
}
function mapStateToProps(state){
    console.log(state);
    return {products:state.products}
    
 }

export default connect(mapStateToProps,{productsFetch})(Home);
