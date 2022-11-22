import React from 'react'
import { useEth } from '../../contexts/EthContext'
import './Header.css'
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import Button from '@mui/material/Button/Button';

function Header() {
    
    const { state : {accounts}} = useEth()

    return(
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 30 }}>
                Voting Project v2
                <HowToVoteIcon sx={{ fontSize: 30, ml: 2}}/>                             {/** ml = margin left  */}
            </Typography>
            <Button sx={{fontSize: 15}}color="inherit">Your are currently connected with address: {accounts}</Button>
          </Toolbar>
        </AppBar>
      </Box>
    )
}


export default Header