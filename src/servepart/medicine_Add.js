import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import { Grid, Typography, Button } from '@material-ui/core';
import Brightness6Icon from '@material-ui/icons/Brightness6';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import MsgProcessor from "./MsgProcessor"

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'450px',
    margin: theme.spacing(0),
    },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
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


class Medicine_Adder extends Component{
  constructor(props){
    super(props);
    this.state = {
        MedanchorEl:null,
        TimeanchorEl:null,
        selectedMedIndex:0,
        selectedTimeIndex:0
    }
    
  };
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
  };

  MhandleClickListItem = event => {
    event.preventDefault();
    this.setState({
        MedanchorEl:event.currentTarget
        })
  };

  ThandleClickListItem = event => {
    event.preventDefault();
    this.setState({
        TimeanchorEl:event.currentTarget
        })
  };

  MhandleMenuItemClick = (event, index) => {
    event.preventDefault();
    this.setState({
        selectedMedIndex:index,
        MedanchorEl:null
        })
     console.log(index);
  };

  ThandleMenuItemClick = (event, index) => {
    event.preventDefault();
    this.setState({
        selectedTimeIndex:index,
        TimeanchorEl:null
        })
    //  console.log(index);
  };
 
  handleClose = event => {
    event.preventDefault();
    this.setState({
        MedanchorEl:null,
        TimeanchorEl:null
        })
    //  console.log(index);
  };
    
  renderRow(props) {
    const { index, style } = props;
    const med_name = ['혈압약', '감기약', '소화제', '비타민','관절약'];
    const med_time = [
        <dvi>
            <Brightness6Icon  style={{ fontSize: 50 }}/><Brightness5Icon color="disabled" style={{ fontSize: 50 }}/><Brightness4Icon color="disabled" style={{ fontSize: 50 }}/>
            </dvi>,
        <dvi>
            <Brightness6Icon   color="disabled" style={{ fontSize: 50 }}/><Brightness5Icon style={{ fontSize: 50 }}/><Brightness4Icon color="disabled" style={{ fontSize: 50 }}/>
            </dvi>,
        <dvi>
            <Brightness6Icon color="disabled" style={{ fontSize: 50 }}/><Brightness5Icon color="disabled" style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
            </dvi>,
        <dvi>
            <Brightness6Icon  style={{ fontSize: 50 }}/><Brightness5Icon color="disabled" style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
            </dvi>,
        <dvi>
            <Brightness6Icon  color="disabled" style={{ fontSize: 50 }}/><Brightness5Icon style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
            </dvi>,
        <dvi>
            <Brightness6Icon  style={{ fontSize: 50 }}/><Brightness5Icon style={{ fontSize: 50 }}/><Brightness4Icon style={{ fontSize: 50 }}/>
            </dvi>
        ];

    return (
        <div >
            <Grid item xs={1}>
            <Box width="100%" height ='60px' p={2} >
            <LocalHospitalIcon style={{ fontSize: 60 }}/>
            </Box>
            </Grid>
            <Grid item xs={5}>
            <List component="nav" aria-label="Medicine_name settings">
            <form noValidate onSubmit={this.MhandleClickListItem}>  
            <ListItem
            button
            aria-haspopup="true"
            aria-controls="Medi-menu"
            aria-label="choose the medicine selection"
            onClick={this.MhandleClickListItem}
            >
            <Box width="100%" border={3} bgcolor="#FFFFFF" height ='60px' borderColor="error.light" borderRadius="borderRadius">
            <ListItemText primary={<Typography variant="h4" Align="center">{med_name[this.state.selectedMedIndex]}</Typography>} />
            </Box>
            </ListItem>
            </form>
        </List>
        <Menu
            id="Med-menu"
            anchorEl={this.state.MedanchorEl}
            keepMounted
            open={Boolean(this.state.MedanchorEl)}
            onClose={this.handleClose}
        >
            <form noValidate onSubmit={this.MhandleMenuItemClick}>
            <MenuItem
                key={index}
                selected={index === this.state.selectedMedIndex}
                onClick={this.MhandleMenuItemClick}
            >
            <Typography variant="h4" Align="center">{med_name[index]}</Typography>
            </MenuItem>
            </form>
        </Menu>
        </Grid>

        <Grid item xs={1}>
        <Box width="100%" height ='60px' p={2} >
            <AccessAlarmIcon style={{ fontSize: 60 }}/>
            </Box>
            </Grid>
        <Grid item xs={5}>
          <List component="nav" aria-label="Medicine_Time settings">
          <form noValidate onSubmit={this.ThandleClickListItem}>
            <ListItem
            button
            aria-haspopup="true"
            aria-controls="Time-menu"
            aria-label="choose the medicine selection"
            onClick={this.ThandleClickListItem}
            >
            <Box width="100%" border={3} bgcolor="#FFFFFF" height ='60px' borderColor="error.light"  borderRadius="borderRadius">
            <ListItemText primary={<Typography variant="h4" Align="center">{med_time[this.state.selectedTimeIndex]}</Typography>} />
            </Box>
            </ListItem>
            </form>
        </List>
        <form noValidate onSubmit={this.handleClose}>
        <Menu
            id="Time-menu"
            anchorEl={this.state.TimeanchorEl}
            open={Boolean(this.state.TimeanchorEl)}
            onClose={this.handleClose}
        >
          <form noValidate onSubmit={this.ThandleMenuItemClick}>
            <MenuItem
                key={index}
                selected={index === this.state.selectedTimeIndex}
                onClick={this.ThandleMenuItemClick}
            >
            <Typography variant="h4" Align="center">{med_time[index]}</Typography>
            </MenuItem>
          </form>
        </Menu> 
         </form>
        </Grid>
    </div>
    );
  }

   render(){
    const { classes } = this.props;

      return (

        <div className={classes.root} >
        <Box  bgcolor="#f8bbd0" width="833.33px" height ='110px'>
        <Grid container xs={12} alignContent="center" spacing={2}>
        
           {this.renderRow.bind(this, this.state, this.MhandleClickListItem, this.MhandleMenuItemClick, this.ThandleClickListItem, this.handleClose, this.ThandleMenuItemClick)}
        <Grid  item xs={12}>
            <Grid container xs={12}>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                <form> 
                    <Button >
                    <EditRoundedIcon style={{ fontSize: 40 }}/><Typography variant="h4" Align="center">새로운 약 추가하기</Typography>
                </Button>
                </form>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
            </Grid>
              
        </Grid>
        </Box>
      
    </div>
      );
    }
 }
 
 export default  withStyles( useStyles )(Medicine_Adder);

