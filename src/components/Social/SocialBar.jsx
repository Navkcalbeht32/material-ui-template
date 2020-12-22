import React from 'react';
import './SocialBar.styles.scss'
import Fab from '@material-ui/core/Fab';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DescriptionIcon from '@material-ui/icons/Description';


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
                            <LinkedInIcon />
                        </Fab>
                        <Fab className="social-item" size="small" color="primary" aria-label="add">
                            <GitHubIcon />
                        </Fab>
                        <Fab className="social-item" size="small" color="primary" aria-label="add">
                            <DescriptionIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialBar
