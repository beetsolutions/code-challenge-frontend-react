import {createMuiTheme} from "@material-ui/core/styles";

const primaryColor = "#6200EE";
const secondaryColor = "#3700B3";
const greyColor = "#868686";

export default createMuiTheme({
    palette: {
        common: {
            grey: `${greyColor}`,
            orange: `${primaryColor}`,
        },
        primary: {
            main: `${primaryColor}`,
        },
        secondary: {
            main: `${secondaryColor}`,
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: greyColor,
            lineHeight: 1.5
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: greyColor
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            color: greyColor,
            fontWeight: 700
        },
        h6: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.5rem",
            color: greyColor,
            lineHeight: 1.5
        },
        subtitle1: {
            fontSize: "1rem",
            fontWeight: 300,
            color: greyColor
        },
        body1: {
            fontSize: "1.25rem",
            color: greyColor,
            fontWeight: 300
        },
    },
});