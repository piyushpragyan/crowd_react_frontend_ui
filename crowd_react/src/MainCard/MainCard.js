import React from 'react';
import { Card,Button } from 'antd';
import './MainCard.css';
import ModalForm from '../ModalForm/ModalForm';
import BookMark from '../Assets/icon-bookmark.svg';


class MainCard extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            card_contents : {
                title: 'Mastercraft Bamboo Monitor Riser',
                sub_title: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
                form_title: 'Back this project',
            },
            isModalVisible: false,
        }
        this.showModal = this.showModal.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

   
    showModal() {
        this.setState({
            isModalVisible: true,
        })
    }

    
    handleCancel() {
        this.setState({
            isModalVisible: false,
        })
    }



    
    render() {
        const {title,sub_title,form_title} = this.state.card_contents;
    return (
        <div>
                <Card bordered={false} style={{ position:'relative',height: 250,width: 650, align: 'center', top: -50, left: 400 }} >
                    <p className = 'card-title'>{title}</p>
                    <p class = 'card-subtitle'>{sub_title}</p>
                    <Button shape="round" size="large" className = 'firstbutton' style={{height: 55,width: 200}} onClick = {this.showModal}>Back this project </Button>
                    <Button shape='round' size='large' className = 'secondbutton' style = {{height: 55,width: 170}}>Bookmark</Button>
                    <img src = {BookMark} className = 'bookmark' alt = 'bookmark'></img>
                </Card>
                <ModalForm title = {form_title} visible={this.state.isModalVisible}  onCancel={this.handleCancel} data = {this.props.data}></ModalForm>
        </div>)
};
}


export default MainCard;