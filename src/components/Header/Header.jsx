import React from 'react';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import './Header.styles.scss';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import MenuIcon from '@material-ui/icons/Menu';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import logo from '../../assets/name-logo.svg';
import theme from '../../Theme';

const Header = () => {
    return (
        <Container disableGutters className='navigation'>
            <div className="wrapper">
                <div>
                    <Fab className="nav-fab-logo" disableRipple color="transparent" variant="extended">
                        <img className="logo" src={logo} alt=""/>
                    </Fab>
                </div>
                <div>
                    <Fab className="nav-fab" color="secondary" variant="extended">
                        PORTFOLIO
                    </Fab>
                    <Fab className="nav-fab" color="secondary" aria-label="add">
                        UX
                    </Fab>
                    <Fab className="nav-fab" color="secondary" aria-label="edit">
                        <SportsEsportsIcon fontSize='medium' />
                    </Fab>
                    <Fab className="nav-fab" color="secondary" aria-label="edit">
                        <WbSunnyIcon fontSize='medium' />
                    </Fab>
                    <Fab className="nav-fab" color="secondary" aria-label="edit">
                        <MenuIcon fontSize='medium' />
                    </Fab>
                </div>
            </div>
        </Container>
    )
}

export default Header;
