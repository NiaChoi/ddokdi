import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';


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
        
          <Fab color="inherit" variant="extended" size='small'>
          Editting
            </Fab>
        </div>
      );
    }
 }
 
 export default  withStyles( useStyles )(FloatingActionButtons);