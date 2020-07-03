import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceworker from './serviceWorker'
import{Route,BrowserRouter as Router} from 'react-router-dom'
import SigninComponent from './signin/signin'
import Dashboard from './dashboard/dashboard'
import SignupComponent from './signup/signup'
import WelcomeComponent from './welcome/welcome'


const firebase = require('firebase')
require('firebase/firestore')
firebase.initializeApp({
    //it should be hidden
    apiKey: "AIzaSyAq8yXI2SEWNNuQFjbWEmSopl0LOC7chPI",
    authDomain: "hour-8f7cd.firebaseapp.com",
    databaseURL: "https://hour-8f7cd.firebaseio.com",
    projectId: "hour-8f7cd",
    storageBucket: "hour-8f7cd.appspot.com",
    messagingSenderId: "1028285462215",
    appId: "1:1028285462215:web:51ffc07d95b19f5c8f30e2",
    measurementId: "G-EN29RPTL9Q"
})

const routing=(
    <Router basename={process.env.PUBLIC_URL}>
        <div id='routing-container'>
            <Route exact  path='/' component={WelcomeComponent} ></Route>
            <Route path='/signin' component={SigninComponent} ></Route>
            <Route path='/dashboard' component={Dashboard} ></Route>
            <Route path='/signup' component={SignupComponent}></Route>
        </div>
    </Router>
)

ReactDOM.render(routing,document.getElementById('root'))
// ReactDOM.render((
//     <BrowserRouter basename={process.env.PUBLIC_URL}>
//       <App />
//     </BrowserRouter>
//  ), ...)  
serviceworker.unregister()