import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';
import LoginLayout from './LoginLayout';
// import EventAdder from './EventAdder';
import Medicine from './Medicine';
import Dashboard from './Dashboard';
import EventAdder from './EventAdder';
import UserGreeting from './tempfiles/UserGreeting';


const useStyles = theme => ({
      root: {
        flexGrow: 1,
        width: '100%'
      },
});
class Login extends Component {
    render(){
        // const { classes } = this.props; 
        return (
            <div>
                <Route exact path ="/" component = {LoginLayout}/>
                <Route path ="/" component = {Dashboard}/>
                <Route path ="/" component = {Medicine}/>
                <Route path ="/" component = {EventAdder}/>
                <Route path ="/" component = {UserGreeting}/>
            </div>
        );
    }
}

export default withStyles( useStyles )(Login);