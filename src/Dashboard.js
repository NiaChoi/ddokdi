import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import ControlBoard from './tempfiles/ControlBoard';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Badge from '@material-ui/core/Badge';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import { FixedSizeList } from 'react-window';



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
    
    const tempRsp = {
      "payload":{
        "code":200,
        "c_n_event": [
          {
            "COUNT(event_no)": 3 //새로운 이벤트
          }
        ],
        "l_j_event": [
          {
            "event_no": 55,
            "event_name": "하하하 웃음교실!"
          }
        ],
        "l_j_drug": [
          {
            "drug_name": "1",
            "time": "2"
          },
          {
            "drug_name": "2",
            "time": "1"
          }
        ],
      }
    }
  } 
  handleMedSubmit = event => {
    event.preventDefault();
    this.props.history.push("/Medicine");
    
  } 
  handleEventSubmit = event => {
    event.preventDefault();
    this.props.history.push("/EventAdder");
    
  } 
  render(){
    const { classes } = this.props;
    // const { index, style } = this.props;
    // const event_list =[54,55,56,57];
    return (
      <div className={classes.root}>
        <Grid container alignContent="center" spacing = {0} >
{/* 첫번쨰 구역 */}
          <Grid item xs={2}>
           <ControlBoard history = {this.props.history}/>
          </Grid>
{/* 두번쨰 구역 */}
          <Grid item xs={5}>
              <Grid alignItems="center" container spacing = {0}>
              <Grid item xs={12}>
                <Paper className={classes.paper_2_1}></Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper_2_1}>
                <form noValidate onSubmit={this.handleMedSubmit}>
                      <br/>
                      <IconButton type = "submit" color="primary"  size='small'aria-label="delete">
                        <EditRoundedIcon style={{fontSize: 40 }}/> 수정하기
                      </IconButton>
                    </form>
                </Paper>
              </Grid>
             </Grid>
          </Grid>
{/* 세번째구역 */}
          <Grid item xs={5}>
          <Paper className={classes.paper_1}>
          {/* <FixedSizeList height={541} width='90%' itemSize={60} itemCount={5}>
            <ListItem button type = "submit" tabindex={event_list[index]} style={style} key={index} >
            <ListItemText primary= {event_list[index]} />
              </ListItem>
              </FixedSizeList> */}
            <form noValidate onSubmit={this.handleEventSubmit}>
              <br/>
              <IconButton type = "submit" color="primary" size='small'aria-label="delete">
                <Badge color="secondary" badgeContent={3} >
                <MenuRoundedIcon style={{fontSize: 50 }}/>
                </Badge>
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






 