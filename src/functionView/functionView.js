import React from 'react'
import styles from './styles'
import {withStyles} from '@material-ui/core/styles'


import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import AvTimerIcon from '@material-ui/icons/AvTimer';



import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Bar } from 'react-chartjs-2';




import {Input,Typography,Divider,Button, Paper} from '@material-ui/core'



class FunctionViewComponent extends React.Component {
    constructor(){
        super()
        this.state={
            submitType:'',
            value:''
           
            
        }
    }
    
    render() { 

        
        const {classes,displayIndex,displayToggle,readySubmit,displayViewIndex,trackingList}=this.props
        
        const marks = [
            {value: 0,label: '0',},{value: 10,label: '',},{value: 20,label: '',},{value: 30,label: '',},{value: 40,label: '',},
            {value: 50,label: '50',},{value: 60,label: '',},{value: 70,label: '',},{value: 80,label: '',},{value: 90,label: '',},
            {value: 100,label: '100%',},
        ];
        
        // console.log(readySubmit)
        if(displayToggle===false){
        return ( 
        <main id='view-container' className={this.props.openDrawer?classes.content:classes.content_wider} >
            <div className={classes.board}>
                {trackingList===undefined?
                null:trackingList.map((data,index)=>{
                    return(
                        <div   key={index} style={{fontFamily: `Quicksand`}} className={this.props.displayIndex===index?classes.displayed:classes.undisplayed}>
                            <Paper onClick={(e)=>this.clickItemIndex(index,e)}
                            className={classes.paper}
                            alignItems='flex-start'>
                                <Typography component="h2">
                                    
                                    {data.item}
                                </Typography>

                                
                                <div>
                                    
                                    <Typography style={{fontFamily: `Quicksand`}} component="span" color="textPrimary">
                                        Current: {data.time.toFixed(2)} hour
                                    </Typography><br />
                                    
                                    <Typography style={{fontFamily: `Quicksand`}} component="span" color="textPrimary">
                                        Goal: {data.hourGoal} hour
                                    </Typography>
                                </div>
                            </Paper>
                        </div>
                    )
                })
            }
            <Paper className={classes.addNewPaper}>
                <p>Add New Project</p>
                <AddIcon className={classes.addIcon} onClick={this.newHour} color='primary'/>
            </Paper>
            </div>
            <Divider></Divider>
            <div className={classes.lowerBoard}>
                
                <Paper elevation={0} className={classes.theoryPaper}>
                    {/* <h1>Deliberate Practice</h1>
                    <br /> */}
                    <h2>What is Deliberate Practice?</h2>
                    <br />
                    <p style={{fontSize:'15px' }}>Deliberate practice refers to a special type of practice that is purposeful and systematic. While regular practice might include mindless repetitions, deliberate practice requires focused attention and is conducted with the specific goal of improving performance.</p>
                </Paper>
                <Paper elevation={0} className={classes.theoryPaper}>
                    <h2>Can You Achieve Anything With Enough Practice?</h2>
                    <br />
                    
                    <p style={{fontSize:'15px' }}>Deliberate practice does not mean that you can fashion yourself into anything with enough work and effort, though. While human beings do possess a remarkable ability to develop their skills, there are limits to how far any individual can go. Your genes set a boundary around what is possible.</p>
                    <br />
                    <br />
                    <p style={{fontSize:'15px' }}>However, while genetics influence performance, they do not determine performance. Do not confuse destiny with opportunity. Genes provide opportunity. They do not determine our destiny. It’s similar to a game of cards. You have a better opportunity if you are dealt a better hand, but you also need to play the hand well to win.</p>
                </Paper>
            </div>
        </main> )}



// project part
        else if(displayToggle===true){
            
            return(
                <main className={this.props.openDrawer?classes.content_1:classes.content_1_wider} >
                    <div className={classes.head} >
                        <ArrowBackIcon className={classes.ArrowBackIcon} color='primary' onClick={this.clickArrowBackIcon}/>
                        <div className={classes.chatHeader} >{this.props.trackingList[displayViewIndex]===undefined?null:this.props.trackingList[displayViewIndex].item}</div>
                    </div>
                    <Typography className={classes.timer} id='view-container' component='h1' variant='h2' color="textPrimary">
                        {this.props.startTimer}
                    </Typography>

                    {readySubmit?
                        <div className={classes.rate}>
                            

                            <Typography  id="input-slider" gutterBottom style={{marginBottom:"30px",fontFamily: `Quicksand`,width:'300px'}}>
                                Rate The Efficiency Of Your Time:
                            </Typography>
                            
                            

                            <Grid item sm style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                                <div style={{width:'60%'}}>
                                    <AvTimerIcon/>
                                    <Slider
                                        value={typeof this.state.value === 'number' ? this.state.value : 100}
                                        onChange={this.handleSliderChange}
                                        aria-labelledby="input-slider"
                                        step={10}
                                        marks={marks}
                                        valueLabelDisplay="auto"
                                    />
                                </div>
                                <Input
                                    // className={classes.input}
                                    style={{width:'10%',height:'70px'}}
                                    value={typeof this.state.value === 'number' ? this.state.value : 100}
                                    margin="dense"
                                    onChange={this.handleInputChange}
                                    onBlur={this.handleBlur}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                    }}
                                />
                            </Grid>

                            <div  className={classes.littleInput}>
                                <Button style={{fontFamily: `Quicksand`,color:'grey'}} type='button' margin='normal' variant='contained' className={classes.submit} onClick={this.cancleIt}>Cancle</Button>
                                <Button style={{fontFamily: `Quicksand`}} type='submit' margin='normal' variant='contained' color='primary' className={classes.submit} onClick={(e)=>this.submitHour(e,this.state.value)}>Submit</Button>
                                
                            </div> 
                        </div>
                        
                        :
                        <div className={classes.onOffBtn}>
                        <Button disabled={this.props.disable}
                        variant='contained' 
                        fullWidth 
                        className={classes.startBtn} 
                        onClick={()=>this.startTrackTime(displayViewIndex)
                        }>
                        Start Tracking
                        </Button>

                        {displayIndex===displayViewIndex&&displayToggle?
                        <Button
                        variant='contained' 
                        fullWidth 
                        className={classes.startBtn} 
                        onClick={()=>this.stopTrackTime(displayViewIndex)}>
                        Stop Tracking
                        </Button>:null}
                        </div>
                    }

                    <div className={classes.linearBox}>
                        {displayIndex===displayViewIndex&&displayToggle?
                        <img src='clock.gif' alt="clock"
                        className={classes.img} 
                        style={{left:`${this.props.trackingList[displayViewIndex]===undefined?null:100 * this.props.trackingList[displayViewIndex].time/this.props.trackingList[displayViewIndex].hourGoal}%`
                        }}/>
                        :
                        <img alt="191919" style={{left:`${this.props.trackingList[displayViewIndex]===undefined?null:100 * this.props.trackingList[displayViewIndex].time/this.props.trackingList[displayViewIndex].hourGoal}%`}}
                         className={classes.img} src='clock.png'/>}

                        <LinearProgress variant="determinate" className={classes.linear} 
                        value={this.props.trackingList[displayViewIndex]===undefined?null:(this.props.trackingList[displayViewIndex].time>this.props.trackingList[displayViewIndex].hourGoal?100:100 * this.props.trackingList[displayViewIndex].time/this.props.trackingList[displayViewIndex].hourGoal)}/>
                    </div>

                    <Paper className={classes.chart}>
                    <Bar
                        data={this.props.chartData}
                        width={848}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                    />
                        {/* <canvas className={classes.canvas} id="myChart" width="848" height="400" onLoad={this.loadChart(displayToggle,displayViewIndex)}></canvas> */}
                    

                    </Paper>
                
                </main>
            )
            
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

