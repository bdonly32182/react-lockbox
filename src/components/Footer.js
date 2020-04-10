import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        const style = {height:30}
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                     
                      <p className="text-center"><img style={style} src='http://localhost/Tour-image/cap.PNG' ></img>    || <span className="text-secondary"> Contact EMAIL: {this.props.email}</span></p>
                    </div>
                    
                </div>
            </div>
        )
    }
}
