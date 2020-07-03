import React, { Component } from 'react';

import styles from './styles'
import {Button, withStyles} from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const firebase = require("firebase");


class DashboardComponent extends Component {
    constructor(){
        super()
        this.state={
            selectedComponent:null,
            newChatFormVisible:false,
            email:null,
            chats:[],
            chat:null

        }
    }
    render() { 
        const {classes}=this.props
        return ( 
        
        <div >
            hi
        </div>
        );
    }
}    
export default withStyles(styles)(DashboardComponent);