import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid, ListItemIcon } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import ControlBoard from './servepart/ControlBoard';
import { FixedSizeList } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import EventIcon from '@material-ui/icons/Event';

import MsgProcessor from "./servepart/MsgProcessor"



const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
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
    height:'584x',       
    color: theme.palette.text.secondary,
  },
  card_d: {
    Width: '100%',
    height:568,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class EventAdder extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;//UI에 영향을 주지 않으므로 state X
    this.state = {
      not_jEventList:[],
      not_jlistLength:[],
      nEventList:[],
      nlistLength: 0,
      jEventList: [],
      jlistLength:0,
      npEventList:0,
      nplistLength:0, 
      dEventNo:0,
      dEventList: [],
      AEventList:[],
      participation : true,
      user_event_table_data: [{"user_event_USERID":"", "user_event_event_no":"","participation":""}],
      event_no : 0
      }
    }
  
    // componentDidMount(){
    //   let userId = localStorage.getItem("USN");
    //   let msgProc = new MsgProcessor();
    //   msgProc.attemptNewEvent(userId, (result)=> { 
    //     if (result[0] == 0) {
    //       console.log(result[1]);
    //       this.setState({
    //         nEventList:result[1],
    //         nlistLength:result[1].length
    //       })  
    //     }
    //   });
    //   msgProc.attemptJoinedEvent(userId, (result)=> { 
    //     if (result[0] == 0) {
    //       console.log(result[1]);
    //       this.setState({
    //         jEventList:result[1],
    //         jlistLength:result[1].length
    //       })  
    //     }
    //   });
     
    // }
    componentDidMount(){
      let userId = localStorage.getItem("USN");
      let msgProc = new MsgProcessor();
      msgProc.attemptTotalEvent(userId, (result)=> { 
        if (result[0] == 0) {
          console.log(result[1]);//new
          console.log(result[2]);//check
          console.log(result[3]);//participate
          this.setState({
            not_jEventList:result[2],
            not_jlistLength:result[2].length,
            nEventList:result[1],
            nlistLength:result[1].length,
            jEventList:result[3],
            jlistLength:result[3].length,
            npEventList:result[1].concat(result[2]),
            nplistLength:result[1].length+result[2].length,
            AEventList:result[1].concat(result[2]).concat(result[3]),
          })
        }
        else{
          alert(result[1]);
        }
      });
    }
  
    handleListItemClick = event => {
      event.preventDefault();
      console.log(event);
      let userId = localStorage.getItem("USN");
      let msgProc = new MsgProcessor();
        let selectedEvent = event.target.innerText;
        let alleventList = this.state.AEventList;
        let eventNo = 0;
        console.log(event.target.innerText);
        console.log(selectedEvent);
        alleventList.forEach(element => {
          if(element.event_name == selectedEvent){
            eventNo = element.event_no;
            console.log(eventNo);
            console.log(element.event_no);
            console.log(element.event_name);
            }
          });
          this.setState({
            dEventNo:eventNo,
            }) 
        let new_event = this.state.nEventList;
        new_event.forEach(element => {
            if(element.event_name == selectedEvent){
              msgProc.attemptCheckEvent(userId, eventNo, (result)=> { 
            if (result[0] == 0) {
              console.log(result[1]);
            }
            else {
              alert(result[1]);
            }
          });
        }
      });
           
      msgProc.attemptDetailEvent(eventNo, (detail_event)=> { 
        event.preventDefault();
        if (detail_event[0] == 0) {
          msgProc.attemptDetailuserEvent(userId, eventNo, (result)=> {
            if (result[0] == 0) {
              console.log(result[1][0]);
              console.log(result[1][0].participation);
              console.log(detail_event[1][0]);
          this.setState({
            dEventList:detail_event[1][0],
            user_event_table_data:result[1][0]
          })
              
              if (result[1][0].participation == 0)  {
                this. setState({
                  participation:false
                })
              }
              else {
                this. setState({
                  participation:true
              })
              }
          }
          else{
            alert(result[1]);
          }
          });
        }
        else{
          alert(detail_event[1]);
        }
      });
    }
   
