import React from "react";

import { withStyles } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet } from "@fortawesome/pro-light-svg-icons/faToilet";

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
                    <Typography className={classes.text}>
                        name_placeholder
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default withStyles(styles)(TopBar);
