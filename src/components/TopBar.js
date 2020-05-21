import React from "react";

import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet } from "@fortawesome/pro-duotone-svg-icons";

const styles = {
    text: {
        margin: 16,
    },
};

const TopBar = ({ classes }) => {
    return (
        <>
            {/*static position is necessary to prevent the AppBar overlaying on top of the content section*/}
            <AppBar position="static">
                <Toolbar>
                    <FontAwesomeIcon icon={faToilet} size="2x" />
                    <Typography className={classes.text}>anna</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default withStyles(styles)(TopBar);
