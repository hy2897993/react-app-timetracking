import React from 'react';
import {Link} from 'react-router-dom'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from'@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styles from './styles'


const firebase = require("firebase");

class SignupComponent extends React.Component {
    constructor(){
        super()
        this.state={
            name:null,
            email:null,
            password:null,
            passwordC:null,
            unmatchNotification:''
            
        }
    }
    render() { 
        const {classes} = this.props
        return ( 

        <div className={classes.img}>
        <main className={classes.main}>
            <CssBaseline></CssBaseline>
            <Paper className={classes.paper}>
                <Typography component='h1' variant='h5'>
                    Create Account
                </Typography>
                <form className={classes.form} onSubmit={(e) => this.submitSignup(e)}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='name-input'>Enter Your Name</InputLabel>
                        <Input  id='name-input' onChange={(e)=>this.userTyping('name', e)}></Input>
                    </FormControl>

                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='signup-email-input'>Enter Your Email</InputLabel>
                        <Input autoComplete='Email' autoFocus id='signup-email-input' onChange={(e)=>this.userTyping('email', e)}></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='sign-up-password'>Enter Your Password</InputLabel>
                        <Input type='password' id='sign-up-password' onChange={(e)=>this.userTyping('password', e)}></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlFor='sign-up-password-C'>Comfirm Password</InputLabel>
                        <Input type='password' id='sign-up-password-C' onChange={(e)=>this.userTyping('passwordC', e)}></Input>
                    </FormControl>
                    {
                        this.state.unmatchNotification?
                        <Typography component='h4' variant='h6' className={classes.errorText}>
                            {this.state.unmatchNotification}
                        </Typography>:
                        null
                    }
                    <Button className={classes.submit} type='submit' fullWidth variant='contained' color='primary'>Save</Button>
                    <Typography  component='h5' variant='h6' className={classes.noAccountHeader}>Already have an account?</Typography>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <Link className={classes.logInLink} to='/signin'>Sign In</Link>
                        <Link className={classes.cancleLink} to='/'>Cancle</Link>
                    </div>
                </form>
            </Paper>

        </main>
        </div>
         );
    }
    formIsValid=()=>{
        return this.state.password===this.state.passwordC
    }
    submitSignup=(e)=>{
        e.preventDefault()

        if(!this.formIsValid()){
            this.setState({unmatchNotification:'password do not match!'})
            return
        }

        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(authRes =>{
            const userObject = {
                email: authRes.user.email,
                userName:this.state.name
            }

            firebase
            .firestore()
            .collection('users')
            .doc(this.state.email)
            .set(userObject)
            .then(()=>{
                this.props.history.push('/dashboard')
            },dbError =>{
                console.log(dbError)
                this.setState({signupError:'Failed to add user'})
            })
        }, authError =>{
            console.log(authError)
            this.setState({signupError:'Failed to add user'})
        })

    }
    userTyping=(type,e)=>{
        switch (type) {
            case 'name':
                this.setState({name:e.target.value})
                
                break;
            case 'email':
                this.setState({email:e.target.value})
                
                break;
            case 'password':
                this.setState({password:e.target.value})
                
                break;
            case 'passwordC':
                this.setState({passwordC:e.target.value})
                
                break;
        
            default:
                break;
        }
        
    }
}
 
export default withStyles(styles)(SignupComponent);