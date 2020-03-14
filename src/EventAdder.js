import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper  from '@material-ui/core/Paper';
import ControlBoard from './tempfiles/ControlBoard';
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
      tempRsp1:{
        "payload":{
          "l_j_event": [
            {
              "event_no": 54,
              "event_name": "만들기!"
            },
            {
              "event_no": 55,
              "event_name": "하하하 웃음교실!"
            },
            {
              "event_no": 56,
              "event_name": "교육"
            },
            {
              "event_no": 57,
              "event_name": "푸하하하!"
            }
          ],
        }
      },
      }
    }
  
  handlejoinSubmit = event => {
    event.preventDefault();
    ///load join event Req
    // const tempRsp = {
    //   "payload":{

    //     "l_j_event": [
    //       {
    //         "event_no": 54,
    //         "event_name": "만들기!"
    //       },
    //       {
    //         "event_no": 55,
    //         "event_name": "하하하 웃음교실!"
    //       },
    //       {
    //         "event_no": 56,
    //         "event_name": "교육"
    //       },
    //       {
    //         "event_no": 57,
    //         "event_name": "푸하하하!"
    //       }
    //     ],
    //   }
    // }
  }
  ///
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
//세부 내용 불러오기
  handledetailSubmit = event => {
    event.preventDefault();
      const tempRsp2 = {
        "payload":{
          "d_event": [
            {
              "event_name": "교육",
              "date": "2020-03-18T08:00:00.000Z!",
              "qualificaion": "누구나!",
              "body": "배움의 즐거움을 느껴요!",
              "location": "대구광역시!",
              "beneficial": "배움 가득",
              "ect": "없음!",
              "heads": 30,
            },
          ],
        }
      }
  }


    


  list_length =  4;
  renderRow(props) {
    const { index, style } = props;
    console.log(index);
    const [checked, setChecked] = React.useState(false); 
    const event_list =[54,55,56,57];
    // const mnRow = med_name.length;
    // // const med_time = [,];
    const handleChange = event => {
      setChecked(event.target.checked);
    };
    
    return (
      ///List 항목 누르면 handledetailSubmit이 동작하게
      // <form onSubmit={this.handledetailSubmit}>
        <ListItem button type = "submit" tabindex={event_list[index]} style={style} key={index} >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            value="primary"
            inputProps={{ 'aria-label': 'primary checkbox' }}/>
          <ListItemText primary= {event_list[index]} />
        </ListItem>
    //  </form>
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
          <Box color="text.secondary" fontSize={20} textAlign="center" fontWeight="fontWeightBold">
              새로운 행사
              </Box>
              <FixedSizeList height={541} width='90%' itemSize={60} itemCount={this.list_length}>
              {this.renderRow}
              </FixedSizeList>
              </Paper>
            </Grid>

            <Grid item xs={5} >
              <Paper className={classes.paper_1}>
                <Card className={classes.card_d}>
                  <CardHeader
                    title="{this.tempRsp2.event_name}"
                    subheader="{this.tempRsp2.date}"
                  />
                  {/* <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                  /> */}
                  <CardContent>
                    {/* ///여기에 tempRsp2의 내용을 띄움 */}
                    <Typography variant="body2" color="textSecondary" component="p">
                      {/* 대상: {this.tempRsp2.qualificaion}<br/>
                      내용: {this.tempRsp2.body}<br/>
                      장소: {this.tempRsp2.location}<br/>
                      특이사항: {this.tempRsp2.beneficial}<br/>
                      기타사항: {this.tempRsp2.ect}<br/> */}
                    </Typography>
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
