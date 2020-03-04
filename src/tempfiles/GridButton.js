import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from "@material-ui/icons/AccountCircle";
import Grid  from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

class GridTextField extends Component{
    render(){
      const { classes } = this.props;
  
        return (
          <div className={classes.margin}>
           
            <Grid container spacing={3} >
              <Grid item xs={12}>
                <AccountCircle style={{ fontSize: 50 }} />
              </Grid>
              <Grid item xs={12}>
                <TextField id="input-with-icon-grid" label="ID" 
                variant="outlined" />
                </Grid>
              <Grid item xs={12}>
                <TextField id="input-with-icon-grid" label="PW" 
                variant="outlined" />
              </Grid>
            </Grid>
      
          
          </div>
        );
      }
    }

export default  withStyles( useStyles )(GridTextField);


// export default  function InputWithIcon( useStyles )(GridTextField);


// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import AccountCircle from '@material-ui/icons/AccountCircle';

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1),
//   },
// }));

// export default function InputWithIcon() {
//   const classes = useStyles();

//   return (
//     <div>
//       <Grid container spacing={1} alignItems="flex-end">
//           <Grid item>
//             <AccountCircle />
//           </Grid>
//           <Grid item>
//             <TextField id="input-with-icon-grid" label="With a grid" />
//           </Grid>
//         </Grid>
      
//       <div className={classes.margin}>
        
//       </div>
//     </div>
//   );
// }
