import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Fab } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';

const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  paper_added: {
    width: 400,
    height: 430,
    overflow: 'auto',
    maxHeight: '500px'
  },
  paper_new: {
    width: '100%',
    height: '584px',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

export default function TransferList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };
  const customList = items => (
    <Paper className={classes.paper_added}>
       <List dense component="div" role="list">
        {items.map(value => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
              <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
              >
               <ListItem key={value} role="listitem" button onClick={handleToggle(value)}>
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1} 
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
        <ListItem />
      </List>
    </Paper>
     
  );

  return (
    
    
      <Grid container spacing={2} alignContents="center" 
      className={classes.root} xs={12} >
        <Paper className={classes.paper_new}>
              <Box fontSize={30} textAlign="center" fontWeight="fontWeightBold" m={1}>
              행사 내용
              </Box>
      <Grid container alignItems="center" spacing={1} > 
          <Grid item xs={6}>
          <Grid container alignContems='center'justify="center">
            <Grid item xs={12}>
            <Box color="text.secondary" fontSize={20} textAlign="center" fontWeight="fontWeightBold"  >
              등록된 행사
              </Box>
              {customList(left)}
              </Grid>
              <Grid item xs={4} >
                <br/>
              <Fab
                    variant="outlined"
                    size="small"
                    className={classes.button}
                    onClick={handleCheckedRight}
                    disabled={leftChecked.length === 0}
                    aria-label="move selected right"><DeleteForeverSharpIcon/>삭제하기 </Fab>
                </Grid>
             </Grid>
        </Grid>

      <Grid item xs={6}>
        <Grid container alignItems='center'justify="center">
          <Grid item xs={12}>
          <Box color="text.secondary" fontSize={20} textAlign="center" fontWeight="fontWeightBold">
              새로운 행사
              </Box>
           {customList(right)}
            </Grid>
            <Grid item xs={4} >
            <br/>
              <Fab
                  variant="outlined"
                  size="small"
                  className={classes.button}
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                ><AddCircleSharpIcon/>추가하기 </Fab>
              </Grid>
            </Grid>
        </Grid>

          </Grid>
    </Paper>
    </Grid>
    
    
  );
}
