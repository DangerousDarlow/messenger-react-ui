import React, { useEffect } from "react"
import { Route, useHistory } from "react-router-dom"
import { createStyles, WithStyles, withStyles } from "@material-ui/core"
import Messages from "./Messages"
import Name from "./Name"
import TopBar from "./TopBar"
import { useTypedSelector } from "../reducers"

const styles = createStyles({
    root: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        width: "100%"
    }
})

interface AppProps extends WithStyles<typeof styles> {
}

const App = ({ classes }: AppProps) => {
    const isNameSet = useTypedSelector((state) => state.user.isNameSet)

    const history = useHistory()

    useEffect(() => {
        if (!isNameSet && history.location.pathname !== "/name") {
            history.push("/name")
        }
    }, [history, isNameSet])

    return (
        <div className={classes.root}>
            <div>
                <TopBar />
            </div>
            <Route exact path="/" component={Messages} />
            <Route exact path="/name" component={Name} />
        </div>
    )
}

export default withStyles(styles)(App)
