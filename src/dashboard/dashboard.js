import React from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';
import styles from './styles'
import { withStyles} from '@material-ui/core'
// import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FunctionListComponent from '../functionList/functionList'
import ListBarComponent from '../functionList/listBar'
import FunctionViewComponent from '../functionView/functionView'
import NewHourComponent from '../newHourBox/newHourBox'
// import Chart from 'chart.js';



const firebase = require("firebase");
require('firebase/auth');
require('firebase/firestore');

class DashboardComponent extends React.Component {
    constructor(){
        super()
        this.state={
            email:null,
            fname:null,
            sname:null,
            lists:[],
            timer:"00:00:00",
            selectedIndex:'',
            functionViewDisplay:false,
            counting:null,
            readyToSubmit:false,
            newHourBoxVisibility:false,
            edit:false,
            editIndex:'',
            displayIndex:'',
            disabled:false,
            zone2Bottom:'',
            openDrawer:true,
            functionListIndex:'',
            chartData:'',
        }
    }
    render() { 
        const {classes}=this.props
        return ( 
        
        <div className={classes.content} style={{fontFamily: `Quicksand`}}>
            {this.state.openDrawer?
            <FunctionListComponent id='NewHourComponent' disabled={this.state.readyToSubmit}
            readySubmit={this.state.readyToSubmit}
            f_name={this.state.fname} 
            s_name={this.state.sname}
            trackingList={this.state.lists}
            startTrackingFn={this.startTracking}
            stopTrackingFn={this.stopTracking}
            startTimer={this.state.timer}
            displayIndex={this.state.selectedIndex}
            displayToggle={this.state.functionViewDisplay}
            newHourFn={this.newHour}
            functionalToggle={this.state.newHourBoxVisibility}
            editTitleFn={this.editTitle}
            editBoolean={this.state.edit}
            editItemIndex={this.state.editIndex}
            checkEditFn={this.checkEdit}
            clickItemFn={this.clickItem}
            deleteProjectFn={this.submitNewHour}
            unselectItem={this.unselectItem}
            disable={this.state.disabled}
            signOutFn={this.signOut}
            toggleFunctionList={this.toggleFunctionList}
            functionListIndex={this.state.functionListIndex}
            cancleFunctionListIndex={this.cancleFunctionListIndex}>
            </FunctionListComponent>
            :
            <ListBarComponent id='NewHourComponent' disabled={this.state.readyToSubmit}
            readySubmit={this.state.readyToSubmit}
            f_name={this.state.fname} 
            s_name={this.state.sname}
            trackingList={this.state.lists}
            startTrackingFn={this.startTracking}
            stopTrackingFn={this.stopTracking}
            startTimer={this.state.timer}
            displayIndex={this.state.selectedIndex}
            displayToggle={this.state.functionViewDisplay}
            newHourFn={this.newHour}
            functionalToggle={this.state.newHourBoxVisibility}
            editTitleFn={this.editTitle}
            editBoolean={this.state.edit}
            editItemIndex={this.state.editIndex}
            checkEditFn={this.checkEdit}
            clickItemFn={this.clickItem}
            unselectItem={this.unselectItem}
            disable={this.state.disabled}
            zoneTwoBottom={this.state.zone2Bottom}
            signOutFn={this.signOut}
            toggleFunctionList={this.toggleFunctionList}
            functionListIndex={this.state.functionListIndex}
            cancleFunctionListIndex={this.cancleFunctionListIndex}>
            </ListBarComponent>
            }
            
            {/* || this.state.lists.length==0 */}
            {
            this.state.newHourBoxVisibility? 
            <NewHourComponent 
            displayToggle={this.state.functionViewDisplay} 
            displayToggleFn={this.displaySwitch} 
            submitNewHourFn={this.submitNewHour}
            openDrawer={this.state.openDrawer}></NewHourComponent> 
            : 
            <FunctionViewComponent
            newHourFn={this.newHour}
            chartData={this.state.chartData}
            clickItemFn={this.clickItem}
            startTrackingFn={this.startTracking}
            stopTrackingFn={this.stopTracking}
            startTimer={this.state.timer}
            trackingList={this.state.lists}
            displayIndex={this.state.selectedIndex}
            displayToggle={this.state.functionViewDisplay}
            readySubmit={this.state.readyToSubmit}
            submitHourFn={this.submitHour}
            cancleItFn={this.cancleIt}
            displayViewIndex={this.state.displayIndex}
            disable={this.state.disabled}
            toggleFunctionList={this.toggleFunctionList}
            unselectItem={this.unselectItem}
            cancleFunctionListIndex={this.cancleFunctionListIndex}
            openDrawer={this.state.openDrawer}>
            </FunctionViewComponent>
            }



        </div>
        
        );
    }
    

