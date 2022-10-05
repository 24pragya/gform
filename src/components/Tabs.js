import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab'

import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root:{
        flexGrow: 1,
    },
    tab:{
        fontSize:"20px",
        color:"#5f6368",
        textTransform:"capitalize",
        height:10,
        fontWeight: "600",
        fontFamily:'Google sans, Roboto, Arial, sans-serif',
    },
    tabs:{
        height:10
    }
})
function Centeredtabs() {
    const classes = useStyles()
  return (
    <Paper className={classes.root}>
        <Tabs
        textColor="primary"
        indicateColor="primary"
        centered
        >
            <Tab label="Questions">

            </Tab>
            <Tab label="Responses">

            </Tab>
        </Tabs>
    </Paper>
  )
}

export default Centeredtabs