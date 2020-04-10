import React, { Component } from 'react'

export default class ProductItem extends Component {
    constructor(props){
        super(props)
        this.state={
            selectFile:null
        }
        
    }

    onChangeFile=(event)=>{
        console.log(event.target.files[0]);
        this.setState({selectFile:event.target.files[0],
            loaded:0
        })
        
    }
    onClickFile(){
        const data = new FormData() 
        data.append('file', this.state.selectedFile)
    }

    render() {
        const {productName,unit,thumbnail,colorButton,readView} = this.props.product;
    
        
        return (
            <div className="col-md-4 col-sm-4">
               <p className="text-center text-success title"> {productName} </p>
                {/* <img className="img-fluid img-thumbnail" src={require('../image/lockbox_logo.png')} ></img> */}
                <img className="img-fluid img-thumbnail" src={thumbnail} alt={thumbnail} style={{height:280,width:500}}/>

               <p className="text-right text-success"> {unit} ชิ้น</p> 
               {this.props.onRecieve&&
                 <button type="button" className={colorButton} disabled={readView} onClick={()=>this.props.onRecieve(this.props.product)}>รับพัสดุ</button>
               
               } 
               
            
               {/* <input type="file" onChange={this.onChangeFile}></input>
               <button type="button">upload</button> */}
                {this.props.onDelProduct&&
                <button type="button" className="btn col-5 btn-info" disabled={readView} onClick={()=>this.props.onEditProduct(this.props.product)}>Edit</button>
                }
                {this.props.onDelProduct&&
                <button type="button" className="btn col-5 btn-danger float-right" disabled={readView} onClick={()=>this.props.onDelProduct(this.props.product)}>Delete</button>
                }
                <hr/>
            </div>
        )
    }
}
