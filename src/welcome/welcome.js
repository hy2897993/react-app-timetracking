import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {Button} from '@material-ui/core'



import styles from './style'

class WelcomeComponent extends React.Component {
    constructor(){
        super()
        this.state={
            hover:false
            
        }
    }

    
    render() { 
        const {classes} = this.props

        return ( 
            <div>
            <main className={classes.main} >
                <div className={classes.h1}>
                    Welcome to 10000 Hour
                    <div className={classes.h2}>
                    Start your journey to the Goal!
                    </div>
                </div>
                
                <div className={this.state.hover?classes.h3:classes.h3Hover} onMouseMove={(e)=>this.hoverIt(e)}>
                    <Button type='submit' margin='normal' variant='contained' color='primary' className={classes.btn} onClick={(e)=>this.login(e)} >
                        Log In
                    </Button>
                    <Button type='submit' margin='normal' variant='contained' color='primary' className={classes.btn} onClick={(e)=>this.signin(e)}>
                        Sign Up
                    </Button>
                </div>
            </main>
            </div>
        );
    }
    hoverIt=(e)=>{
        this.setState({
            hover:true
        })
    }
    login=(e)=>{
        this.props.history.push('/signin')
    }
    signin=(e)=>{
        this.props.history.push('/signup')
    }
}
 
export default withStyles(styles)(WelcomeComponent);