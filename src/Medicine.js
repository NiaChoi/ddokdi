import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import IconTextList from './IconTextList';
import ControlBoard from './tempfiles/ControlBoard';



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
  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    
    this.props.history.push("/EventAdder");
  } 
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing = {0} container alignContent="center">

        {/* paper_1 첫번째 칸 */}
          <Grid item xs={2}>
          <ControlBoard/>
          </Grid>

        {/* paper_2 두번째 칸 */}
          <Grid alignItems="center" xs={10}>
          <Paper className={classes.paper_1}>
            <IconTextList/>
            </Paper>
          </Grid>
          
          </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(Medicine);






 