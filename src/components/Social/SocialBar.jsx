import React from 'react';
import './SocialBar.styles.scss'
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';

const socialLinks = {
    LinkedIn: 'https://www.linkedin.com/in/alexandersumoski/',
    Github: 'https://www.linkedin.com/in/alexandersumoski/'
};

const handleClick = () => {

    window.open(socialLinks, '_blank');
  };

const SocialBar = () => {
    return (
        <div className="wrapper">
            <div className="socialbar">
                <div className="vertical-align">
                    <div>
                        <h3>Personal Profiles</h3>
                    </div>
                    <div className="fab-wrapper">
                        <Fab className="social-item" size="small" color="primary" aria-label="add">
                            <LinkedInIcon onClick={() => handleClick('LinkedIn')} />
                        </Fab>
                        <Fab className="social-item" size="small" color="primary" aria-label="add">
                            <GitHubIcon onClick={() => handleClick('Github')} />
                        </Fab>
                        <Fab className="social-item" size="small" color="" aria-label="add">
                            <DescriptionIcon />
                        </Fab>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialBar
