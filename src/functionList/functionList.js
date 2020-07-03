import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {Input,List,ListItem,ListItemText,Typography,Divider,Button, Avatar} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';








import styles from './style'

class FunctionListComponent extends React.Component {
    constructor(){
        super()
        this.state={
            renameName:'',
            zone2Bottom:'',
            
        }
    }

    render() { 
        const {classes,displayIndex,displayToggle,trackingList} = this.props
       
        return ( 

            <main  className={classes.root}  onClick={(e)=>this.clickIt(e)}>
                
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <Avatar alt='Remy Sharp' className={classes.avatar}>
                    {this.props.f_name}
                </Avatar>

                <ArrowLeftIcon className={classes.arrowLeftIcon} onClick={this.props.toggleFunctionList}/>
                </div>
                <Button variant="contained" 
                    disabled={this.props.functionalToggle||this.props.disable}
                    fullWidth
                    id='addProject' 
                    color='secondary' 
                    onClick={this.newHour} 
                    className={classes.newChatBtn}
                    style={{fontFamily: `Quicksand`}}>
                    Start A New Hour Training
                </Button>

                <List id='list'>    
                    {trackingList===undefined?
                    null:trackingList.map((data,index)=>{
                        
                            return(
                                <div  onClick={(e)=>this.clickItemIndex(index,e)} key={index} style={{fontFamily: `Quicksand`}} className={this.props.displayIndex===index?classes.displayed:classes.undisplayed}>
                                    
                                    
                                        
                                    
                                    <ListItem 
                                    className={index===this.props.functionListIndex?classes.listItem:classes.listItem1}
                                    alignItems='flex-start'
                                    
                                    
                                    contextMenu="mymenu">
                                        
                                     {/* <ContextMenu
                                        menu={
                                        <div
                                            style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            }}
                                        >
                                            <button>Button 1</button>
                                            <button onClick={()=>this.deleteProject(index)}>Delete Project</button>
                                        </div>
                                        }
                                    >    */}
                                        <ListItemText
                                        primary={
                                            this.props.editBoolean&&this.props.editItemIndex===index?
                                            <span id='inputZone'>
                                                <Input style={{fontFamily: `Quicksand`}} id={'inputZone'+index} type='text' autoComplete={data.item} placeholder={data.item} value={this.state.renameName} onChange={(e)=>this.userTyping('rename',e)}/>
                                                <CheckIcon id={'checkZone'+index} onClick={()=>this.checkEdit(this.state.renameName,index)}/>
                                            </span>
                                            :data.item}

                                        secondary={
                                        
                                        <React.Fragment>
                                            <EditIcon onClick={()=>this.editTitle(index)} id={'editZone'+index} className={classes.editIcon}/>
                                            <Typography style={{fontFamily: `Quicksand`, color:'white'}} component="span" color="textSecondary">
                                                Current: {data.time} hour
                                            </Typography ><br />
                                            <DeleteIcon onClick={(e)=>this.deleteProject(data,e,index)} id={'deleteZone'+index} className={classes.deleteIcon}/><Typography style={{fontFamily: `Quicksand`, color:'white'}} component="span" color="textPrimary">
                                                Goal: {data.hourGoal} hour
                                            </Typography> 

                                            <Button style={{fontFamily: `Quicksand`}} disabled={this.props.functionalToggle||this.props.disable}
                                                variant='contained' 
                                                fullWidth 
                                                className={classes.startBtn} 
                                                onClick={()=>this.startTrackTime(index)}>
                                                Start Tracking
                                            </Button>

                                        {displayIndex===index&&displayToggle?
                                            <Button style={{fontFamily: `Quicksand`}}
                                                variant='contained' 
                                                fullWidth 
                                                className={classes.startBtn} 
                                                onClick={()=>this.stopTrackTime(index)}>
                                                Stop Tracking
                                            </Button>:null}

                                        </React.Fragment>}>
                                       

                                        </ListItemText>

                                        {/* </ContextMenu> */}

                                    </ListItem>
                                    
                                    
                                    <Divider></Divider>
                                    
                                </div>
                            )
                        })
                        
                    
                    }
                        
                </List>
                
                
                <Button className={classes.signOutBtn} id='signOut' onClick={this.props.signOutFn} style={{fontFamily: `Quicksand`}}>
                    Sign Out<ExitToAppIcon style={{top:'5px', right:'5px',position:'absolute' }}></ExitToAppIcon>
                </Button>

            </main>
         );
    }
    // componentWillMount=()=>{
    //     const clickBottomTopZone = document.getElementById('signOut')
    //     const clickAbove = clickBottomTopZone.getBoundingClientRect().top
    //     this.props.setZone2Bottom(clickAbove)
    // }
    startTrackTime=(index)=>{
        this.props.startTrackingFn(index)
        
    }
    editTitle=(index)=>{
        this.props.editTitleFn(index)
    }
    stopTrackTime=(index)=>{
        this.props.stopTrackingFn(index)
    }
    newHour=()=>{
        if(this.props.readySubmit){
            return
        }else
        {this.props.newHourFn()}
    }
    checkEdit=(name,index)=>{
        this.props.checkEditFn(name,index)
    }
    userTyping=(type,e)=>{
        switch (type) {
            case 'rename':
                this.setState({renameName:e.target.value})
                
                break;
        
            default:
                break;
        }
    }
    // clickItem=(index,e)=>{
        
