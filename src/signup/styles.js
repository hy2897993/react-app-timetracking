const styles = theme => ({
  img:{
    backgroundImage: `url('https://raw.githubusercontent.com/hy2897993/react-app-timetracking/gh-pages/road.jpg')`,
    backgroundSize:'cover',
    backgroundPosition:'center',
    width:'100%',
    height:'100vh',
    position:'fixed',

  },
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    submit: {
      marginTop: theme.spacing(3),
    },
    hasAccountHeader: {
      width: '100%'
    },
    logInLink: {
      width: '100%',
      textDecoration: 'none',
      color: '#303f9f',
      fontWeight: 'bolder'
    },
    cancleLink:{
      width: '100%',
      textDecoration: 'none',
      color: 'grey',
      fontWeight: 'bolder',
      textAlign: 'right'

    },
    errorText: {
      color: 'red',
      textAlign: 'center'
    }
  });
  
  export default styles;