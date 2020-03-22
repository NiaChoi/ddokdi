import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import IconTextList from './servepart/IconTextList';
import ControlBoard from './servepart/ControlBoard';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import SimpleListMenu from './servepart/med_select';
import Medicine_Adder from './servepart/medicine_Add';
// import MsgProcessor from "./servepart/MsgProcessor"

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing(0),
  },form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper_1: {  //전체 크기 변환 height 변경
    padding: theme.spacing(0),  
    textAlign: 'center',
    height:'584x',
    color: theme.palette.text.secondary,

  },
  list: {
    width: '80%',
    maxWidth: 500,
    height: 40,
},
});

class Medicine extends Component {
  
  //   SimpleListMenu() {
  //   const med_name = ['혈압약', '감기약', '소화제', '비타민','관절약'];
  
  //   const handleClickListItem = event => {
  //     this.setState({
  //       anchorEl:null
  //     })
  //   };
  
  //   const handleMenuItemClick = (event, index) => {
  //     this.setState({
  //       selectedIndex:index,
  //       anchorEl:null
  //     })
     
  //      console.log(index);
  //   };
   
  //   const  handleClose = () => {
  //     this.setState({
  //       anchorEl:null
  //     })
  //   };
  
  //   return (
  //     <div>
  //       <List component="nav" aria-label="Device settings">
  //         <ListItem
  //           button
  //           aria-haspopup="true"
  //           aria-controls="lock-menu"
  //           aria-label="choose the medicine selection"
  //           onClick={handleClickListItem}
  //         >
  //         <Box width="100%" border={0.5} borderColor="palette.primary.light"  borderRadius="borderRadius">
  //           <ListItemText primary={<Typography variant="h4" Align="center">{med_name[this.state.selectedIndex]}</Typography>} />
  //           </Box>
  //         </ListItem>
  //         </List>
  //         <Menu
  //           id="lock-menu"
  //           anchorEl={this.state.anchorEl}
  //           keepMounted
  //           open={Boolean(this.state.anchorEl)}
  //           onClose={handleClose}>
              
  //           {med_name.map((med_name, index) => (
  //             <MenuItem
  //               key={med_name}
  //               selected={index === this.state.selectedIndex}
  //               onClick={event => handleMenuItemClick(event, index)}
  //             >
  //             {med_name}
  //             </MenuItem>
  //           ))}
  //         </Menu>
  //     </div>
  //   );
  // }
  

  render(){
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Grid container alignContent="center" spacing={2}>

        {/* paper_1 첫번째 칸 */}
          <Grid item xs={2}>
          <ControlBoard history = {this.props.history}/>
          </Grid>

        {/* paper_2 두번째 칸 */}
          <Grid item xs={10} > 
            <Box height={580}  border= {2} borderColor="#ed4b82" borderRadius="borderRadius">
              <Box color="primary.contrastText" bgcolor="#ed4b82" fontSize={30} textAlign="center" fontWeight="fontWeightBold" p={1}>
              약 복용설정
              </Box> 
            <IconTextList />
            <Grid alignItems="center" xs={12}>
              <Grid item container xs={12}>
                <Grid item xs={12}/>
                <Grid item xs={12}>
                  <SimpleListMenu/>
                  {/* <Medicine_Adder/> */}
                </Grid>

                
              {/* <Grid  xs={4}/>
                <Grid  xs={4}>
              <Button><EditRoundedIcon/><Typography variant="h5" Align="center">추가하기</Typography></Button>
              </Grid>
              <Grid  xs={4}/> */}
              </Grid>
            </Grid>
            </Box>
            </Grid>
            </Grid>
        </div>
    );
  }
}

export default  withStyles( useStyles )(Medicine);






 