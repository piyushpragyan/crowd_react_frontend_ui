import { Modal,Card,Radio } from 'antd';
import React from 'react';
import './ModalForm.css';
import ThankYou from '../ThankYou/ThankYou'


class ModalForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isThankYouVisible: false,
            value: 1,
            subtitle: 'Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?',
        }
        this.showThankYouModal = this.showThankYouModal.bind(this);
        this.handleThankYouCancel = this.handleThankYouCancel.bind(this);
        this.handleThankYouOk = this.handleThankYouOk.bind(this);
    }



    showThankYouModal(){
        this.setState({
            isThankYouVisible: true,
        });
    }

    handleThankYouCancel() {
        this.setState({
            isThankYouVisible: false,
        });
    }

    handleThankYouOk(){
        this.setState({
            isThankYouVisible: false,
        });
    }



    handleRadioClick = (e) => {
        this.setState({
            value: e.target.value,
        });
    }


    render() {
        let product_data = this.props.data;
        let data = product_data.map((data_item,idx) => {
            return(
                <div onClick = {this.showThankYouModal}>
                <Card className = 'card_class' id ={idx+2} type='inner' hoverable = {data_item.isEnabled} style={{ margin: 30, position: 'relative', height: 150, width: 580, align: 'center', top: 0, left: -20 }} bordered={true}>
                   <Radio value = {idx+2} style = {{top: 15}} disabled = {!data_item.isEnabled}></Radio>
                   <p class = {data_item.isEnabled ? 'title-class1' : 'greyed-title-class1'}>{data_item.stand}</p>
                   <p class = 'main-text'>{data_item.text}</p>
                   <p class = 'pledge-text'>{data_item.pledge}</p>
                </Card>
                </div>
            );
        })


        return (
            <div>
            <Modal class='modal-form' title={[<h3 class='title'>{this.props.title}</h3>]} visible={this.props.visible} onCancel={this.props.onCancel} bodyStyle={{ height: 850 }} footer = {null} width={675}>
                <p class = 'modal-question'> {this.state.subtitle}</p>
                <Radio.Group name="radiogroup" value={this.state.value} onChange={this.handleRadioClick}>
                <div onClick = {this.showThankYouModal}>
                <Card type='inner' class = 'card_class' id = '1' value = {this.state.cardValue} hoverable style={{ margin: 30, position: 'relative', height: 150, width: 580, align: 'center', top: 0, left: -20 }} bordered={true}>
                   <Radio value = {1} style = {{top: 15}}></Radio>
                   <p class = 'title-class1'>Pledge with No Reward</p>
                   <p class = 'main-text'>Choose to support us without a reward if you simply believe in our project. As a backer,you will be signed up to receive product updates via email.</p>
                </Card>
                </div>
                {data}
                </Radio.Group>
            </Modal>
            <ThankYou visible={this.state.isThankYouVisible} onOk = {this.handleThankYouOk} onCancel = {this.handleThankYouCancel} ></ThankYou>
            </div>
        );
    }
}



export default ModalForm;
