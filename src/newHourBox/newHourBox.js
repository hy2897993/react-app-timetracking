import React from 'react';
import { FormControl, InputLabel, Input, Button, Paper, withStyles, CssBaseline, Typography } from '@material-ui/core';
import styles from './styles';
import CloseIcon from '@material-ui/icons/Close';




class NewHourComponent extends React.Component {
    constructor(){
        super()
        this.state={
            hourGoal:'',
            item:''
            
        } 
    }
    
    render() {

        const { classes } = this.props;
    
        return(
        <div className={this.props.openDrawer?classes.content:classes.content_wider}  style={{background:'grey'}}>
          <main className={classes.main} >
            <CssBaseline  />
            <Paper className={classes.paper} id="main"><CloseIcon style={{position:'absolute',top:'10px', right:'10px'}} onClick={(e)=>this.checkNewHourComponent(e)}/>
              <Typography style={{fontFamily: `Quicksand`}} component="h1" variant="h5">Add New Hour Tracking</Typography>
              <form className={classes.form} onSubmit={(e) => this.submitNewHour(e)}>
                <FormControl fullWidth>
                  <InputLabel style={{fontFamily: `Quicksand`}} htmlFor='new-hour-item'>
                      Create Your New Project
                  </InputLabel>
                  <Input required 
                    className={classes.input}
                    autoFocus 
                    onChange={(e) => this.userTyping('item', e)} 
                    id='new-hour-item'>
                  </Input>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel style={{fontFamily: `Quicksand`}} htmlFor='new-hour-goal'>
                      Enter Your Hour Goal
                  </InputLabel>
                  <Input required 
                    className={classes.input}
                    onChange={(e) => this.userTyping('hourGoal', e)} 
                    id='new-hour-goal'>
                  </Input>
                </FormControl>
                <Button style={{fontFamily: `Quicksand`}} fullWidth variant='contained' color='primary' className={classes.submit} type='submit'>Saves</Button>
              </form>
              {
                this.state.serverError ? 
                <Typography style={{fontFamily: `Quicksand`}} component='h5' variant='h6' className={classes.errorText}>
                  Unable to locate the user
                </Typography> :
                null
              }
            </Paper>
          </main>
        </div>
        );
      }

      checkNewHourComponent=(e)=>{

        this.props.displayToggleFn()
      }

      

      userTyping=(type,e)=>{
          switch (type) {
            case 'item':
                this.setState({ item: e.target.value })
                break;
            case 'hourGoal':
                this.setState({ hourGoal: e.target.value })
            
            break;
          
              default:
                  break;
          }
      }
      submitNewHour=(e,item,hourGoal)=>{
        e.preventDefault()
 
        //  console.log('create new hour')
         this.props.submitNewHourFn(e,this.state.item,this.state.hourGoal,null,true)
        
    
      }
}
 
export default withStyles(styles)(NewHourComponent);