handle_participation_Change = (event,b) => {
  event.preventDefault();
  let msgProc = new MsgProcessor();
  // let user_event_list = this.state.user_event_table_data;
  // user_event_list = user_event_list.concat(this.state.user_event_table_data);
  let eventNo = this.state.dEventNo;
  if(this.state.participation == false){
    let userId = localStorage.getItem("USN");
      msgProc.attemptJoinEvent(eventNo, userId, (result)=> { 
            if (result[0] == 0) {
            // alert("행사 참석이 활성화되었습니다.");
            console.log(result[0]);
            msgProc.attemptDetailEvent(eventNo, (detail_event)=> { 
              if (detail_event[0] == 0) {
                msgProc.attemptDetailuserEvent(userId, eventNo, (result)=> {
                  if (result[0] == 0) {
                    console.log(result[1][0]);
                    console.log(result[1][0].participation);
                    console.log(detail_event[1][0]);
                this.setState({
                  dEventList:detail_event[1][0],
                  user_event_table_data:result[1][0]
                })
                    
                    if (result[1][0].participation == 0)  {
                      this. setState({
                        participation:false
                      })
                    }
                    else {
                      this. setState({
                        participation:true
                    })
                    }
                }
                else{
                  alert(result[1]);
                }
                });
              }
              else{
                alert(detail_event[1]);
              }
            });
            
          }
          else {
            alert(result[1]);
          }
        });           
        // alert("행사 참석이 활성화되었습니다.");
      }
  else{
    let userId = localStorage.getItem("USN");
    msgProc.attemptJoinEvent(eventNo, userId, (result)=> { 
      if (result[0] == 0) {
      // alert("행사 참석이 비활성화되었습니다.");
      console.log(result[0]);
      msgProc.attemptDetailEvent(eventNo, (detail_event)=> { 
        if (detail_event[0] == 0) {
          msgProc.attemptDetailuserEvent(userId, eventNo, (result)=> {
            if (result[0] == 0) {
              console.log(result[1][0]);
              console.log(result[1][0].participation);
              console.log(detail_event[1][0]);
          this.setState({
            dEventList:detail_event[1][0],
            user_event_table_data:result[1][0]
          })
              
              if (result[1][0].participation == 0)  {
                this. setState({
                  participation:false
                })
              }
              else {
                this. setState({
                  participation:true
              })
              }
          }
          else{
            alert(result[1]);
          }
          });
        }
        else{
          alert(detail_event[1]);
        }
      });
    }
    else {
      alert(result[1]);
    }
    window.location.reload(false);
  });           
  // alert("행사 참석이 비활성화되었습니다.");
}
      
      
    }


      // renderNewRow(mState, handleListItemClick ,props) {
      //   const { index, style } = props;
      //   console.log(mState.nEventList);
      //   let nevent_list =[];
      //   mState.nEventList.forEach(element => {
      //     nevent_list.push(element.event_name);
      //   });

      //   console.log(handleListItemClick);
      //   // const mnRow = med_name.length;
      //   // // const med_time = [,];
       
      //   return (
      //        <form onSubmit={this.handleListItemClick}> 
      //       <ListItem button onClick={handleListItemClick} style={style} key={index} id={1}>
      //         <ListItemText primary= {<Typography variant="h5" Align="left">
      //   <FiberManualRecordIcon color="secondary"/>{" "}{nevent_list[index]}</Typography>}/>
      //       </ListItem>
      //       </form>
            
      //     ///List 항목 누르면 handledetailSubmit이 동작하게
         
      //   );
      // }
      renderJoinRow(mState, handleListItemClick ,props) {
        const { index, style } = props;
        console.log(mState.jEventList);
        
        let event_list =[];
        mState.jEventList.forEach(element => {
          event_list.push(element.event_name);
        });

        // const mnRow = med_name.length;
        // // const med_time = [,];
        return (
          ///List 항목 누르면 handledetailSubmit이 동작하게
          <form onSubmit={this.handleListItemClick}>
            <ListItem button onClick={handleListItemClick} style={style} key={index} id={1}>
              <ListItemText primary={<Typography variant="h5" Align="left">{event_list[index]} </Typography>}/>
            </ListItem>
            </form>
        );        
      }
      
      rendernotJoinRow(mState, handleListItemClick ,props) {
        const { index, style } = props;
        console.log(mState.npEventList);
        console.log(mState.nEventList);

        let njevent_list =[];
        mState.npEventList.forEach(element => {
          njevent_list.push(element.event_name);
        });

        let nevent_list=[];
        mState.nEventList.forEach(element => {
          nevent_list.push(element.event_name);
        });


        if (njevent_list[index] === nevent_list[index]){
          return (
            <div>
              <form onSubmit={this.handleListItemClick}>
             <ListItem button onClick={handleListItemClick} style={style} key={index} id={1}>
               <ListItemIcon><FiberManualRecordIcon/></ListItemIcon> 
               <ListItemText primary={<Typography variant="h5"  Align="left">{njevent_list[index]}</Typography>}/>
               
             </ListItem>
             </form>
            </div>            
             );
        }
        else{
          return (
              <div>
                <form onSubmit={this.handleListItemClick}>
               <ListItem button onClick={handleListItemClick} style={style} key={index} id={1}>
                 <ListItemText primary={<Typography variant="h5"  Align="left">{njevent_list[index]} </Typography>}/>
               </ListItem>
               </form>
              </div>   
          );  
        }
       
      }
      
  
  // titleselect();
  // if()

  render(){
    const { classes } = this.props;
    return (
      <div  className={classes.root}>
        <Grid container  alignContent="center"spacing = {2}>
        {/* paper_1 첫번째 칸 */}
          <Grid item xs={2}>
          <ControlBoard history = {this.props.history}/>
          </Grid>

        {/* paper_2 두번째 칸 */}
          <Grid item xs={5} >
          <Paper className={classes.paper_1}>
          <Box height={580} color="primary.main" border= {2}borderColor="warning.light" borderRadius="borderRadius">
           <Box color="primary.contrastText" bgcolor="warning.light" fontSize={25} textAlign="center" fontWeight="fontWeightBold" p={1}>
              참가 행사
              </Box>
              <FixedSizeList height={180} width='100%' itemSize={60} itemCount={this.state.jlistLength}>
              {this.renderJoinRow.bind(this, this.state, this.handleListItemClick)}
              </FixedSizeList>

              <Box color="primary.contrastText" bgcolor="warning.light" fontSize={25} textAlign="center" fontWeight="fontWeightBold" p={1}>
              참여 가능 행사 목록
              </Box>
              <FixedSizeList height={300} width='100%' itemSize={70} itemCount={this.state.nplistLength}>
              {this.rendernotJoinRow.bind(this, this.state, this.handleListItemClick)}
              </FixedSizeList>
              
              </Box>
              </Paper>
            </Grid>

            <Grid item xs={5} >
            <Paper className={classes.paper_1}>
            {this.state.dEventNo == 0 ?
            <Box  height={568} color="primary.contrastText" bgcolor="warning.light" fontSize={25} textAlign="center" fontWeight="fontWeightBold"p={1}>
            <Box 
            width="40%" color="primary.contrastText" fontSize={35} textAlign="center" fontWeight="fontWeightBold" style={{
              position: 'absolute', left: '80%', top: '45%',
              transform: 'translate(-50%, -50%)'}}>
            <EventIcon style={{fontSize: 100 }}/>
            <br/>왼쪽에서<br/>일정을 선택해주세요
            </Box>
            </Box>
            :<Box 
              height={580} color="primary.main" bgcolor="#ffffff" border= {2} borderColor="warning.light" borderRadius="borderRadius" fontSize={25} textAlign="center" fontWeight="fontWeightMedium">
              <CardHeader
                    title={<Typography variant="h4" Align="center" fontWeight="fontWeightBold">{this.state.dEventList.event_name}</Typography>}
            subheader={<Typography variant="h5" Align="center" fontWeight="fontWeightBold">{this.state.dEventList.date}</Typography>}/>
                  <CardContent scroll="paper">
                    <Box fontSize={20} textAlign="left" >
                      <Grid container xs={12} spacing={2}>
                        <Grid item xs={4}>
                          <Box fontSize={20} textAlign="right" fontWeight="fontWeightBold">
                            [대상]
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                          {this.state.dEventList.qualification}
                        </Grid>

                        <Grid item xs={4}>
                        <Box fontSize={20} textAlign="right" fontWeight="fontWeightBold">
                            [내용]
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                          {this.state.dEventList.body}
                        </Grid>

                        <Grid item xs={4}>
                        <Box fontSize={20} textAlign="right" fontWeight="fontWeightBold">
                            [장소]
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                          {this.state.dEventList.location}
                        </Grid>

                        <Grid item xs={4}>
                        <Box fontSize={20} textAlign="right" fontWeight="fontWeightBold">
                            [특이사항]
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                        {this.state.dEventList.beneficial}
                        </Grid>

                        <Grid item xs={4}>
                        <Box fontSize={20} textAlign="right" fontWeight="fontWeightBold">
                            [기타사항]
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                        {this.state.dEventList.etc}
                        </Grid>

                        <Grid item xs={4}>
                        <Box fontSize={20} textAlign="right" fontWeight="fontWeightBold">
                            [참가여부]
                          </Box>
                        </Grid>
                        <Grid item xs={8}>
                        <Switch
                        checked={this.state.participation}
                        onChange={this.handle_participation_Change}
                        name="participation_service_state"
                        
                        inputProps={{ "aria-label": "secondary checkbox" }}/>
                        </Grid>
                        
                      </Grid>
                    </Box>
                  </CardContent>  
                </Box>}
                  
              </Paper>
            </Grid>
          </Grid>
      </div>
    );
  }
}
export default  withStyles( useStyles )(EventAdder);
