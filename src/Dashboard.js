import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import ControlBoard from './servepart/ControlBoard';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { FixedSizeList } from 'react-window';
import Box from '@material-ui/core/Box';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import MsgProcessor from "./servepart/MsgProcessor"


const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'584px',
    marginTop: theme.spacing(0),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper_1: {  //전체 크기 변환 height 변경
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'584px',       
    color: theme.palette.text.secondary,
    
  },
  paper_2_1: {  //전체 크기 변환 height 변경
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'274px',       
    color: theme.palette.text.secondary,
    
  },
 paper_2_2: {  //전체 크기 변환 height 변경
  padding: theme.spacing(0),
    textAlign: 'center',
  height:'294px',       
  color: theme.palette.text.secondary,
  
  },
});

class Dashboard extends Component {

  today = new Date();

  todayname = this.today.getDay();

  week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
  todayStr = this.today.getFullYear() + "년 " +(this.today.getMonth()+1) +"월 "+ this.today.getDate() + "일 ";
  todayname_week = (this.week[this.todayname]);

  userName = localStorage.getItem("USNAME");

  constructor(props){
    super(props);
    this.state = {
      count:0,
      l_j_event:[],
      l_j_count:0,
      l_drug:[],
      druglength:0
    }
  }

  componentDidMount(){
    let userId = localStorage.getItem("USN");
    let msgProc = new MsgProcessor();
    msgProc.attemptDashboard(userId, (result)=> { 
      if (result[0] == 0) {
        this.setState({
          count:result[1][0],
          l_j_event:result[2],
          l_j_count:result[2].length,
          l_drug:result[3],
          druglength:result[3].length
        })
      }
      else {
        alert(result[1]);
      }
    });
  } 
///하루 2번 12시간 간격으로 페이지 reload
  refreshDashboard = setInterval(this.componentDidMount, 43200000);
    
  handleMedSubmit = event => {
    event.preventDefault();
    this.props.history.push("/Medicine");
    
  } 
  handleEventSubmit = event => {
    event.preventDefault();
    this.props.history.push("/EventAdder");
    
  } 

  
  
  renderMedRow(mState, handleMedSubmit, props) {
    
    const { index, style } = props;
    // console.log(mState.l_drug);
    const med_name = ['혈압약', '감기약', '소화제', '비타민','관절약'];
    let _drugName=[];
    mState.l_drug.forEach(element => {
      _drugName.push(element.drug_name);
    });

    console.log(mState.l_drug[index].time);

    const med_time = index => {
      switch(mState.l_drug[index].time){
        case "0":
          return (
          <dvi>
            <Brightness6Icon  style={{ fontSize: 40 }}/><Brightness5Icon color="disabled" style={{ fontSize: 40 }}/><Brightness4Icon color="disabled" style={{ fontSize: 40 }}/>
            </dvi>);//아침
        case "1":
          return (
            <dvi>
              <Brightness6Icon   color="disabled" style={{ fontSize: 40 }}/><Brightness5Icon style={{ fontSize: 40 }}/><Brightness4Icon color="disabled" style={{ fontSize: 40 }}/>
              </dvi>); //점심
        case "2":
          return (
            <dvi>
              <Brightness6Icon color="disabled" style={{ fontSize: 40 }}/><Brightness5Icon color="disabled" style={{ fontSize: 40 }}/><Brightness4Icon style={{ fontSize: 40 }}/>
              </dvi>);//저녁
        case "3":
          return (
            <dvi>
              <Brightness6Icon  style={{ fontSize: 40 }}/><Brightness5Icon color="disabled" style={{ fontSize: 40 }}/><Brightness4Icon style={{ fontSize: 40 }}/>
              </dvi>);//아침, 저녁
        case "4":
          return (
            <dvi>
              <Brightness6Icon  color="disabled" style={{ fontSize: 40 }}/><Brightness5Icon style={{ fontSize: 40 }}/><Brightness4Icon style={{ fontSize: 40 }}/>
              </dvi>);//점심, 저녁
        default:
          return (
            <dvi>
            <Brightness6Icon  style={{ fontSize: 40 }}/><Brightness5Icon style={{ fontSize: 40 }}/><Brightness4Icon style={{ fontSize: 40 }}/>
            </dvi>);//아침, 점심, 저녁
      }
    }
   
    
    return (
      ///List 변수 값 넣어보기
      
    <form onSubmit={this.handleMedSubmit}> 
    
      <ListItem button onClick={handleMedSubmit} style={{justifyContent:'center' , alignItems: 'center',display: 'flex'}} key={index} >
        <Box width="100%" borderBottom={0.5} borderColor="palette.primary.light">
        <Grid container  alignContent="center"  xs={12}>
          <Grid item xs={7}>
            <ListItemText primary={<Typography variant="h4" Align="center">{med_name[_drugName[index]]}</Typography>}/>
          </Grid>
          <Grid item xs={5}>
            <ListItemIcon >
            {med_time(index)}
          </ListItemIcon>
          </Grid>
        </Grid>
      </Box>
      </ListItem>
      </form>
    );
  }

