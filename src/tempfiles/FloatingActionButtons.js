import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Grid  from '@material-ui/core/Grid';


const useStyles = theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  
});


class FloatingActionButtons extends Component{
   render(){
     const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Grid container>
          <Grid item xs={3}/>
            <Grid item xs={3}>
              <Fab color="inherit" variant="extended" size='large'>
                EDIT </Fab>
              </Grid>
             <Grid item xs={3}>
              <Fab color="inherit" variant="extended" size='large'>
              DELETE </Fab>
              </Grid>
              <Grid item xs={3}/>
              </Grid>
        </div>
      );
    }
 }
 
 export default  withStyles( useStyles )(FloatingActionButtons);