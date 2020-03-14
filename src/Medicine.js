import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import IconTextList from './servepart/IconTextList';
import ControlBoard from './servepart/ControlBoard';
import Box from '@material-ui/core/Box';


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
});

class Medicine extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;//UI에 영향을 주지 않으므로 state X
    this.state = {
      nEventList: [],
      listLength: 0,
      dEventNo:0,
      dEventList:[]
      }
    }
    componentDidMount(){
      let userId = localStorage.getItem("USN");
      let msgProc = new MsgProcessor();
      msgProc.attemptAllEvent(userId, (result)=> { 
        if (result[0] == 0) {
          console.log(result[1]);
          this.setState({
            nEventList:result[1],
            listLength:result[1].length
          })  
        }
      });

    }
  
  handlejoinSubmit = event => {
    event.preventDefault();
      const tempRsp3 = {
      "payload":{

        "code": 200,
        "sucess": "event_j sucess"
          }
      }
      if(tempRsp3.payload.code === 200){
        alert(tempRsp3.payload.success);
    }
  }

  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing = {0} container alignContent="center">

        {/* paper_1 첫번째 칸 */}
          <Grid item xs={2}>
          <ControlBoard history = {this.props.history}/>
          </Grid>

        {/* paper_2 두번째 칸 */}
          <Grid alignItems="center" xs={10}>
          <Paper className={classes.paper_1}>
            <IconTextList tempRsp={this.state.tempRsp}/>
            </Paper>
          </Grid>
          
          </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(Medicine);






 