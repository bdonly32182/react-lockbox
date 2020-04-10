import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default class Notfound extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <h1 className="text-center">404</h1>
                <h3 className="text-center">Not Found</h3>
                <p className="text-center">ขออภัยไม่มีหน้านี้กรุณาเข้าหน้าอื่นขออภัยในควายไม่สะดวกขอบคุณครับ</p>
                <hr/>
                <Footer />
            </div>
        )
    }
}
