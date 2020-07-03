const styles = theme => ({

    main:{
        backgroundImage: `url('https://raw.githubusercontent.com/hy2897993/react-app-timetracking/gh-pages/road.jpg')`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'100%',
        height:'100vh',

        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Quicksand',
        color:'white',



        
    },
    h1:{
        fontSize:'50px',
        margin:'100px',
    },
    h2:{
        fontSize:'30px',
        margin:'10px',
    },
    h3:{
        height:'20vh',
        width:'40%',
        margin:'100px',
        display:'flex',
        justifyContent:'space-evenly',
        opacity:'1',
        transition: '0.3s',
    },
    h3Hover:{
        height:'20vh',
        width:'40%',
        margin:'100px',
        display:'flex',
        justifyContent:'space-evenly',
        opacity:'0.1',
        transition: '0.3s',

    },

    btn:{
        height:'60px',
        width:'140px',
        borderRadius:'5px',
        padding:'5px',
        color:'white',
    }
});
  
export default styles;