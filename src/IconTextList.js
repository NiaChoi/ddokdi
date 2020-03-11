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
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'584px',
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
  renderRow(props) {
    const { index, style } = props;
    console.log(index);
    const [checked, setChecked] = React.useState(false);
    const med_name = ['혈압약', '감기약', '소화제', '비타민'];
    const med_time = []

    const handleChange = event => {
      setChecked(event.target.checked);
    };
    
    return (
      ///List 변수 값 넣어보기
      <ListItem button style={style} key={index} >
        <Checkbox
          checked={checked}
          onChange={handleChange}
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}/>
        <ListItemText primary={` ${index + 1}`} />
        <ListItemIcon>
          <Brightness6Icon style={{ fontSize: 40 }}/>
          <Brightness5Icon style={{ fontSize: 40 }}/>
          <Brightness4Icon style={{ fontSize: 40 }}/>
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
            <Typography>
              <Box fontSize={30} textAlign="center" fontWeight="fontWeightBold" m={1}>
              약 복용설정
              </Box>
            </Typography>
            <Divider/> 
            <FixedSizeList height={300} width='90%' itemSize={60} itemCount={6}>
            {this.renderRow}
            </FixedSizeList>
            <Divider/>
            </Grid>
              <Grid  xs={3}/>
              <Grid  xs={3}>
               <Button><EditRoundedIcon/> 수정하기</Button>
               </Grid>
               <Grid  xs={3}>
               <Button><DeleteForeverSharpIcon/>삭제하기</Button>
              </Grid>
              <Grid  xs={3}/>
              </Grid>
        </div>
      );
    }
 }
 
 export default  withStyles( useStyles )(IconTextList);
