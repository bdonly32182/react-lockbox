import './App.css'
import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './container/Home';
import About from './container/About'
import Product from './container/product/Product';
import Login from './container/member/Login';
import Register from './container/member/Register';
import RecieveOrder from './container/Recieve/RecieveOrder';
import Notfound from './container/error/Notfound'
import ProductEdit from './container/product/ProductEdit'
import Test from './components/Test';
class App extends Component{

 renderRouter(){
  return(
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component ={About} />
      <Route exact path='/product' component ={Product}></Route>
      <Route exact path='/product/add' component ={ProductEdit}></Route>
      <Route exact path='/product/edit/:ids' component ={ProductEdit}></Route>
      <Route exact path="/recieve" component ={RecieveOrder} ></Route>
      <Route exact path = "/login" component={Login}></Route>
      <Route exact path ="/register" component = {Register}></Route>
      <Route exact path ="/test" component={Test}/>
      <Route component={Notfound}></Route>
   </Switch>
  )
 }
  
  
  render(){
    return (

    <BrowserRouter>{this.renderRouter()}</BrowserRouter>
    )
  }
}

export default App;
