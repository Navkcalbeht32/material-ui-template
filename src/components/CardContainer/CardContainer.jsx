import React from 'react';
import Grid from '@material-ui/core/Grid';
import './CardContainer.styles.scss';
import Divider from '@material-ui/core/Divider';



const CardContainer = () => {
    
    return (
        <div className="wrapper">
        <Grid container spacing={3}>
            <Grid item xs={8} className="card card-large">
            
            </Grid>
            <Grid item xs={4} className="card card-small">
            
            </Grid>
        </Grid>
        </div>
    )
}

export default CardContainer
