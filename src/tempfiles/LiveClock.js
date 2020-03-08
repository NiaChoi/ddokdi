import React from 'react';
import Clock from 'react-live-clock';

class LiveClock extends Component{
    render(){
        return(
            <div>
                <Clock format={'YYYY년 MM월 DD일 HH:mm '} ticking={true} timezone={KR}/>
            </div>

        );
    }
}
export default LiveClock;