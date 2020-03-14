import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { FixedSizeList } from 'react-window';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';


import MsgProcessor from "./MsgProcessor"

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'540px',
    margin: theme.spacing(0),
    },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'350px',    
    overflow: 'auto',
    maxHeight: '350px',
    color: theme.palette.text.secondary,
    
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  });


class IconTextList extends Component{
  
  
  constructor(props){
    super(props);
    this.state = {
      drugList:[],
      list_length:0
    }
    
  }
  componentDidMount(){
    let userId = localStorage.getItem("USN");
    let msgProc = new MsgProcessor();
    msgProc.attempMedicine(userId, (result)=> { 
      if (result[0] == 0) {
        console.log(result[1]);
        this.setState({
          drugList:result[1],
          list_length:result[1].length
        })  
      }
    });
  }

  med_time(index){
  switch(this.state.drugList.time[index]){
    case "0":
      return (<Brightness6Icon style={{ fontSize: 40 }}/>);//아침
    case "1":
      return (<Brightness5Icon style={{ fontSize: 40 }}/>); //점심
    case "2":
      return (<Brightness4Icon style={{ fontSize: 40 }}/>);//저녁
    case "3":
      return (<Brightness6Icon style={{ fontSize: 40 }}/>,<Brightness4Icon style={{ fontSize: 40 }}/>);//아침, 저녁
    default:
      return (<Brightness6Icon style={{ fontSize: 40 }}/>,<Brightness5Icon style={{ fontSize: 40 }}/>,<Brightness4Icon style={{ fontSize: 40 }}/>);//아침, 점심,저녁
    }
  }
  
  renderRow(props) {
    const { index, style } = props;
    console.log(props);
    const [checked, setChecked] = React.useState(false); 
    const med_name = ['혈압약', '감기약', '소화제', '비타민'];
    const med_time = ["hidden", "visible", "hidden", "visible"];
    // const mnRow = med_name.length;
    // // const med_time = [,];
    const handleChange = event => {
      setChecked(event.target.checked);
    };
    const selected_med = med_name[this.state.rspMsg[index].drug_name]
    return (
      ///List 변수 값 넣어보기
      <ListItem button style={style} key={index} >
        <Checkbox
          checked={checked}
          onChange={handleChange}
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}/>
        <ListItemText primary= {selected_med} />
        <ListItemIcon >
          {this.med_time()}
          </ListItemIcon>
      </ListItem>
    );
    
  }
   render(){
    const { classes } = this.props;

      return (

        <div >
          <Grid container className={classes.root} item xs={12}>
            <br/>
          <Grid item xs={12}>
            <Typography variant="h4">
              <Box textAlign="center" fontWeight="fontWeightBold" m={1}>
              약 복용설정
              </Box>
            </Typography>
            <Divider/> 
          <Grid item xs={12}>
          <Grid container>
            <Grid item xs={2}>
            <Typography variant="h5" Align="center">선택</Typography>
            </Grid>
            <Grid item xs={5}>
            <Typography variant="h5" Align="center">약 이름</Typography>
            </Grid>
            <Grid item xs={5}>
            <Typography variant="h5" Align="center">복용시간</Typography>
            </Grid>
          </Grid>
            </Grid>
            <Divider/> 
            <FixedSizeList height={400} width='90%' itemSize={60} itemCount={this.state.list_length}>
            {this.renderRow.bind(this, this.state)}
            </FixedSizeList>
            <Divider/>
            </Grid>
            </Grid>
        </div>
      );
    }
 }
 
 export default  withStyles( useStyles )(IconTextList);
