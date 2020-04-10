import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state= {date : new Date()}
        
    }
    componentDidMount(){
          setInterval(()=>
             this.tick()
            // this.setState({date:new Date()})
        ,1000)
    }
  

    tick(){
        this.setState({date:new Date()})
    }
    render() {
        const style = {height:50,marginTop:20}
        return (
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-md-4 text-left">
                            <h3 className="text-danger"> <img style={style} src='/image/lockbox_logo.png' ></img></h3>
                    </div>
                    <div className="col-md-4 text-center">
                        <p className="text-danger" style={style}>{this.state.date.toLocaleTimeString()} </p>  
                    </div>
                    <div className="col-md-4 text-right">
                            <button type="button" className="btn btn-outline-dark title" style={{marginTop:20}}>Logout</button>
                            <ul className="list-inline">
                        <li className="list-inline-item title"><Link to="/">Home</Link></li>
                        |
                        <li className="list-inline-item title"><Link to="/product">Product</Link></li>
                        |
                        <li className="list-inline-item title"><Link to="/recieve">RecieveOrder</Link></li>
                        |
                        <li className="list-inline-item title"><Link to="/about">About Me</Link></li>

                    </ul>
                    </div>
                    
                </div>
            </div>
        )
    }
}