    userTyping = (type,e) =>{
        switch (type) {
            case 'efficiencyInput':
                this.setState({efficiencyInput:e.target.value})
                
                break;

                
        
            default:
                break;
        }
    }
    submitOrNot = (type) =>{
        console.log('clicked')
        
        switch (type) {
            case 'submit':
                console.log('submit')
                
                break;
            case 'cancle':
                console.log('cancle')

            
                break;
        
            default:
                break;
        }
    }
    submitHour=(e,value)=>{
        e.preventDefault()
        const trueValue = typeof value === 'number' ? value : 100
        console.log(trueValue)
        this.props.submitHourFn(trueValue)
    }
    cancleIt=()=>{
        console.log('cancled')
        this.props.cancleItFn()
    }

    startTrackTime=(index)=>{
        // console.log(index)
        this.props.startTrackingFn(index)
    }
    
    stopTrackTime=(index)=>{
        this.props.stopTrackingFn(index)
        
    }
    






    // componentDidMount=()=>
    // {const classes = useStyles();
    // const [value, setValue] = React.useState(30);
  
    handleSliderChange = (event, newValue) => {
      this.setState({value:newValue});
    };
  
    handleInputChange = event => {
        this.setState({value:event.target.value === '' ? '' : Number(event.target.value)});
    };
  
    handleBlur = () => {
      if (this.state.value < 0) {
        this.setState({value:0});
      } else if (this.state.value > 100) {
        this.setState({value:100});
      }
    };
    clickArrowBackIcon=()=>{
        this.props.unselectItem()
        // console.log('unselect')
        this.props.cancleFunctionListIndex()
    }
    newHour = () => {
        this.props.newHourFn()
    }
    
//     loadChart =(displayToggle,index)=>{
        
//         console.log(index)
//         var ctx = document.getElementById('myChart');
//         console.log(ctx)
//         if(ctx){
//         var myChart = new Chart(ctx, {
//             type: 'line',
//     data: {
//         labels: this.props.trackingList[index].hourStack.time,
//         datasets: [{
//             label: '# of Votes',
//             data: this.props.trackingList[index].hourStack.hour,
//             backgroundColor: [
//                 'rgba(54, 162, 235, 0.2)',
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
//         });
//     }
//     else {return false}
// }
}
 
export default withStyles(styles)(FunctionViewComponent);
