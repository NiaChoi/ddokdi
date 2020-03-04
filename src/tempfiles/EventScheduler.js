import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    margin: 'auto',
  },
  paper_added: {
    width: 200,
    height: 450,
    overflow: 'auto',
    maxHeight: '350px'
  },
  paper_new: {
    width: 500,
    height: 450,
    overflow: 'auto',
    maxHeight: '350px'
  },
  button: {
    margin: theme.spacing(0.5, 0),
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
  );
}

// //Extention Panel
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
// import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
// });

// export default function ActionsInExpansionPanelSummary() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ExpansionPanel>
//         <ExpansionPanelSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-label="Expand"
//           aria-controls="additional-actions1-content"
//           id="additional-actions1-header"
//         >
//           <FormControlLabel
//             aria-label="Acknowledge"
//             onClick={event => event.stopPropagation()}
//             onFocus={event => event.stopPropagation()}
//             control={<Checkbox />}
//             label="I acknowledge that I should stop the click event propagation"
//           />
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography color="textSecondary">
//             The click event of the nested action will propagate up and expand the panel unless you
//             explicitly stop it.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-label="Expand"
//           aria-controls="additional-actions2-content"
//           id="additional-actions2-header"
//         >
//           <FormControlLabel
//             aria-label="Acknowledge"
//             onClick={event => event.stopPropagation()}
//             onFocus={event => event.stopPropagation()}
//             control={<Checkbox />}
//             label="I acknowledge that I should stop the focus event propagation"
//           />
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography color="textSecondary">
//             The focus event of the nested action will propagate up and also focus the expansion
//             panel unless you explicitly stop it.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-label="Expand"
//           aria-controls="additional-actions3-content"
//           id="additional-actions3-header"
//         >
//           <FormControlLabel
//             aria-label="Acknowledge"
//             onClick={event => event.stopPropagation()}
//             onFocus={event => event.stopPropagation()}
//             control={<Checkbox />}
//             label="I acknowledge that I should provide an aria-label on each action that I add"
//           />
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography color="textSecondary">
//             If you forget to put an aria-label on the nested action, the label of the action will
//             also be included in the label of the parent button that controls the panel expansion.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//     </div>
//   );
// }
