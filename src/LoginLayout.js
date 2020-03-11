import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Paper  from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import TextField from "@material-ui/core/TextField";
import {ReactComponent as Logo} from './ddokdi_logo.svg';
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = theme => ({
  root: {
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
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'584px',     
    color: theme.palette.text.secondary,
  },
 });

class LoginLayout extends Component {

  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    
    const tempRsp = {
      "payload":{
        "code":200,
        "success":"Login sucessfull"
      }
    }

    if(tempRsp.payload.code === 200){
      alert(tempRsp.payload.success);
      this.props.history.push("/Dashboard");
    }
  } 

  render(){
     
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing = {0}>
          <Grid item xs={6}>
             <Logo /> 
          </Grid>
          <Grid item xs={6}>
            <Paper 
              className={classes.paper_1}
              elevation={0} >
                <Grid container alignitems='center' spacing={3}>
                  <Grid item xs={12}/>
                  <Grid item xs={12} >
                    <Typography 
                    gutterBottom 
                    variant="h3"
                    ><br/>똑디 로그인</Typography>
                  <Grid xs={12}>
                  <Grid container spacing={3} >
                    <Grid item xs={12}>
                      <AccountCircle style={{ fontSize: 50 }} />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField id="input-with-icon-grid" label="ID" 
                      variant="outlined" />
                      </Grid>
                    <Grid item xs={12}>
                      <TextField id="input-with-icon-grid" label="PW" 
                      variant="outlined" />
                    </Grid>
                  </Grid>
                    </Grid>
                  <Grid item xs={12}/>
                  <Grid item xs={12}>
                    <Typography 
                    variant="body2" color="textSecondary"
                    ><br/> 문의사항 연락처 </Typography>

                    <form noValidate onSubmit={this.handleSubmit}>
                      <br/>
                      <Fab type = "submit" color="inherit" variant="extended" size='large'>
                       로그인 </Fab>
                    </form>

                  </Grid>
                    
                </Grid>
              </Grid>
                
            </Paper>
            
          </Grid>

        </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(LoginLayout);