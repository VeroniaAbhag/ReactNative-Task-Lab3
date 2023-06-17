import {StyleSheet} from "react-native"
export default StyleSheet.create({
    container:{
      flex:1,
      width:'100%'
    },
    headerStyle:{
      backgroundColor:"steelblue",
      padding:15,
      color:"white",
      fontWeight:"900"
    },
    btn:{
        backgroundColor: "steelblue",
        borderRadius:5,
        marginLeft:150
    },
    btnTxt:{
        margin:7,
        color:'white',
        fontWeight:'bold',
    },
    txtInput:{
      borderRadius:10,
      borderColor:'2072BF',
      width:'100%'
    },
    Homebtn:{
      backgroundColor:"steelblue",
      color:'DFE8EF',
      marginBottom:2,
      borderRadius:10,
      borderColor:'native black'
    },
    userContainer:{
      backgroundColor: 'DFE8EF',
      flex: 1,
      margin: 10,
      width: "100%",
    },
    user:{
      flexDirection: "row",
      height: 50,
      minWidth: "55%",
      marginHorizontal: 10,
      marginVertical: 5,
      borderRadius: 10,
      backgroundColor: 'DFE8EF',
      borderBottomColor: 'steelblue',
      borderBottomWidth: 1,
      justifyContent: "space-between",
    },
    userTxt:{
      width: 100,
      height:100,
      margin: 15,
      color: 'black',
    },
    userBtn:{
      flex: 2,
      flexDirection: "row-reverse",
      marginHorizontal: "auto",
      width:'auto',
      height:'auto',
    },
    btnTxt:{
      color: 'steelblue',
      marginTop: 5,
      marginRight: -10,
    },
    txtContainer:{

    },
    detailsContainer:{
      justifyContent: 'center',
      borderColor:'steelblue',
      borderRadius:'20'
    },
    txtContainer:{
      flexDirection: "row",
      marginHorizontal: "20%",
      borderColor:'steelblue',
      borderRadius:'20'
    },
    titleTxt:{
      flex:1,
    },
    infoTxt:{
      flex:1
    },
    navbar:{
      backgroundColor: 'steelblue'
    }
  })