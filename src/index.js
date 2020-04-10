import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import reduxThunk from 'redux-thunk'
// redux-thunk is middlewar ที่ทำให้ รีเทินฟังก์ได้ในหน้า action

// function lock (){ JSX
//     return "hello world lock boxxx"
// }
// let user = {username:"best",email:"jak"}
// const re = lock()
// var elemet = <h1>{re} {user.username + " " + user.email}</h1>

let store = createStore(reducers,{} , applyMiddleware(reduxThunk) )

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));
