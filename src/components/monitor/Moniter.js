import React, { Component } from 'react'
import Recieve from './Recieve'
import ProductList from '../products/ProductList'
import axios from 'axios'
export default class Moniter extends Component {
    
    constructor(props){
        super(props)        
        this.state={
                parcel:[],
                pack:[],
                totalpiece:0,
                aler:false,
                msg:'',
        }
        this.recievePack = this.recievePack.bind(this)
        this.onDelPack = this.onDelPack.bind(this)
        this.onCancle = this.onCancle.bind(this)
        this.confirmRecieve =this.confirmRecieve.bind(this)
    }
   
    recievePack(product){        
        this.setState({parcel:this.props.product})
        let filterPackage = this.props.product.filter(products=>products.id == product.id)
        if(filterPackage){
            filterPackage[0].readView = true
            filterPackage[0].colorButton ="btn btn-block btn-dark"
            let total = this.state.totalpiece + product.unit
            this.setState({totalpiece: total})
            this.state.pack.push({product:filterPackage})
        }
      
    }
    onDelPack(pack){        
        let resultPack = this.state.pack.filter((packs )=> {                
         return   packs.product[0].id != pack[0].id
        })
        let findDelete = this.state.pack.find(findpack => findpack.product[0].id == pack[0].id)
        let totolpiece = this.state.totalpiece - findDelete.product[0].unit
         this.setState({totalpiece:totolpiece,pack:resultPack})
        if (findDelete.product[0] ) {
            findDelete.product[0].readView = false
            findDelete.product[0].colorButton ="btn btn-block btn-info"
            }
    }
    confirmRecieve(){
        const {totalpiece,pack} =this.state
        axios.post('http://localhost:3001/orders',{orderDate:new Date(),totalpiece,pack})
            .then(res=>{
                 let mapPack = pack.map(e=>{
                     console.log(e);
                e.product[0].readView =false
                e.product[0].colorButton = "btn btn-block btn-info"

            })
                this.setState({totalpiece:0,pack:[]})
            })
       

    }
    onCancle(pack){
        let mapPack = pack.map(e=>{
            console.log(e);
            e.product[0].readView =false
            e.product[0].colorButton = "btn btn-block btn-info"
            
        })
        this.setState({totalpiece:0,pack:[]})
        
    }
    render() {

        return (
            <div className="container-fluid"> 
            { this.state.aler &&
                <div className="alert alert-success title text-center" role="alert">
                    Save Recieve success
                </div>
            }
                <div className="row">
                    <div className="col-md-9">
                        <ProductList product={this.props.product}  onRecieve={this.recievePack}/>
                    </div>
                    <div className="col-md-3">
                        <Recieve pack={this.state.pack} totalpiece={this.state.totalpiece} onDelPack={this.onDelPack} onCancle={this.onCancle} onFirmRecieve={this.confirmRecieve}/>
                    </div>
                </div>
            </div>
 
        )
    }
}
