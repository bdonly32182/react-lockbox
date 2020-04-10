import React, { Component } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {connect}  from 'react-redux'
import {packFetch,packDelete} from '../../action'
 class Recieve extends Component {

    constructor(props){
        super(props)
    }
    componentDidMount(){

        this.props.packFetch()

    }
    onDelete(pack){
        console.log(pack);
        
       this.props.packDelete(pack.id)
    }
    showPacks(){
        return this.props.packs && this.props.packs.map(pack=>{
            console.log(pack);
            
            const date = new Date(pack.orderDate)
            return(
                <div key={pack.id} className ="col-md-3">
                    <hr />
                    <p >
                        <button className="btn btn-danger btn-sm title float-right" onClick={()=>this.onDelete(pack)}>X</button>
                    </p>
                     <h5 className="text-info">วันที่ {date.toLocaleDateString()}{date.toLocaleTimeString()}</h5>
                    <ul>
                        {pack.pack && pack.pack.map(record =>{
                            console.log(record);
                            
                            return(
                                <li className="text-success" key={record.product[0].id}>
                                    {record.product[0].productName}  {record.product[0].unit} piece
                                   
                                </li>
                                
                            )
                        })}
                         <hr/>
                     <p className=" text-danger">Total {pack.totalpiece} Piece</p>
                     
                    </ul>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <h1>รายการพัสดุ</h1>
                    <div className="row">
                        {this.showPacks()}
                    </div>
                </div>
                <hr/>
                <Footer />
                
            </div>
        )
    }
}
function mapStateToProps({packs}){
    return {packs }

}
export default connect(mapStateToProps,{packFetch,packDelete})(Recieve);