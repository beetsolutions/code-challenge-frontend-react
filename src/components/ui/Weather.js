import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useTheme} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "0em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "0em"
        },
    },
    gridList: {
    },
    card: {
        margin: "1em",
        paddingBottom: "1em",
        width: "100% !important",
        height: "100% !important"
    }
}));

const Weather = (props) => {
    const theme = useTheme();
    const classes = useStyles();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    const { weatherData } = props;

    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <GridList className={classes.gridList}>

                {weatherData.map((weather) => (
                    <Card key={weather.key}
                          className={classes.card}>
                        <Grid item>
                            <Grid
                                container
                                direction={matchesXS ? "column" : "row"}
                                justify={matchesXS ? "center" : undefined}>
                                <Grid
                                    item
                                    style={{
                                        marginLeft: matchesXS ? 0 : "1.2em",
                                        textAlign: matchesXS ? "center" : undefined
                                    }}>
                                    <Typography variant="h2">{weather.name}</Typography>
                                    <Typography variant="subtitle1"
                                                className={classes.subtitle}>{weather.firstDate}</Typography>
                                </Grid>
                            </Grid>

                            <Grid
                                container
                                direction={matchesXS ? "column" : "row"}
                                justify={matchesXS ? "center" : undefined}>

                                <Grid item
                                      style={{
                                          marginLeft: "1.2em",
                                          textAlign: matchesXS ? "center" : undefined
                                      }}>
                                    <Typography variant="h6" style={{marginTop: "0.5em"}}>Pressure
                                        (pa)</Typography>
                                    <Typography
                                        variant="subtitle1">HIGH: {weather.pressure.max === undefined ? "N/A" : weather.pressure.max}</Typography>
                                    <Typography
                                        variant="subtitle1">LOW: {weather.pressure.min === undefined ? "N/A" : weather.pressure.min}</Typography>
                                </Grid>

                                <Grid item
                                      style={{
                                          marginLeft: "1.2em",
                                          textAlign: matchesXS ? "center" : undefined
                                      }}>
                                    <Typography variant="h6" style={{marginTop: "0.5em"}}>Temperature
                                        (&#8451;)</Typography>
                                    <Typography
                                        variant="subtitle1">HIGH: {weather.temperature.max === undefined ? "N/A" : weather.temperature.max}</Typography>
                                    <Typography
                                        variant="subtitle1">LOW: {weather.temperature.min === undefined ? "N/A" : weather.temperature.min}</Typography>
                                </Grid>

                                <Grid item
                                      style={{
                                          marginLeft: "1.2em",
                                          textAlign: matchesXS ? "center" : undefined
                                      }}>
                                    <Typography variant="h6" style={{marginTop: "0.5em"}}>Wind
                                        (m/s)</Typography>
                                    <Typography
                                        variant="subtitle1">HIGH: {weather.wind.max === undefined ? "N/A" : weather.wind.max}</Typography>
                                    <Typography
                                        variant="subtitle1">LOW: {weather.wind.min === undefined ? "N/A" : weather.wind.min}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Card>
                ))}
            </GridList>
        </Grid>
    )
}

Weather.propTypes = {
    weatherData: PropTypes.array,
};
export default Weather;