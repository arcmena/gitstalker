import React, { Component } from 'react';

import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';

import './styles.css'

export default class Main extends Component{
    render(){
        return (
            <div className="content">
                <div className="profileWhrapper">
                    <Profile/>
                </div>
                <div className="repositorieWhrapper">
                    <Repositories/>
                </div>
            </div>
        );
    }
}