  rendereventRow(mState, props) {
    const { index } = props;

    let join_event=[];
    mState.l_j_event.forEach(element => {
      join_event.push(element.event_name);
    });
    return (
      ///List 변수 값 넣어보기
      <Box width="100%" borderBottom={0.5} borderColor="palette.primary.light">
        <Grid container  alignContent="center"  xs={12}> 
          <ListItem button style={{justifyContent:'center' , alignItems: 'center',display: 'flex'}}  key={index} >
        
          <Grid item xs={12}>
            <ListItemText primary={<Typography variant="h4" Align="center">{join_event[index]}</Typography>}/>
          </Grid>
      </ListItem>
      </Grid>
      </Box>
          
    );
  }
  render(){
    const { classes } = this.props;
    var count_num = this.state.count;
    for( var event_count in count_num ) {
      console.log( count_num[event_count] );
    }
   
    return (
      <div className={classes.root}>
        <Grid container alignContent="center" spacing = {2} >
{/* 첫번쨰 구역 */}
          <Grid item xs={2}>
           <ControlBoard history = {this.props.history}/>
          </Grid>
{/* 두번쨰 구역 */}
          <Grid item xs={5}>
              <Grid alignItems="center" container spacing = {2}>
              <Grid item xs={12}>
                <Paper className={classes.paper_2_1}>
                <Box className={classes.palette} height={270} color="primary.main" border= {2}borderColor="#00bcd4" borderRadius="borderRadius">
                <Box color="primary.contrastText" bgcolor="#00bcd4" fontSize={30} textAlign="center" fontWeight="fontWeightBold" p={1}>
                  {this.todayStr}{this.todayname_week} 
                </Box>
                <Box color="text.primary" fontSize={35} textAlign="center" fontWeight="fontWeightMedium">
                  <br/>안녕하세요. {this.userName} 님!
                 </Box>  
                 </Box> 
                </Paper>
              </Grid>

              <Grid item xs={12}>
              <Paper className={classes.paper_2_2}>
              <Box height={290} color="primary.main" border= {2}borderColor="#ed4b82" borderRadius="borderRadius">
              <Box color="primary.contrastText" bgcolor="#ed4b82" fontSize={30} textAlign="center" fontWeight="fontWeightBold" p={1}>
              약 목록
              </Box> 
              <Box color="text.primary" height={236}  borderRadius="borderRadius" p={1} >
                {this.state.druglength == 0?
                <form  onSubmit={this.handleMedSubmit} style={{justifyContent:'center' , alignItems: 'center',display: 'flex'}}> 
                    <Button  onClick = {this.handleMedSubmit}>
                    <AddCircleIcon color="secondary" style={{ fontSize: 40 }}/><Typography variant="h4" Align="center">새로운 약 추가하기</Typography>
                </Button>
                </form>:
                  <FixedSizeList height={240} width="100%"  itemSize={55} itemCount={this.state.druglength}>
                  {this.renderMedRow.bind(this, this.state, this.handleMedSubmit)}
                </FixedSizeList>}
              </Box>
              </Box>
              </Paper>
              </Grid>
             </Grid>
          </Grid>
{/* 세번째구역 */}

          <Grid item xs={5}>
          <Paper className={classes.paper_1}>
          <Box height={580} color="primary.main" border= {2}borderColor="warning.light" borderRadius="borderRadius">
            <Box color="primary.contrastText" bgcolor="warning.light" fontSize={30} textAlign="center" fontWeight="fontWeightBold" p={1}>
              행사 참석 목록
              </Box> 
              <Box color="text.primary" height={500}  borderRadius="borderRadius"  p={1}>
                <FixedSizeList height={440} width="100%"  itemSize={70} itemCount={this.state.l_j_count}>
                {this.rendereventRow.bind(this, this.state)}
              </FixedSizeList>
              <form noValidate onSubmit={this.handleEventSubmit}>
              <br/>
              <IconButton type = "submit" color="primary" size='small'aria-label="delete">
                {/*왜 this.state.c_n_event가 안들어가지 */}
                <Badge color="secondary" badgeContent={this.state.count[event_count]} >
                <MenuRoundedIcon style={{fontSize: 50 }}/>
                </Badge>
              </IconButton>
            </form>

              </Box>

            
            </Box>
            </Paper>
          </Grid>
          </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(Dashboard);






 