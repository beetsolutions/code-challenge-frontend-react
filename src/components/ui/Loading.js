import CircularProgress from "@material-ui/core/CircularProgress";
import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    loading: {
        textAlign: "center",
        marginTop: "10em"
    }
}));

const Loading = () => {
    const classes = useStyles();
    return (
        <div className={classes.loading}>
            <CircularProgress size={60}/>
        </div>
    )
};

export default Loading;
