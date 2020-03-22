import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import { FixedSizeList } from 'react-window';
import Box from '@material-ui/core/Box';


import MsgProcessor from "./MsgProcessor"

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'450px',
    margin: theme.spacing(0),
    },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height:'350px',    
    overflow: 'auto',
    maxHeight: '350px',
    color: theme.palette.text.secondary,
    
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  });


class IconTextList extends Component{
  
  
  constructor(props){
    super(props);
    this.state = {
      drugList:[],
      list_length:0,
      Dname:0,
      Dtime:0
    }
    
  }
  componentDidMount(){
    let userId = localStorage.getItem("USN");
    let msgProc = new MsgProcessor();
    msgProc.attempMedicine(userId, (result)=> { 
      if (result[0] == 0) {
        console.log(result[1]);
        this.setState({
          drugList:result[1],
          list_length:result[1].length
        })  
      }
    });
  }

  handleDdrugSubmit = event => {
    console.log(event);
    let userId = localStorage.getItem("USN");
    let msgProc = new MsgProcessor();
    let index = event.target.title;
    let drugName = this.state.drugList[index].drug_name;
    let drugTime = this.state.drugList[index].time;
    console.log(this.state.drugList[index].drug_name);
    console.log(event.target.title);
    console.log(this.state.drugList);
      msgProc.attemptDeleteDrug( userId,  drugName, drugTime, (result) => { 
          if (result[0] == 0) {
            console.log(result[1]);
          alert("삭제되었습니다.");
          }
          else {
            alert(result[1]);
          }
        });
    }
  
  
    
  renderRow(mState, props) {
    const { index, style } = props;
    const med_name = ['혈압약', '감기약', '소화제', '비타민','관절약'];

    let drugName =[];
    mState.drugList.forEach(element => {
      drugName.push(element.drug_name);
      
    });  
    let drugTime =[];
    mState.drugList.forEach(element => {
    drugTime.push(element.time);

    });  
   
    const med_time = index => {
      switch(mState.drugList[index].time){
        case "0":
          return (
          <dvi>
            <Brightness6Icon  style={{ fontSize: 50 }}/><Brightness5Icon color="disabled" style={{ fontSize: 50 }}/><Brightness4Icon color="disabled" style={{ fontSize: 50 }}/>
            </dvi>);//아침
        case "1":
          return (
            <dvi>
              <Brightness6Icon   color="disabled" style={{ fontSize: 50 }}/><Brightness5Icon style={{ fontSize: 50 }}/><Brightness4Icon color="disabled" style={{ fontSize: 50 }}/>
              </dvi>); //점심
        case "2":
          return (
            <dvi>
              <Brightness6Icon color="disabled" style={{ fontSize: 50 }}/><Brightness5Icon color="disabled" style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
              </dvi>);//저녁
        case "3":
          return (
            <dvi>
              <Brightness6Icon  style={{ fontSize: 50 }}/><Brightness5Icon color="disabled" style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
              </dvi>);//아침, 저녁
        case "4":
          return (
            <dvi>
              <Brightness6Icon  color="disabled" style={{ fontSize: 50 }}/><Brightness5Icon style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
              </dvi>);//점심, 저녁
        default:
          return (
            <dvi>
            <Brightness6Icon  style={{ fontSize: 50 }}/><Brightness5Icon style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
            </dvi>);//아침, 점심, 저녁
      }
    }

    return (
      ///List 변수 값 넣어보기
        <ListItem style={style} key={index} >
        <Grid container  alignContent="center"  xs={12}>
          <Grid item xs={4}>
            <ListItemText style={{justifyContent:'center' , alignItems: 'center',display: 'flex'}} primary={<Typography variant="h4" Align="center">{[index+1]+". " + med_name[drugName[index]]}</Typography>}/>
          </Grid>
          <Grid item xs={4}>
            <ListItemIcon  style={{justifyContent:'center' , alignItems: 'center',display: 'flex'}}>
            {med_time(index)}
          </ListItemIcon>
          </Grid>
          <Grid item xs={4}>
          <form noValidate  onSubmit={this.handleDdrugSubmit} style={{justifyContent:'center' , alignItems: 'center',display: 'flex'}}>
          <Button onClick={this.handleDdrugSubmit}  variant="contained"    startIcon={<DeleteForeverSharpIcon style={{ fontSize: 40 }}/>}>
        <Typography variant="h4" align="center" title={index} >{[index+1]+"번 삭제"}</Typography>
        </Button>
          
          {/* <Button alignItems= 'center' onClick={this.handleDdrugSubmit} ><Typography variant="h4" align="center" title={index} >{[index+1]+"번 삭제"}</Typography></Button> */}
          </form>
          </Grid>
        </Grid>
      </ListItem>
      
    );
  }
  
   render(){
    const { classes } = this.props;
      return (

        <div >
            <br/>
          <Grid item xs={12} spacing={2}> 
          <Grid item xs={12}>
          <Grid container>
            <Grid item xs={4}>
            <Box color="text.primary" height={35}  borderRadius="borderRadius" p={1} >
            <Typography variant="h4" Align="center">약 이름</Typography>
            </Box>
            </Grid>
            <Grid item xs={4}>
            <Box color="text.primary" height={35}  borderRadius="borderRadius" p={1} >
            <Typography variant="h4" Align="center">복용시간</Typography>
            </Box>
            </Grid>
            <Grid item xs={4}>
            <Box button onClick={this.delte} color="text.primary" height="h4"  borderRadius="borderRadius" p={1} >
            <Typography variant="h4" Align="center">항목 삭제</Typography>
            </Box>
            </Grid>
          </Grid>
            </Grid> 
            <Divider/>
             <FixedSizeList height={250} width='100%' itemSize={80} itemCount={this.state.list_length}>
            {this.renderRow.bind(this, this.state)}
            </FixedSizeList>
           
            <Divider/>
            </Grid>
        </div>
      );
    }
 }
 
 export default  withStyles( useStyles )(IconTextList);
