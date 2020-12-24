import React from 'react';
import Grid from '@material-ui/core/Grid';
import './CardContainer.styles.scss';
import theme from '../../Theme'
import Divider from '@material-ui/core/Divider';
import '../../Theme'




const CardContainer = () => {
    
    return (
        <div className="wrapper">
        <Grid container spacing={3}>
            <Grid item xs={12} className="card" color="secondary">
                <div className="hero-wrapper">
                    <h3>site work in progress</h3>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>
 
            </Grid>
        </Grid>
        </div>
    )
}

export default CardContainer
