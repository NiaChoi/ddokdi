import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Paper  from '@material-ui/core/Paper';
import GridTextField from './tempfiles/GridButton';
import Typography from '@material-ui/core/Typography';

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
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'500px',       
    color: theme.palette.text.secondary,
  },
 });

class LoginLayout extends Component {
  
  render(){
     
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing = {0}>
        {/* paper_1 첫번째 칸 이미지 어케널지,,*/}
          <Grid item xs={6}>
            <Paper 
            className={classes.paper_1}
            elevation={3}
            >welcome image field</Paper>
            
          </Grid>
          {/* 로그인 영역 제목 위에 여유공간 어케넣음? */}
          <Grid item xs={6}>
            <Paper 
              className={classes.paper_1}
              elevation={0} >
                <Grid container spacing={3}>

                  <Grid item xs alignContent='center'>
                    <Typography 
                    gutterBottom 
                    variant="h3"
                    >똑디 로그인</Typography>

                    <GridTextField/>

                  <Grid item xs={12}>
                    <Typography 
                    variant="body2" color="textSecondary"
                    >문의사항 연락처</Typography>
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

    

