import { Link } from 'react-router-dom';
import React from 'react';
import styles from './styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const firebase = require('firebase')

class SigninComponent extends React.Component {
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            loginError:false

        }
    }
    render() {
        const {classes}=this.props
        return (
            <div className={classes.img}>
            <main className={classes.main} id='main'>
                <CssBaseline></CssBaseline>

                <Paper className={classes.paper}>
                    <Typography component='h1' variant='h5'>
                        Sign In
                    </Typography>
                    <form className={classes.form} onSubmit={(e)=>this.submmitSignin(e)}>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signin-email-input'>Enter Your Email</InputLabel>
                            <Input autoComplete='email' id='signin-email-input' onChange={(e)=>this.userTyping('email',e)}></Input>
                        </FormControl>
                        <FormControl required fullWidth margin='normal'>
                            <InputLabel htmlFor='signin-password-input'>Enter Your Password</InputLabel>
                            <Input type='password' autoComplete='email' id='signin-password-input' onChange={(e)=>this.userTyping('password',e)}></Input>
                        </FormControl>
                        <Button type='submit' fullWidth variant='contained' className={classes.submit}>Sign In</Button>
                    </form>
                    {
                        this.state.loginError?
                        <Typography className={classes.errorText} component='h5' variant='h6'>
                            Log In information Error
                        </Typography>:
                        null
                    }
                    <Typography component='h5' variant='h6' className={classes.noAccountHeader} >Don't have a account yet</Typography>
                    
                        <Link className={classes.signUpLink} to='/signup'>Sign Up</Link>
                        <Link className={classes.cancleLink} to='/welcome'>Cancle</Link>
                    
                </Paper>

                

            </main>
            </div>
        );
    }
    submmitSignin = (e)=>{
        e.preventDefault()
        

        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            this.props.history.push('/dashboard')
        },err=>{this.setState({
            loginError:'err'
        })})

    }
    userTyping = (type,e) =>{
        switch (type) {
            case 'email':
                this.setState({email:e.target.value})
                
                break;
            case 'password':
                this.setState({password:e.target.value})
            
                break;
                
        
            default:
                break;
        }
    }

    
}
 
export default withStyles(styles)(SigninComponent);