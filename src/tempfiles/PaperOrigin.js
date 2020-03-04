import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  paper_1: {  //전체 크기 변환 height 변경
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'500px',       
    color: theme.palette.text.secondary,
  },
  paper_2: {  //두번째 칸 건들일 필요 x
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'100%',
    color: theme.palette.text.secondary,
  },
  paper_3_1: {  //세번째 칸의 첫번째, 3_1과 3_2의 합산이 paper_1과 같아야함
    padding: theme.spacing(0),
    textAlign: 'center',
    height:'300px',
    color: theme.palette.text.secondary,
  },
  paper_3_2: {  //세번째 칸의 두번째 
    padding: theme.spacing(0),
    textAlign: 'center', 
    height:'200px',
    color: theme.palette.text.secondary,
  }
}));

export default function NestedGrid() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing = {0}>
      {/* paper_1 첫번째 칸 */}
        <Grid item xs={2}>
          <Paper className={classes.paper_1}>item0</Paper>
        </Grid>

      {/* paper_2 두번째 칸 */}
        <Grid container item xs={5}>
          <Grid item xs={12}>
            <Paper className={classes.paper_2}>item2-1</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper_2}>item2-2</Paper>
          </Grid>
        </Grid>
        
      {/* paper_3 세번째 칸 */}
        <Grid container item xs={5}>
      {/* paper_3_1 세번째의 첫번째 칸 */} 
          <Grid item xs={12}>
            <Paper className={classes.paper_3_1}>item2-1</Paper>
          </Grid>
      {/* paper_3_2 세번째의 두번째 칸 */} 
          <Grid item xs={12}>
            <Paper className={classes.paper_3_2}>item2-2</Paper>
          </Grid>
        </Grid>

      </Grid>
      </div>
    );
}