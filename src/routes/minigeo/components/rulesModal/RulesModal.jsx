import { Paper } from "@mui/material";
import { useState } from "react";
import { Button } from "@mui/material";
import {Typography} from "@mui/material";
const RulesModal = () => {

    const [closed,setClosed] = useState(false) 

    return (
        <Paper
        sx={
                {  
                    width: "80vw",  
                    padding:"30px", 
                    top: "10vh",
                    left:"10vh", 
                    position: "absolute", 
                    margin: "0 auto", 
                    zIndex:closed ? -1 : 2}}>
            <h2>Rules</h2>
            <Typography variant="div" >
                You should find countries whose name you see at the top left screen corner. If you want to stop game before all rounds come, press Skip button. If you want to learn country locations just press "Inspect map" button. At start menu you can configure some game parameters
            </Typography>
            <Button sx={{display:"block", margin:"0 auto"}} onClick={() => setClosed(true)}>Close rules</Button>
        </Paper>
    )
};

export default RulesModal