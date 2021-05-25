import React from 'react';
import './ThankYou.css';
import {Modal,Button} from 'antd';
import IconCheck from '../Assets/icon-check.svg';



class ThankYou extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            contents: {
            thankYouTitle: 'Thanks for your support!',
            thankYouText: 'Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed.',
            buttonText: 'Got it!'
            }
        }
    }

    

    render() {
        const {thankYouTitle,thankYouText,buttonText} = this.state.contents;
        return (
            <>
        <Modal class='thank-you-modal'  visible={this.props.visible}  onCancel={this.props.onCancel} bodyStyle={{ height: 450}} onOk = {this.props.onOk} closable = {false} centered = {true} footer = {null}
     width={675}>
            <img src = {IconCheck} class = 'check-image' alt = 'checked'></img>
            <p class = 'thank-you'>{thankYouTitle}</p>
            <p class = 'thankyou-text'>{thankYouText}</p>
            <Button shape="round" size="normal" className = "button" style={{height: 55,width: 200}} onClick = {this.props.onOk}>{buttonText}</Button>
        </Modal>
        </>
        );
    }
}


export default ThankYou;