    componentDidMount = () =>{
        console.log('mounted')
        firebase.auth().onAuthStateChanged(async _usr=>{
            if(!_usr){
                this.props.history.push('/signin')
            }
            else{
                await firebase
                .firestore()
                .collection('users')
                .where('email','==',_usr.email)
                .onSnapshot(async res=>{
                    const profile = res.docs.map(_doc=>_doc.data())
                    await this.setState({
                        email:_usr.email,
                        fname:profile[0].firstName,
                        sname:profile[0].familyName,
                        lists:profile[0].lists,
                        
                    })
                    console.log(this.state.lists)
                    console.log(profile)

                })
            }
        })
        // const clickBottomTopZone = document.getElementById('signOut')
        // const clickAbove = clickBottomTopZone.getBoundingClientRect().top
        // this.setState({zone2Bottom:clickAbove})
        // console.log('mounted once')
        // firebase.auth().onAuthStateChanged(async _usr =>{
        //     if(!_usr)
        //        this.props.history.push('/login')
        //     else{
        //         await firebase
        //         .firestore()
        //         .collection('chats')
        //         .where('users','array-contains',_usr.email)
        //         .onSnapshot(async res=>{
        //             const chats = res.docs.map(_doc=>_doc.data())
        //             await this.setState({
        //                 email:_usr.email,
        //                 chats:chats
        //             })
        //             console.log(this.state )
        //         })
        //     }

        // })
    }

    startTracking=async(index)=>{
        await this.setState({selectedIndex:index,functionViewDisplay:true})
        
        const time0=new Date()
        
        this.state.counting=setInterval(()=>{
            const time1=new Date()
            var s =Math.round((time1-time0)/1000)
            var h = Math.floor(s/3600)
            var m = s%3600
            var min = Math.floor(m/60)
            var sec = m%60
            console.log(
               this.checkTime(h)+':'+this.checkTime(min)+':'+this.checkTime(sec)
            )
            this.setState({timer:(this.checkTime(h)+':'+this.checkTime(min)+':'+this.checkTime(sec))})
            
        },1000)
        this.setState({disabled:true})
    }    
        
    stopTracking=async(index)=>{
        await this.setState({
            readyToSubmit:true,
            disabled:false
        })
        clearInterval(this.state.counting)
        console.log(this.state.readyToSubmit)
        
    }    
     

    checkTime=(t)=>{return t<10? '0'+t:t}

    submitHour=async (value)=>{
        
        const hour = (parseInt(this.state.timer.split(':')[2])/3600+parseInt(this.state.timer.split(':')[1])/60+parseInt(this.state.timer.split(':')[0])).toFixed(2)
        
        const lists1 = this.state.lists
        const number = this.state.lists[this.state.selectedIndex].time + Number(hour*value/100)
        const d = new Date().toString()
        const date = d.split(" ")[1]+' '+d.split(" ")[2]

        await console.log(lists1)
        await console.log(this.state.selectedIndex)

        if(lists1[this.state.selectedIndex].hourStack.time.includes(date)){
            const pos = lists1[this.state.selectedIndex].hourStack.time.indexOf(date)
            lists1[this.state.selectedIndex].hourStack.hour[pos] = lists1[this.state.selectedIndex].hourStack.hour[pos]+Number(hour*value/100)
        }
        else{
            lists1[this.state.selectedIndex].hourStack.time.push(date)
            lists1[this.state.selectedIndex].hourStack.hour.push(Number(hour*value/100))
        }

        

        lists1[this.state.selectedIndex].time=number
        if(number>=lists1[this.state.selectedIndex].hourGoal){
            alert('You have reached the GOAL!!')
        }
        console.log(hour)
        
        console.log(number)


        const docKey = this.state.email
        firebase
        .firestore()
        .collection('users')
        .doc(docKey)
        .update({
            lists:lists1
        })

        this.setState({
            selectedIndex:null,
            // functionViewDisplay:false,
            timer:"00:00:00",
            readyToSubmit:false
        })
    }

