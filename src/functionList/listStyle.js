const styles = theme => ({
    root: {
        // backgroundColor: theme.palette.background.paper,
        // backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        // backgroundImage: 'linear-gradient(to bottom, #e2eff0 0%,  #ffffff 100%)',background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
        backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
        height: '100vh',
        overflow:'hide',
        position: 'absolute',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        left: '0',
        width: '70px',
        fontFamily:'Quicksand',
        // boxShadow:'50px 0px 50px #516976',
  
        // boxShadow: '0px 0px 2px black'
      },
      subroot:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
      },
      avatar:{
        margin:'10px',
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
      newChatBtn: {
        margin:'10px',
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
      listItem: {
        cursor: 'pointer',
        backgroundImage: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
      },
      listItem1: {
        cursor: 'pointer',
      },
      exitButton:{
        cursor: 'pointer',
        marginBottom:'30px',
        width: theme.spacing(4),
        height: theme.spacing(4),
        color:'grey',
      },
      arrowRightIcon:{
        width: theme.spacing(5),
        height: theme.spacing(5),
        cursor: 'pointer',
        marginTop:'25px',
        color:'white',
      },
});
  
export default styles;