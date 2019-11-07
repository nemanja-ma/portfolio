import React, {Component} from 'react';
import SOCIAL_PROFILES from './data/socialProfiles.js'

class Icon extends Component {
    render(){
        const {link, image} = this.props.icon;
        return(
            <div style={{display: 'inline-block'}}>
                <a href={link}><img src={image} alt="social-profile" style={{width:35, margin:10 }}/></a>
            </div>
        )
    }
        
    
}

class SocialProfiles extends Component {
    render(){
        return(
            <div>
                <h2>Connect with me!</h2>
                <div>{
                    SOCIAL_PROFILES.map(SOCIAL_PROFILES => {
                        return(
                            <Icon key="{SOCIAL_PROFILES.id}" icon={SOCIAL_PROFILES}/>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}

export default SocialProfiles;