import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png'

class App extends Component {
    state = {
        displayBio: false
    }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {

        return (
            <div>
                <img src={profile} alt="profile" className='profile-picture'/>
                <h1>HEllo!</h1>
                <p>My name is nemanja im an engineer</p>
                <p>I am allways looking forward on meaningfull projects</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live Slovakia and I code every day</p>
                            <p>Besides coding I also love design and architecture</p>
                            <p>My favourite language is JavaScript, and favourite framevork is React.js</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                            <div>
                                <button onClick={this.toggleDisplayBio}>Read More</button>
                            </div>
                        )
                }
                <hr />
                <Projects />

                <hr/>
                <SocialProfiles/>
            </div>
        )
    }
}

export default App;