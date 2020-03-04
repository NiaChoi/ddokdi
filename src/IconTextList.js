import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FloatingActionButtons from './tempfiles/FloatingActionButtons'

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    height:'500px',
    '& > *': {
      margin: theme.spacing(1),
    },
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
   render(){
    const { classes } = this.props;

      return (
        <div className={classes.root}>
          <paper className={classes.paper}>
            <CssBaseline/>
            {/* 스크롤 되는 리스트*/}
          <Grid container>
            <Grid item xs={12}>
            <List dense component="div" role="list">
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                </ListItem>))}
                </List>
                <Divider />
            </Grid>
            <Grid item xs={12}>
            <FloatingActionButtons/>
            <FloatingActionButtons/>
            <FloatingActionButtons/>
              </Grid>
            </Grid>  
          
          </paper>
          
        </div>
      );
    }
 }
 
 export default  withStyles( useStyles )(IconTextList);


// import CssBaseline from '@material-ui/core/CssBaseline';
// import List from '@material-ui/core/List';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import PropTypes from 'prop-types';
// import { makeStyles, withStyles } from '@material-ui/core/styles';
// import { FixedSizeList } from 'react-window';

// const useStyles = makeStyles(theme => ({
//     root: {
//       width: '100%',
//       height: 400,
//       maxWidth: 300,
//       backgroundColor: theme.palette.background.paper,
//     },
//   }));

// function renderRow(props) {
//   const { index, style } = props;

//   return (
//     <ListItem button style={style} key={index}>
//       <ListItemText primary={`Item ${index + 1}`} />
//     </ListItem>
//   );
// }

// renderRow.propTypes = {
//   index: PropTypes.number.isRequired,
//   style: PropTypes.object.isRequired,
// };

// class IconTextList extends Component{
    
//     render(){
//         const {classes} = this.props;

//       return (
//         <div className={classes.root}>
//           <CssBaseline />
//           <Divider />
//           <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
//         {renderRow}
//             <List>
//               {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//                 <ListItem button key={text}>
//                   <ListItemText primary={text} />
//                   <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//                 </ListItem>
//               ))}
//             </List>
//             </FixedSizeList>
//             <Divider />
//         </div>
//       );
//     }
//  }
// export default withStyles(useStyles)(IconTextList);  


//button
