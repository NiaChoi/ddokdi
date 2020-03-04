import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import LoginLayout from './LoginLayout';
import EventAdder from './EventAdder';

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
            <div>
                <Route exact path ="/" component = {LoginLayout}/>
                <Route path = "/" component = {EventAdder}/>
            </div>
        );
    }
}

export default withStyles( useStyles )(Login);