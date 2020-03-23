import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
  },
}));

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


    

export default function SimpleListMenu() {
  const classes = useStyles();
  const [MedanchorEl, setMedAnchorEl] = React.useState(null);
  const [selectedMedIndex, setSelectedMedIndex] = React.useState(0);
  const [TimeanchorEl, setTimeAnchorEl] = React.useState(null);
  const [selectedTimeIndex, setSelectedTimeIndex] = React.useState(0);


  const MhandleClickListItem = event => {
    setMedAnchorEl(event.currentTarget);
  };

  const ThandleClickListItem = event => {
    setTimeAnchorEl(event.currentTarget);
  };

  const MhandleMenuItemClick = (event, index) => {
    setSelectedMedIndex(index);
    setMedAnchorEl(null);
     console.log(index);
     console.log(selectedMedIndex-1);
  };

  const ThandleMenuItemClick = (event, index) => {
    setSelectedTimeIndex(index);
    setTimeAnchorEl(null);
     console.log(index);
     console.log(selectedTimeIndex -1);
  };
 
  const handleClose = () => {
    setMedAnchorEl(null);
    setTimeAnchorEl(null);
  };
  const handleAddButtonClick = (event) => {
    let userId = localStorage.getItem("USN");
    let msgProc = new MsgProcessor();
    msgProc.attemptNmedEvent(userId, selectedMedIndex, selectedTimeIndex, (result)=> { 
        if (result[0] == 0) {
            alert(result[1]);
            window.location.reload(false);
        }
        else {
            alert(result[1]);
        }
    });
    
  }
  
  return (
    <div className={classes.list} >
        <Box  bgcolor="#f8bbd0" width="833.33px" height ='110px'>
        <Grid container xs={12} alignContent="center" spacing={2}>
        
            <Grid item xs={1}>
            <Box width="100%" height ='60px' p={2} >
            <LocalHospitalIcon style={{ color:'#ed4b82',fontSize: 60 }}/>
            </Box>
            </Grid>
            <Grid item xs={5}>
            <List component="nav" aria-label="Medicine_name settings">
            <ListItem
            button
            aria-haspopup="true"
            aria-controls="Medi-menu"
            aria-label="choose the medicine selection"
            onClick={MhandleClickListItem}
            >
            <Box width="100%" border={3} bgcolor="#FFFFFF" height ='60px' borderColor='#ed4b82' borderRadius="borderRadius">
            <ListItemText primary={<Typography variant="h4" Align="center">{med_name[selectedMedIndex]}</Typography>} />
            </Box>
            </ListItem>
        </List>
        <Menu
            id="Med-menu"
            anchorEl={MedanchorEl}
            keepMounted
            open={Boolean(MedanchorEl)}
            onClose={handleClose}
        >
            {med_name.map((med_name, index) => (
            <MenuItem
                key={med_name}
                selected={index === selectedMedIndex}
                onClick={event => MhandleMenuItemClick(event, index)}
            >
            <Typography variant="h4" Align="center">{med_name}</Typography>
            </MenuItem>
            ))}
        </Menu>
        </Grid>
        <Grid item xs={1}>
        <Box width="100%" height ='60px' p={2} >
            <AccessAlarmIcon style={{ color:'#ed4b82', fontSize: 60 }}/>
            </Box>
            </Grid>
        <Grid item xs={5}>
          <List component="nav" aria-label="Medicine_Time settings">
            <ListItem
            button
            aria-haspopup="true"
            aria-controls="Time-menu"
            aria-label="choose the medicine selection"
            onClick={ThandleClickListItem}
            >
            <Box width="100%" border={3} bgcolor="#FFFFFF" height ='60px' borderColor='#ed4b82'  borderRadius="borderRadius">
            <ListItemText primary={<Typography variant="h4" Align="center">{med_time[selectedTimeIndex]}</Typography>} />
            </Box>
            </ListItem>
        </List>
        <Menu
            id="Time-menu"
            anchorEl={TimeanchorEl}
            open={Boolean(TimeanchorEl)}
            onClose={handleClose}
        >
            {med_time.map((med_time, index) => (
            <MenuItem
                key={med_time}
                selected={index === selectedTimeIndex}
                onClick={event => ThandleMenuItemClick(event, index)}
            >
            <Typography variant="h4" Align="center">{med_time}</Typography>
            </MenuItem>
            ))}
        </Menu>  
        </Grid>
        <Grid  item xs={12}>
            <Grid container xs={12}>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                <form style={{justifyContent:'center' , alignItems: 'center',display: 'flex'}}> 
                    <Button  onClick = {handleAddButtonClick}>
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