    cancleIt=()=>{
        this.setState({
            selectedIndex:null,
            // functionViewDisplay:false,
            timer:"00:00:00",
            readyToSubmit:false,
            functionListIndex:'',
        })
    }
    newHour=()=>{
        this.setState({
            newHourBoxVisibility:true,
            selectedIndex:''
        })
    }
    // newHour=()=>{
    //     console.log('create new hour')
    //     const docKey = this.state.email
    //     await
    //     firebase
    //     .firestore()
    //     .collection('users')
    //     .doc(docKey)
    //     .update({
    //         lists:firebase.firestore.FieldValue.arrayUnion({
    //             item:'what?',
    //             time:0
    //         })
    //     })
    // }
    displaySwitch=()=>{
        this.setState({newHourBoxVisibility:false})
    }
    

    editTitle=async(index)=>{
        console.log(index)
        this.setState({
            edit:true,
            editIndex:index
        })
    }
    checkEdit = async(name,index)=>{
        const lists1=this.state.lists
        lists1[index].item=name
        await firebase
        .firestore()
        .collection('users')
        .doc(this.state.email)
        .update({
            lists:lists1
        })
        this.setState({
            edit:false,
            editIndex:''
        })
    }
    clickItem=async (index)=>{
        console.log(index)
        await this.setState({
            displayIndex:index,
            functionViewDisplay:true,
            functionListIndex:index,
            chartData:{
                labels: this.state.lists[index].hourStack===undefined? null:this.state.lists[index].hourStack.time,
                datasets: [{
                    label: 'Daily time (h)',
                    data: this.state.lists[index].hourStack===undefined? null:this.state.lists[index].hourStack.hour,
                    backgroundColor: 
                        'rgba(54, 162, 235, 0.2)',
                    borderColor: 
                        'rgba(255, 99, 132, 1)',
                    
                }]
            }
        })
        console.log(this.state.displayIndex)
        // this.loadChart(index)
    }
//     loadChart =(index)=>{
//         console.log(index)
//         var ctx = document.getElementById('myChart');
//         console.log(this.state.lists[index])
//         var myChart = new Chart(ctx, {
//             type: 'line',
//         data: {
//             labels: this.state.lists[index].hourStack.time,
//             datasets: [{
//                 label: '# of Votes',
//                 data: this.state.lists[index].hourStack.hour,
//                 backgroundColor: [
//                     'rgba(54, 162, 235, 0.2)',
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             scales: {
//                 yAxes: [{
//                     ticks: {
//                         beginAtZero: true
//                     }
//                 }]
//             }
//         }
//     });
// }
    cancleFunctionListIndex=()=>{
        this.setState({
            functionListIndex:'',
        })
    }

    unselectItem=()=>{
        this.setState({functionViewDisplay:false})
    }
    signOut=()=>{
        firebase.auth().signOut()
    }
    submitNewHour=async(e,item,hourGoal,index,boolean)=>{
        e.preventDefault()

        if(boolean){
        const docKey = this.state.email
        await firebase
        .firestore()
        .collection('users')
        .doc(docKey)
        .update({
            lists:firebase.firestore.FieldValue.arrayUnion({
                item:item,
                time:0,
                hourGoal:hourGoal,
                hourStack:{
                    hour:[],
                    time:[]
                }
            })
        })
        this.displaySwitch()}

        else{
            this.setState({functionViewDisplay:false})
            await console.log(this.state.functionViewDisplay)
            const lists1=this.state.lists[index]
            await firebase
            .firestore()
            .collection('users')
            .doc(this.state.email)
            .update({
                lists:firebase.firestore.FieldValue.arrayRemove(lists1)
            })
        }
    }
    toggleFunctionList=()=>{
        this.state.openDrawer?
        this.setState({
            openDrawer:false
        }):
        this.setState({
            openDrawer:true
        })
    }

    
    

}   
export default withStyles(styles)(DashboardComponent);