import React from 'react';
import './AboutCard.css';
import { Card, Button, Col } from 'antd';
import ModalForm from '../ModalForm/ModalForm';




class AboutCard extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            form_title: 'Back this project',
            about_section: {
                about_heading: 'About this project',
                about_project:'The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand  Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.',
              },
              isModalVisible: false,
        }
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    showModal () {
        this.setState({
            isModalVisible: true,
        })
    }



    handleCancel() {
        this.setState({
            isModalVisible: false,
        })
    }
    render(){
        const passed_data = this.props.data;
        const {about_heading,about_project} = this.state.about_section;
        let card_items = passed_data.map((data_item, index) => {
            return (<Col span={8}>
                <Card type='inner' hoverable = {data_item.isEnabled ? true : false} style={{ margin: 30, position: 'relative', height: 250, width: 580, align: 'center', top: 80, left: -20 }} bordered={true}>
                    <div class='block'>
                        <h6 class={data_item.isEnabled ? 'title-class' : 'greyed-title-class'} >{data_item.stand}</h6>
                        <h6 class={data_item.isEnabled ? 'price-class' : 'greyed-price-class'}>{data_item.pledge}</h6>
                        <p class= 'p1-class'>{data_item.text}</p>
                        <div class='block-quantity'>
                            <p class={data_item.isEnabled ? 'quantity' : 'greyed-quantity'}>{data_item.left}</p>
                            <p className = 'left-class'>  left</p>
                            <Button shape="round" size="medium" className = 'select-button' disabled = {!data_item.isEnabled} style={{height: 55,width: 200,bordered: false}} onClick ={this.showModal}>{data_item.button_data}</Button>
                        </div>
                    </div>
                </Card>
                <ModalForm title = {this.state.form_title} visible={this.state.isModalVisible}  onCancel={this.handleCancel} data = {passed_data}></ModalForm>
            </Col>);
        })


        return (

            <Card bordered={false} style={{ position: 'relative', height: 1225, width: 650, align: 'center', top: 5, left: 400 }}>
                <h1 class='about'>{about_heading}</h1>
                <p class='p-class'> {about_project}</p>
                {card_items}
            </Card>
        );
    }
};


export default AboutCard;