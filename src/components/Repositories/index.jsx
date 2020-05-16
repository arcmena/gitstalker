import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
import {Language} from './styles';

class Repositories extends Component{

    state = {
        repositories: [],
        user: ''
    }

    componentDidMount(){
        this.loadRepos();
    }

    loadRepos = async() =>{
        const response = await api.get(`users/${this.props.userSearch}/repos`);

        console.log(response.data);

        this.setState({repositories: response.data});
    }

    // loadUser = async() =>{
    //     const commits = await api.get(`https://api.github.com/repos/arcmena/${repositories.data.name}/commits`);
    //     return
    // }

    render(){
        const {repositories} = this.state;

        return(
            <div className="repositories-list">
                <h3>{repositories.length} repositories found</h3>
                {repositories.map(repos =>(
                    <article key={repos.id}>
                        <strong>{repos.name}</strong>
                        <p>{repos.description}</p>
                        <Language>{repos.language}</Language>
                        <a href={repos.html_url} target="_blank" rel="noopener noreferrer">Go to Repo!</a>
                    </article>
                ))}
            </div>
        );
    }
}

export default Repositories;