    //             if (e.button===0||e.button===1)
    //             {
    //             console.log('click to display'+index)
    //             this.props.clickItemFn(index) 
    //             }
    //             else{return false}
            
    //     }
    deleteProject=(data,e,index)=>{
        const r = window.confirm(`Are you sure to delete project `)
        if (r === true) {
            this.props.deleteProjectFn(e,null,null,index,false)
            
            
          } else {
            return
          }
        
    }
    clickItemIndex=(index,e)=>{
        const X = e.pageX;
        const Y = e.pageY;
        console.log(`editZone${index}`)
        const editZone = document.getElementById(`editZone${index}`)
        const editZoneL = editZone.getBoundingClientRect().left
        const editZoneR = editZone.getBoundingClientRect().right
        const editZoneT = editZone.getBoundingClientRect().top
        const editZoneB = editZone.getBoundingClientRect().bottom

        const deleteZone = document.getElementById(`deleteZone${index}`)
        const deleteZoneL = deleteZone.getBoundingClientRect().left
        const deleteZoneR = deleteZone.getBoundingClientRect().right
        const deleteZoneT = deleteZone.getBoundingClientRect().top
        const deleteZoneB = deleteZone.getBoundingClientRect().bottom
        var inputOpenBoolean = false

        if(this.props.editBoolean&&this.props.editItemIndex===index){
        const inputZone = document.getElementById(`inputZone${index}`)
        const inputZoneL = inputZone.getBoundingClientRect().left
        const inputZoneR = inputZone.getBoundingClientRect().right
        const inputZoneT = inputZone.getBoundingClientRect().top
        const inputZoneB = inputZone.getBoundingClientRect().bottom

        const checkZone = document.getElementById(`checkZone${index}`)
        const checkZoneL = checkZone.getBoundingClientRect().left
        const checkZoneR = checkZone.getBoundingClientRect().right
        const checkZoneT = checkZone.getBoundingClientRect().top
        const checkZoneB = checkZone.getBoundingClientRect().bottom

        inputOpenBoolean = (X>inputZoneL&&X<inputZoneR&&Y>inputZoneT&&Y<inputZoneB)||(X>checkZoneL&&X<checkZoneR&&Y>checkZoneT&&Y<checkZoneB)
        }


        if ((e.button===0||e.button===1||!this.props.readySubmit)
            &&!(X>editZoneL&&X<editZoneR&&Y>editZoneT&&Y<editZoneB)
            &&!(X>deleteZoneL&&X<deleteZoneR&&Y>deleteZoneT&&Y<deleteZoneB)
            &&!inputOpenBoolean)
                {
                // console.log('click to display'+index)
                this.props.clickItemFn(index) 
                }
                else{return false}
    }
    clickIt=(e)=>{
        if(this.props.functionalToggle||this.props.readySubmit){
            return false
        }else{
        
        const clickTopZone = document.getElementById("addProject")
        const clickBottomZone = document.getElementById('list')
        const clickBottomTopZone = document.getElementById('signOut')

        const clickRight = clickTopZone.getBoundingClientRect().right-40
        const zone1Bottom = clickTopZone.getBoundingClientRect().top
        const zone2Top = clickBottomZone.getBoundingClientRect().bottom
        const zone2Bottom = clickBottomTopZone.getBoundingClientRect().top

        const X = e.pageX;
        const Y = e.pageY;
        console.log(X+' '+Y)
        
        if(X<clickRight&&(Y<zone1Bottom||(Y<zone2Bottom&&Y>zone2Top))){
            this.props.unselectItem()
            console.log('unselect')
            this.props.cancleFunctionListIndex()

        }
    }
        

    }

    
}
 
export default withStyles(styles)(FunctionListComponent);