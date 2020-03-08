import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
// import IconTextList from './IconTextList';
import ControlBoard from './tempfiles/ControlBoard';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';



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
  paper_2_1: {  //전체 크기 변환 height 변경
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'292px',       
    color: theme.palette.text.secondary,
    
  },
});

class Dashboard extends Component {
  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    
    this.props.history.push("/Medicine");
    this.props.history.push("/EventAdder");
    
  } 
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container alignContent="center" spacing = {0} >

          <Grid item xs={2}>
           <ControlBoard/>
          </Grid>

          <Grid item xs={5}>
              <Grid alignItems="center" container spacing = {0}>
              <Grid item xs={12}>
                <Paper className={classes.paper_2_1}></Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper_2_1}>
                <form noValidate onSubmit={this.handleSubmit}>
                      <br/>
                      <IconButton type = "submit" color="primary"  size='small'aria-label="delete">
                        <EditRoundedIcon style={{fontSize: 40 , }}/> 약 설정 페이지로//
                      </IconButton>
                    </form>
                </Paper>
              </Grid>
             </Grid>
          </Grid>

          <Grid item xs={5}>
          <Paper className={classes.paper_1}>
          <form noValidate onSubmit={this.handleSubmit}>
                      <br/>
                      <IconButton type = "submit" color="primary"  size='small'aria-label="delete">
                        <MenuRoundedIcon style={{fontSize: 50 , }}/>일정관리 페이지로//
                      </IconButton>
                    </form>
            
            </Paper>
          </Grid>
          
          </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(Dashboard);






 