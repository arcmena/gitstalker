import React, { Component } from 'react';

import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';

import './styles.css';
import 'font-awesome/css/font-awesome.min.css';

export default class Main extends Component{

    constructor(props){
        super(props);
        this.state = {value: '', user: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    // componentDidUpdate(){
    //     this.handleChange();
    // }

    handleChange(event){
        this.setState({value: event.target.value});
        this.setState({user: ''});
    }
    
    handleClick(event){
        this.setState({user: this.state.value})
        event.preventDefault();
    }

    render(){
        return (
            <div className="content">
                <div className="inputUser">
                    <div className="border">
                        <form>
                            <input type="text" placeholder="Type the username you want to stalk!" size="28" onChange={this.handleChange}/>
                            <i type="submit" className="fa fa-search" onClick={this.handleClick}></i>
                        </form>
                    </div>
                </div>
                {!this.state.user ? <p></p> : 
                    <div className="profileNrepository">
                        <div className="profileWhrapper">
                            <Profile userSearch={this.state.user}/>
                        </div>
                        <div className="repositorieWhrapper">
                            <Repositories userSearch={this.state.user}/>
                        </div>
                    </div>
                }
            </div>
        );
    }
}