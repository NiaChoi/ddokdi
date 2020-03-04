import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
const useStyles = theme => ({
      root: {
        flexGrow: 1,
        width: '100%'
      },
});
class Login extends Component {
    render(){
        const { classes } = this.props;
        return (
          <div className={classes.root}>
            ddd
          </div>
        );
    }
}

export default withStyles( useStyles )(Login);