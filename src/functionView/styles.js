const styles = theme => ({

  content: {
    height: '100vh',
    overflow: 'auto',
    marginLeft: '300px',
    boxSizing: 'border-box',
    // backgroundImage: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
    // backgroundImage: `url('/road.jpg')`,
    // backgroundSize:'cover',
    // backgroundPosition:'center',
    top: '50px',
    width: 'calc(100% - 300px)',
    display:'flex',
    flexDirection:'column',
    zIndex:'-1',
  },
  content_1: {
    position:'absolute',
    boxSizing: 'border-box',
    // backgroundImage: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
    backgroundImage: `url('https://raw.githubusercontent.com/hy2897993/react-app-timetracking/gh-pages/walk.jpg')`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    width: 'calc(100% - 300px)',
    height:'100vh',
    marginLeft:'300px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    zIndex:'-1',
  },
  content_wider: {
    height: '100vh',
    overflow: 'auto',
    marginLeft: '70px',
    boxSizing: 'border-box',
    // backgroundImage: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
    // backgroundImage: `url('/road.jpg')`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    top: '50px',
    width: 'calc(100% - 70px)',
    display:'flex',
    flexDirection:'column',
    zIndex:'-1',
  },
  content_1_wider: {
    position:'absolute',
    boxSizing: 'border-box',
    // backgroundImage: `linear-gradient(to bottom, #9ab3b7 0%, #6e8c97 100%)`,
    // backgroundImage: 'linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)',
    backgroundImage: `url('https://raw.githubusercontent.com/hy2897993/react-app-timetracking/gh-pages/walk.jpg')`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    width: 'calc(100% - 70px)',
    height:'100vh',
    marginLeft:'70px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    zIndex:'-1',
  },
  board:{
    position:'relative',
    display:'flex',
    width:'calc(100%-100px)',
    padding:'50px',
    justifyContent:'center',
    flexWrap:'wrap',
    backgroundImage: `url('https://raw.githubusercontent.com/hy2897993/react-app-timetracking/gh-pages/road.jpg')`,
    backgroundSize:'cover',
    backgroundPosition:'center',
  },
  lowerBoard:{
    width:'calc(100%-100px)',
    padding:'50px',
    position:'relative',
    display:'flex',
    flexDirection:'row',

    justifyContent:'space-evenly',
    flexWrap:'no-wrap',
  },
  paper:{
    margin: theme.spacing(5),
    width: theme.spacing(25),
    height: theme.spacing(25),
    padding:theme.spacing(2),
    flexShrink: 1,
    cursor:'pointer',
    
  },
  addNewPaper:{
    margin: theme.spacing(5),
    width: theme.spacing(25),
    height: theme.spacing(25),
    padding:theme.spacing(2),
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    cursor:'pointer',

  },

  theoryPaper:{
    margin: theme.spacing(5),
    width: theme.spacing(60),
    height: 'auto',
    padding:theme.spacing(2),
    border:'1px solid grey',
  },
  addIcon:{
    width: theme.spacing(10),
    height: theme.spacing(10),
    position:'relative',
    alignSelf:'center'
  },

  // form:{
  //   position: 'flex',
  //   textAlign:'center',
    
  //   left: '315px',
  //   boxSizing: 'border-box',
  //   overflow: 'auto',
  //   width: 'calc(100% - 300px - 50px)'

  // },


  submit: {
    marginTop: theme.spacing(3),
    margin:'30px',
    borderRadius:'10px',
  },
  littleInput:{
    display:'flex',
    justifyContent:'space-evenly',
    width:'500px',
    height:'100px',
    boxSizing: 'border-box',
    alignSelf:'center',

  },


  head:{
    height:'50px'
  },

  chatHeader: {
    // width: '100%',
    // height: '50px',
    // background: '#6a85b6',
    // color:'#6a85b6',
    fontFamily: `Quicksand`,
    position:'absolute',
    fontSize: '28px',
    top:'50px',
    left:'100px',
    fontWeight:'bold',
    textTransform: 'uppercase',
    // textAlign: 'center',
    color: 'black',
    // boxSizing: 'border-box',
    // zIndex:'1'
  },
  ArrowBackIcon:{
    position:'absolute',
    top:'50px',
    left:'50px',
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  startBtn: {
    display:'flex',
    justifyContent: 'space-around',
    textAlign:'center',
    flexDirection:'column',
    // borderRadius: '10px',
    width:'200px',
    height:'40px',
    margin:'30px',
    padding:'10px',
    // boxShadow:'black 3px 3px 5px',
    background:'#c3cfe2',
  },
  timer:{
    width: '100%',
    height: '100px',
    fontSize: '50px',
    textAlign: 'center',
    boxSizing: 'border-box',
    color:'#214280',
    fontFamily: `'Oswald', sans-serif`,
    
  },
  
    rate: {
      position:'fixed',
      left:'50%',
      top:'50%',
      transform: 'translate(-50%,-50%)',
      background: 'rgba(255, 255, 255,1)',
      margin:'30px',
      padding:'30px',
      // box:'black 0px 0px 10px',
      width:'60%',
      height:'40vh',
      boxSizing: 'border-box',
      boxShadow:'30px 10px 50px #516976',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-between',
      flexWrap:'nowrap',
      zIndex:'2'
    
    },
    
    onOffBtn:{
      
      display:'flex',
      width:'500px',
      boxSizing: 'border-box',
      boxShadow:'1 1 black'

    },
    input: {
      position: 'absolute',
      top:'400px',
      left:'330px',
      width:'1100px',
      height:'20px',
      marginLeft:'315px'
      // borderRadius:'10px',

    },
    linear:{
      backgroundImage: 'linear-gradient(to left, #a8edea 0%, #ffffff 100%)',
      height:'20px',
      borderRadius:'10px',
      
      // boxShadow:'#aac8d1 0px 0px 30px',
    },
    linearBox:{
      width:'60%',
    },
    img:{
      transform: 'translateX(-41px)',
      position:'relative',
      mixBlendMode: 'multiply',
    },
    chart:{
      width:'60%',
      height:'400px',
      margin:'50px',
    },
    canvas:{
      zIndex:1,
    },

});

export default styles;