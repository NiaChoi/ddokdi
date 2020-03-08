import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const useStyles =theme => ({
  root: {
    margin: 'auto',
  },
  paper_added: {
    width: 200,
    height: 450,
    overflow: 'auto',
    maxHeight: '400px'
  },
  paper_new: {
    width: 500,
    height: 450,
    overflow: 'auto',
    maxHeight: '400px'
  },
  button: {
    margin: theme.spacing(0.5, 0),
  },
});

function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}



class EventBoard extends Component {

  render(){
    const {classes} = this.props;
    
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
    
    ///??????
    const customList = items => (
      <Paper className={classes.paper_added}>
        <List dense component="div" role="list">
          {items.map(value => {
            const labelId = `transfer-list-item-${value}-label`;
  
            return (
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
            );
          })}
          <ListItem />
        </List>
      </Paper>
    );
    
  
    return (
      <div>
        <Grid container spacing={2} alignItems="center" className={classes.root}>
        <Grid item>{customList(left)}
         <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right">delete</Button>
            </Grid>    
        <Grid item>{customList(right)}
        <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              JOIN
            </Button>
            </Grid>
      </Grid>
      </div>
      
    );
  }
    
}
export default withStyles( useStyles )(EventBoard);