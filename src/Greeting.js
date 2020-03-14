import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Grid  from '@material-ui/core/Grid';
import Paper  from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import Divider from '@material-ui/core/Divider';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied'; 
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'; 
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt'; 
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'; 
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied'; 
import MoodBadOutlinedIcon from '@material-ui/icons/MoodBadOutlined'; 
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined'; 
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined'; 



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
    width: '1008px',
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'584px',     
    color: theme.palette.text.secondary,
  },
  icon: {
    '& > *': {
      margin: theme.spacing(1),
  },
 }
});

class Greeting extends Component {
  
  today = new Date();
  todayStr = this.today.getFullYear() + "년 " +(this.today.getMonth()+1) +"월 "+ this.today.getDate() + "일";
  handleSubmit = event => {
    event.preventDefault();
    console.log(event);
    
    const tempRsp = {
      "payload":{
        "code":200,
        "success":"mood resistered sucessfull"
      }
    }

    if(tempRsp.payload.code === 200){
      alert(tempRsp.payload.success);
      this.props.history.push("/Dashboard");
    }
  } 

  render(){
    // var date = new Date();
    const { classes } = this.props;
  
    return (
      <div className={classes.root}>
        <Grid container alignItems="center" spacing = {0}>
            <Paper 
              className={classes.paper_1}
              elevation={2} >
                  <Grid item xs={12} >
                    <Typography 
                    gutterBottom 
                    variant="h3">
                      <br/>오늘은 {this.todayStr} 입니다.<br/>지금의 기분을 표현해 주세요!</Typography>
                  <Grid xs={12}>
                    <Divider/>
                    <br/>
                    <IconButton aria-label="1">
                    <SentimentVerySatisfiedOutlinedIcon style={{fontSize: 100 }}/>
                    </IconButton>
                    <IconButton aria-label="2">
                    <SentimentVerySatisfiedIcon  style={{fontSize: 100 }}/>
                    </IconButton>
                    <IconButton aria-label="3">
                    <SentimentSatisfiedAltIcon style={{fontSize: 100 }}/>
                    </IconButton>
                    <IconButton aria-label="4">
                    <SentimentSatisfiedIcon  style={{fontSize: 100 }}/>
                    </IconButton>
                    <Grid xs={12}>
                      <IconButton aria-label="5">
                    <SentimentDissatisfiedIcon style={{fontSize: 100 }}/>
                    </IconButton>
                    <IconButton aria-label="6">
                    <SentimentVeryDissatisfiedIcon style={{fontSize: 100 }}/>
                    </IconButton>
                    <IconButton aria-label="7">
                    <MoodBadOutlinedIcon style={{fontSize: 100 }} />
                    </IconButton>
                    <IconButton aria-label="8">
                    <SentimentVeryDissatisfiedOutlinedIcon style={{fontSize: 100 }}/>
                    </IconButton>
                    </Grid>
                    <br/>
                    <Divider/>
                    </Grid>
                    
                  <Grid item xs={12}/>
                  <Grid item xs={12}>
                  <form noValidate onSubmit={this.handleSubmit}>
                      <br/>
                      <IconButton type = "submit"  size='small'aria-label="delete">
                        <EditRoundedIcon style={{fontSize: 40 }}/> 제출하기
                      </IconButton>
                    </form>
                  </Grid>
                </Grid>
            </Paper>
        </Grid>
      </div>
    );
  }
}

export default  withStyles( useStyles )(Greeting);