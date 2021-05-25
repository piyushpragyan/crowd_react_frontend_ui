import React from 'react';
import './DashCard.css';
import {Card} from 'antd';
import {Progress} from 'antd';

class DashCard extends React.Component{
    render(){
        const {total_backed,total_backers,days_left,total_target} = this.props.data;
        return(
                   <Card bordered={false} style={{ height: 200,width: 650, align: 'center', top: -30, left: 400 }} >
                       <div class = 'block'>
                       <p class = 'left-aligned'>
                           {total_backed}<br></br><p class = 'subtle'>of {total_target}</p>
                       </p>
                       <p class = 'center-aligned'>
                       {total_backers} <br></br><p class = 'subtle'>total backers</p>
                       </p>
                       <p class = 'right-aligned'>
                       {days_left}<br></br><p class = 'subtle'>days left</p>
                       </p>
                       </div>
                       <Progress type = 'line' percent = {75} showInfo={false} strokeColor={'hsl(176, 50%, 47%)'} strokeWidth={12}></Progress>
                    </Card>
        )
    }
}

export default DashCard;