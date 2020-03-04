import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import IconTextList from './IconTextList';



const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper_1: {  //전체 크기 변환 height 변경
    padding: theme.spacing(1),
    textAlign: 'center',
    height:'500px',       
    color: theme.palette.text.secondary,
  },
  paper_2: {  //두번째 칸 건들일 필요 x
    padding: theme.spacing(5),
    textAlign: 'center',
    height:'100%',
    color: theme.palette.text.secondary,
  },
});

class Medicine extends Component {
 
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing = {0}>

        {/* paper_1 첫번째 칸 */}
          <Grid item xs={2}>
            <Paper  className={classes.paper_1}>item0</Paper>
          </Grid>

        {/* paper_2 두번째 칸 */}
          <Grid item xs>
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






 