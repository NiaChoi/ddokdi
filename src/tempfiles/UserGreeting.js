import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
// import ControlBoard from './tempfiles/ControlBoard';
import Box from '@material-ui/core/Box';


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
 
});

class UserGreeting extends Component {
  render(){
    const { classes } = this.props;
    const timestamp = require('time-stamp');
        console.log(timestamp());
    return (
      <div className={classes.root}>
        <Grid container alignContent="center" spacing = {0} >
            <Paper className={classes.paper_1}>
                <Box fontSize={30} textAlign="center" fontWeight="fontWeightBold" m={1}>
                    <br/>
                    </Box>
            </Paper>
        
          </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(UserGreeting);

