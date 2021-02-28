import React from 'react'
import { AppBar, Toolbar, Typography, WithStyles, withStyles } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToilet } from '@fortawesome/pro-duotone-svg-icons'
import { useTypedSelector } from '../reducers'

const styles = {
    text: {
        margin: 16,
    },
}

interface TopBarProps extends WithStyles<typeof styles> {
}

const TopBar = ({ classes }: TopBarProps) => {
    const name = useTypedSelector((state) => state.user.name)

    return (
        <>
            {/*static position is necessary to prevent the AppBar overlaying on top of the content section*/}
            <AppBar position='static'>
                <Toolbar>
                    <FontAwesomeIcon icon={faToilet} size='2x' />
                    <Typography className={classes.text}>{name}</Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default withStyles(styles)(TopBar)
