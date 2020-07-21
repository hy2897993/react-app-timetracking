import React from 'react';
import {withStyles} from '@material-ui/core/styles'
import {List,ListItem,ListItemText,Divider, Avatar} from '@material-ui/core'



import AddCircleIcon from '@material-ui/icons/AddCircle';
import LinearProgress from '@material-ui/core/LinearProgress'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';








import styles from './listStyle'

class ListBarComponent extends React.Component {
    constructor(){
        super()
        this.state={
            renameName:'',
            
        }
    }

    render() { 
        const {classes,trackingList} = this.props
       
        return ( 

            <main  className={classes.root}  onClick={(e)=>this.clickIt(e)}>
                
                <div className={classes.subroot}>
                <ArrowRightIcon id='unfold' className={classes.arrowRightIcon} color='primary' onClick={this.props.toggleFunctionList}/>
                <Avatar alt='Remy Sharp' className={classes.avatar}>
                    {this.props.f_name}
                </Avatar>

                <AddCircleIcon variant="contained" 
                    disabled={this.props.functionalToggle||this.props.disable}
                    color='secondary'
                    id='addProject' 
                    onClick={this.newHour} 
                    className={classes.newChatBtn}/>

                <List id='list'>
                    
                    {trackingList===undefined?
                    null:trackingList.map((data,index)=>{
                        
                            return(
                                <div  onClick={(e)=>this.clickItemIndex(index,e)} key={index} style={{fontFamily: `Quicksand`}} className={this.props.displayIndex===index?classes.displayed:classes.undisplayed}>
                                    
                                    
                                        
                                    
                                    <ListItem 
                                    className={index===this.props.functionListIndex?classes.listItem:classes.listItem1}
                                    alignItems='flex-start'
                                    contextMenu="mymenu">

                                        <ListItemText
                                        primary={
                                            <Avatar alt='Remy Sharp' className={classes.avatar}>
                                                {data.item.charAt(0)}
                                            </Avatar>
                                        }
                                            

                                        secondary={
                                        
                                        <React.Fragment>
                                            <LinearProgress variant="determinate" className={classes.linear} 
                                                value={data.time>=data.hourGoal?100:100 * data.time/data.hourGoal}  />

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
                </div>
                
                <ExitToAppIcon id='exit' className={classes.exitButton} onClick={this.props.signOutFn}></ExitToAppIcon>
                
 


            </main>
         );
    }
   
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
            this.setState({noClickOther:true})
          } else {
            return
          }
        
    }
    clickItemIndex=(index,e)=>{
        if (e.button===0||e.button===1||!this.props.readySubmit)
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
        const zoneTwoBottom = document.getElementById('exit')
        const toptop = document.getElementById('unfold')

        const clickRight = clickTopZone.getBoundingClientRect().right+10
        const zone1Bottom = clickTopZone.getBoundingClientRect().top
        const zone2Top = clickBottomZone.getBoundingClientRect().bottom
        const zone2Bottom = zoneTwoBottom.getBoundingClientRect().top
        const toptopBottom = toptop.getBoundingClientRect().bottom

        const X = e.pageX;
        const Y = e.pageY;
        console.log(X+' '+Y)
        
        if(X<clickRight&&((Y<zone1Bottom&&Y>toptopBottom)||(Y<zone2Bottom&&Y>zone2Top))){
            this.props.unselectItem()
            console.log('unselect')
            this.props.cancleFunctionListIndex()
        }
    }
        

    }

    
}
 
export default withStyles(styles)(ListBarComponent);