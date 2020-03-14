import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import IconTextList from './IconTextList';
import ControlBoard from './tempfiles/ControlBoard';
import Box from '@material-ui/core/Box';



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
    const tempRsp2 = {
      "payload":{
        "code":200,
        "l_j_drug": [
          {
            "drug_name": "1",
            "time": "2"
          },
          {
            "drug_name": "2",
            "time": "1"
          }
        ],
      }
    }
    this.state = {
      tempRsp:tempRsp2
    }
  }
  // componentDidMount(){
  //   const tempRsp2 = {
  //     "payload":{
  //       "code":200,
  //       "l_j_drug": [
  //         {
  //           "drug_name": "1",
  //           "time": "2"
  //         },
  //         {
  //           "drug_name": "2",
  //           "time": "1"
  //         }
  //       ],
  //     }
  //   }
  //   this.setState({
  //     tempRsp : tempRsp2
  //   })
  // }
  // handleSubmit = event => {
  //   event.preventDefault();
  //   console.log(event);

  //   const tempRsp = {
  //     "payload":{
  //       "code":200,
  //       "l_j_drug": [
  //         {
  //           "drug_name": "1",
  //           "time": "2"
  //         },
  //         {
  //           "drug_name": "2",
  //           "time": "1"
  //         }
  //       ],
  //     }
  //   }
  // } 
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






 