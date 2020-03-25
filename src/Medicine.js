import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconTextList from './servepart/IconTextList';
import ControlBoard from './servepart/ControlBoard';
import Box from '@material-ui/core/Box';
import SimpleListMenu from './servepart/med_select';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'584px',
    marginTop: theme.spacing(0),
  },form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  list: {
    width: '80%',
    maxWidth: 500,
    height: 40,
},
});

class Medicine extends Component {

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
                </Grid>
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






 