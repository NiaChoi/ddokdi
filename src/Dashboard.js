import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import ControlBoard from './servepart/ControlBoard';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
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
    height:'292px',       
    color: theme.palette.text.secondary,
    
  },
});

class Dashboard extends Component {

  today = new Date();

  todayname = this.today.getDay();

  week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
  todayStr = this.today.getFullYear() + "년 " +(this.today.getMonth()+1) +"월 "+ this.today.getDate() + "일"+(this.week[this.todayname]);

  userName = localStorage.getItem("USNAME");

  constructor(props){
    super(props);
    this.state = {
      count:0,
      l_j_event:[],
      l_drug:[],
      druglength:0
    }
  }

  componentDidMount(){
    let userId = localStorage.getItem("USN");
    let msgProc = new MsgProcessor();
    msgProc.attemptDashboard(userId, (result)=> { 
      if (result[0] == 0) {
        console.log(result[1][0]);
        console.log(result[2]);
        console.log(result[3]);
        console.log(result[3].length);
        this.setState({
          count:result[1][0],
          l_j_event:result[2],
          l_drug:result[3],
          druglength:result[3].length
        })
      }
      else {
        alert(result[1]);
      }
    });
  } 

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    
  } 
  handleMedSubmit = event => {
    event.preventDefault();
    this.props.history.push("/Medicine");
    
  } 
  handleEventSubmit = event => {
    event.preventDefault();
    this.props.history.push("/EventAdder");
    
  } 

  
  
  renderMedRow(mState, props) {
    

    const { index, style } = props;
    // console.log(mState.l_drug);
    const med_name = ['혈압약', '감기약', '소화제', '비타민','관절약'];

    // let drug_list=[];
    // mState.l_drug.forEach(element => {
    //   drug_list.push(element.drug_name);
    // });

    return (
      ///List 변수 값 넣어보기
      <ListItem button style={style} key={index} >
        <Grid container  alignContent="center"  xs={12}>
          <Grid item xs={8}>
            <ListItemText primary={<Typography variant="h7" Align="center">{med_name[index]}</Typography>}/>
          </Grid>
          <Grid alignItems="center"item xs={4}>
            <ListItemIcon >
            <Brightness6Icon style={{ fontSize: 40 }}/>
            <Brightness5Icon style={{ fontSize: 40 }}/>
            <Brightness4Icon style={{ fontSize: 40 }}/>
          </ListItemIcon>
          </Grid>
        </Grid>
      </ListItem>
    );
  }
  // renderMedRow(props) {
    

  //   const { index, style } = props;
  //   // console.log(mState.l_drug);
  //   const med_name = ['혈압약', '감기약', '소화제', '비타민','관절약'];

  //   // let drug_list=[];
  //   // mState.l_drug.forEach(element => {
  //   //   drug_list.push(element.drug_name);
  //   // });

  //   return (
  //     ///List 변수 값 넣어보기
  //     <ListItem button style={style} key={index} >
  //       <Grid container  alignContent="center"  xs={12}>
  //         <Grid item xs={8}>
  //           <ListItemText primary={<Typography variant="h7" Align="center">{med_name[index]}</Typography>}/>
  //         </Grid>
  //         <Grid alignItems="center"item xs={4}>
  //           <ListItemIcon >
  //           <Brightness6Icon style={{ fontSize: 40 }}/>
  //           <Brightness5Icon style={{ fontSize: 40 }}/>
  //           <Brightness4Icon style={{ fontSize: 40 }}/>
  //         </ListItemIcon>
  //         </Grid>
  //       </Grid>
  //     </ListItem>
  //   );
  // }
  render(){
    const { classes } = this.props;
    // console.log(this.state.);
    
    return (
      <div className={classes.root}>
        <Grid container alignContent="center" spacing = {0} >
{/* 첫번쨰 구역 */}
          <Grid item xs={2}>
           <ControlBoard history = {this.props.history}/>
          </Grid>
{/* 두번쨰 구역 */}
          <Grid item xs={5}>
              <Grid alignItems="center" container spacing = {0}>
              <Grid item xs={12}>
                <Paper className={classes.paper_2_1}>
                <Box color="text.secondary" fontSize={35} textAlign="center" fontWeight="fontWeightBold">
                  <br/>안녕하세요! {this.userName} 님!
                  <br/>오늘은 {this.todayStr} 입니다.
              </Box>
                </Paper>
              </Grid>

              <Grid item xs={12}>
              <Paper className={classes.paper_2_1}>
              <Box color="text.secondary" fontSize={20} textAlign="center" fontWeight="fontWeightBold">
              약 목록
              </Box>
              <FixedSizeList height={200} width='100%' itemSize={60} itemCount={this.state.druglength}>
              {this.renderMedRow.bind(this.state)}
              </FixedSizeList>
                
                <form noValidate onSubmit={this.handleMedSubmit}>
                      <IconButton type = "submit" color="primary"  size='small'aria-label="delete">
                        <EditRoundedIcon style={{fontSize: 40 }}/> 수정하기
                      </IconButton>
                    </form>
                </Paper>
              </Grid>
             </Grid>
          </Grid>
{/* 세번째구역 */}
          <Grid item xs={5}>
          <Paper className={classes.paper_1}>
          {/* <FixedSizeList height={541} width='90%' itemSize={60} itemCount={5}> 
            <ListItemText primary= {this.state.l_j_event[index]} />
            </FixedSizeList> */}

            <form noValidate onSubmit={this.handleEventSubmit}>
              <br/>
              
              <IconButton type = "submit" color="primary" size='small'aria-label="delete">
                {/*왜 this.state.c_n_event가 안들어가지 */}
                <Badge color="secondary" badgeContent={this.state.count_event} >
                <MenuRoundedIcon style={{fontSize: 50 }}/>
                </Badge>
              </IconButton>
            </form>
            
            </Paper>
          </Grid>
          
          </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(Dashboard);






 