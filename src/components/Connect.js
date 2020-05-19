import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToilet } from "@fortawesome/pro-light-svg-icons/faToilet";

const Connect = () => {
    return (
        <>
            {/*static position is necessary to prevent the AppBar overlaying on top of the content section*/}
            <AppBar position="static">
                <Toolbar>
                    <FontAwesomeIcon icon={faToilet} size="2x" />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Connect;
