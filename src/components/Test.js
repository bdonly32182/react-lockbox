import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

export default class Test extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Header />
                <div className="row">
                    <div className="col-md-2">
                            <p>Menubar</p>
                    </div>
                    <div className="col-md-10">
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
