const styles = theme => ({
    root: {
      // backgroundColor: theme.palette.background.paper,
      // backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
      // boxShadow:'50px 0px 100px #516976',
      height: '100vh',
      overflow:'auto',
      position: 'absolute',
      left: '0',
      width: '300px',
      fontFamily:'Quicksand',
      color:'#ffffff'

      // boxShadow: '0px 0px 2px black'
    },
    
    avatar:{
      margin:'10px',
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
    arrowLeftIcon:{
      margin:'10px',
      width: theme.spacing(5),
      height: theme.spacing(5),
      cursor:'pointer',
    },
    listItem: {
      cursor: 'pointer',
      // backgroundImage: `linear-gradient(to bottom, #9ab3b7 0%, #6e8c97 100%)`,
      backgroundImage: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
      
    },
    listItem1: {
      cursor: 'pointer',
    },
    signOutBtn: {
      position: 'fixed',
      bottom: '0px',
      left: '0px',
      width: '300px',
      borderRadius: '0px',
      backgroundColor: 'grey',
      height: '35px',
      boxShadow: '0px 0px 2px black',
      color: 'white'
    },
    startBtn: {
      borderRadius: '0px',
      background: '#c3cfe2'
    },
    unreadMessage: {
      color: 'red',
      position: 'absolute',
      top: '0',
      right: '5px'
    },
    boxicon: {
      
      top:'5px',
      right:'5px',
      position:'absolute'
      
    },
    newChatBtn: {
      borderRadius: '0px',
      background:'#eb96b5'
    },
    editIcon: {
      
      top:'15px',
      right:'15px',
      position:'absolute',
      color:'grey',
      
    },
    deleteIcon: {
      
      top:'55px',
      right:'15px',
      width:'20px',
      position:'absolute'
      
    },
    display:{
      cursor: 'pointer',
      backgroundColor:'grey',
      color: 'red'
    },
    undisplay:{
      cursor: 'pointer',
      backgroundColor:'white'
    }
    
  });
  
  export default styles;