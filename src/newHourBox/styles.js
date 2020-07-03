const styles = theme => ({
    content: {
      height: '100vh',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '300px',
      boxSizing: 'border-box',
      display:'flex',
      flexDirection:'column',
      alighItems:'center',
      
      width: 'calc(100% - 300px)',
      position: 'absolute',
      fontFamily: `'Quicksand', `
    },
    content_wider: {
      height: '100vh',
      overflow: 'auto',
      padding: '25px',
      marginLeft: '70px',
      boxSizing: 'border-box',
      display:'flex',
      flexDirection:'column',
      alighItems:'center',
      
      width: 'calc(100% - 70px)',
      position: 'absolute',
      fontFamily: `'Quicksand', `
    },
    main: {
      // width: 'auto',
      // justifyContent: 'space-around',
      // alignItems: 'center',
      // display: 'flex', // Fix IE 11 issue.
      // marginLeft: theme.spacing(3),
      // marginRight: theme.spacing(3),
      // [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      //   width: 400,
      //   marginLeft: 'auto',
      //   marginRight: 'auto',
      // },
    },
    paper: {
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
      position: 'absolute',
      width: '350px',
      top: '50px',
      left: 'calc(50% + 150px - 175px)'
    },
    input: {
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      marginTop: theme.spacing(3)
    },
    errorText: {
      color: 'red',
      textAlign: 'center'
    }
  });
  
  export default styles;