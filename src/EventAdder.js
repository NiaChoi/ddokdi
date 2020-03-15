import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import ControlBoard from './servepart/ControlBoard';
import { FixedSizeList } from 'react-window';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ListSubheader from '@material-ui/core/ListSubheader';



import MsgProcessor from "./servepart/MsgProcessor"



const useStyles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(0),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paper_1: {  //전체 크기 변환 height 변경
    padding: theme.spacing(1),
    textAlign: 'center',
    height:'584x',       
    color: theme.palette.text.secondary,
  },
  card_d: {
    Width: 400,
    height:568,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

class EventAdder extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;//UI에 영향을 주지 않으므로 state X
    this.state = {
      nEventList: [],
      listLength: 0,
      dEventNo:0,
      dEventList:[]
      }
    }
  
    componentDidMount(){
      let userId = localStorage.getItem("USN");
      let msgProc = new MsgProcessor();
      msgProc.attemptNewEvent(userId, (result)=> { 
        if (result[0] == 0) {
          console.log(result[1]);
          this.setState({
            nEventList:result[1],
            listLength:result[1].length
          })  
        }
      });

    }
  
  handlejoinSubmit = event => {
    event.preventDefault();
    const tempRsp3 = {
    "payload":{

      "code": 200,
      "sucess": "event_j sucess"
        }
    }
    if(tempRsp3.payload.code === 200){
      alert(tempRsp3.payload.success);
  }
}
handleListItemClick = event => {
  let selectedEvent = event.target.innerText;
  let eventList = this.state.nEventList;
  let eventNo = 0;
  eventList.forEach(element => {
    if(element.event_name === selectedEvent){
      eventNo = element.event_no;
    }
  });
  
  this.setState({
    dEventNo:eventNo
  })  
  let msgProc = new MsgProcessor();
  msgProc.attemptDetailEvent(eventNo, (result)=> { 
    if (result[0] == 0) {
      console.log(result[1][0]);
      this.setState({
        dEventList:result[1][0]
      })  
    }
  });
}
  renderRow(mState, handleListItemClick ,props) {
    const { index, style } = props;
    console.log(mState.nEventList);
    const [checked, setChecked] = React.useState(false); 

    let event_list =[];
    mState.nEventList.forEach(element => {
      event_list.push(element.event_name);
    });

    console.log(handleListItemClick);
    // const mnRow = med_name.length;
    // // const med_time = [,];
    const handleChange = event => {
      setChecked(event.target.checked);
    };
    const handleOnClick = event =>{
      console.log(event.target.innerText);
    }
    return (
      ///List 항목 누르면 handledetailSubmit이 동작하게
      <form onSubmit={this.handledetailSubmit}>
        <ListItem button onClick={handleListItemClick} style={style} key={index} id={1}>
          <ListItemText primary= {event_list[index]} />
        </ListItem>
        </form>
    );
  }
  
  
  // titleselect();
  // if()

  render(){
    const { classes } = this.props;
    return (
      <div >
        <Grid container className={classes.root} spacing = {0}>
        {/* paper_1 첫번째 칸 */}
          <Grid item xs={2}>
          <ControlBoard history = {this.props.history}/>
          </Grid>

        {/* paper_2 두번째 칸 */}
          <Grid item xs={5} >
          <Paper className={classes.paper_1}>
          <Box color="text.secondary" fontSize={20} textAlign="left" fontWeight="fontWeightBold">
              새로운 행사
              </Box>
              <FixedSizeList height={528} width='90%' itemSize={60} itemCount={this.state.listLength}>
              {this.renderRow.bind(this, this.state, this.handleListItemClick)}
              </FixedSizeList>
              </Paper>
            </Grid>

            <Grid item xs={5} >
              <Paper className={classes.paper_1}>
                <Card className={classes.card_d}>
                  <CardHeader
                    title={this.state.dEventList.event_name}
                    subheader={this.state.dEventList.date}
                  />
                  {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  /> */}
                  <CardContent>
                    {/* ///여기에 tempRsp2의 내용을 띄움 */}
                    {this.state.dEventNo !== 0 ?<Typography align="left" variant="h5" color="textSecondary" component="p" >
                      
                    <Box color="text.secondary" fontSize={20} textAlign="left" fontWeight="fontWeightBold">
                      [대상] <br/>{this.state.dEventList.qualificaion}<br/>
                      [내용] <br/>{this.state.dEventList.body}<br/>
                      [장소] <br/>{this.state.dEventList.location}<br/>
                      [특이사항] <br/>{this.state.dEventList.beneficial}<br/>
                      [기타사항] <br/>{this.state.dEventList.ect}
                    </Box>
                      
                      
                    </Typography> : <Typography variant="body2" color="textSecondary" component="p"/>}
                    <form noValidate onSubmit={this.handlejoinSubmit}>
                      <Button size="small" color="primary">
                        <AddCircleIcon/>참가하기
                      </Button>
                    </form>
                  </CardContent>
                </Card>              
              </Paper>
            </Grid>
          </Grid>
      </div>
    );
  }
}
export default  withStyles( useStyles )(EventAdder);
