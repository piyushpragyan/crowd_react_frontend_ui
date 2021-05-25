import React from 'react';
import './HeroImage.css';
import Logo from '../Assets/logo.svg';
import MasterCraft from  '../Assets/logo-mastercraft.svg';

class HeroImage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            get_started: 'Get Started',
            discover: 'Discover',
            about: 'About'
        }
    }

    root = () => {
        this.props.history.push("/");
    }

    render() {
        return (
            <div className='bg-img'>
                <a href="/">
                    <img className='logo' src={Logo} alt='Crowd Fund' />
                </a>
                <div class="top-nav">
                    <div class = 'nav-block'>
                    <a href="#home">{this.state.get_started}</a>
                    <a href="#news">{this.state.discover}</a>
                    <a href="#contact">{this.state.about}</a>
                </div>
                </div>
                <img src = {MasterCraft} className = 'masterCraft' alt='mastercraft'></img>
            </div>
        );
    }
}

export default HeroImage;