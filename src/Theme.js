import { createMuiTheme } from '@material-ui/core/styles';

const primBlue = "#0B72B9"
const primGray = "#ffffff"
const white = "#fff"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${primBlue}`,
            lightGray: `${primGray}`,
            white: `${white}`,
        },
        primary: {
            main: `${primBlue}`
        },
        secondary: {
            main: `${primGray}`
        },
        white: {
            main: `${white}`
        },
        info: {
            main: `${white}`
        }
    }
});
