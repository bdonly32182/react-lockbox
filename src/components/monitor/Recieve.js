import React, { Component } from 'react'

export default class Recieve extends Component {
    constructor(props){
        super(props)
    }
    
    showPack(pack){
        
        if(!pack || pack.length ==0){
            return <li className="text-right text-muted title">ไม่มีสิ่งของที่จะรับ</li>
        }else{
            return pack.map(packs=>{
                
                return(
                    <li key={packs.product[0].id} className="text-right text-success title">
                        {packs.product[0].productName} จำนวน {packs.product[0].unit} ชิ้น   
                        <button className="btn btn-light btn-sm" onClick={() => this.props.onDelPack(packs.product)} > X</button>

                    </li>
                )
            })

        }
    }
    render() {
        const {totalpiece} = this.props
        return (
            <div >
                <h1 className="text-right">{totalpiece} ชิ้น</h1>
                <hr />
                <ul className="list-unstyled">
                    {this.showPack(this.props.pack)}
                </ul>
                <button className="btn btn-block btn-danger title" onClick={()=>this.props.onFirmRecieve(this.props.pack)}>ยืนยันการรับพัสดุ</button>
                <button className="btn btn-block btn-light title" onClick={()=>this.props.onCancle(this.props.pack)}>ยกเลิกการรับพัสดุ</button>

            </div>
        )
    }
}
