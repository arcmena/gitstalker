import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

class Profile extends Component{

    state = {
        profile: []
    }

    componentDidMount(){
        this.loadProfile();
    }

    loadProfile = async() =>{
        const result = await api.get("users/arcmena");

        console.log(result.data)

        this.setState({profile: result.data})
    }

    render(){

        const {profile} = this.state

        return(
            <div className="profile">
                <div className="principalData">
                    <img src={profile.avatar_url} alt="profile_image"/>
                    <h1>{profile.name}</h1>
                    <h2>{profile.login}</h2>
                </div>
                <p id="bio">{profile.bio}</p>
                <h2>{profile.location}</h2>
                <div className="follow">
                    <p>{profile.followers} Followers</p>
                    <p>{profile.following} Following</p>
                </div>
                <a href={profile.html_url} target="_blank" rel="noopener noreferrer">Acess GitHub</a>
            </div>
        );
    }
}

export default Profile;
