import React from 'react'
import { useState } from 'react';
import { useEth } from '../../contexts/EthContext';
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import '../AddVoter/Add.css'

function Vote({ status, setAddresses, address }) {

    const { state: { contract, accounts } } = useEth();
    const [inputValue, setInputValue] = useState("");

    const Vote = async() => {
        try {
            await contract.methods.setVote(inputValue).send({ from: accounts[0] });
            setInputValue("");
        } catch (error) {
            if (inputValue === "") {
                alert("put a valid id");
            }
        }
    }

    const handleInputChange = e => {
          setInputValue(e.target.value);

    };

    const VoteBox =
        <div className='Add'>
            Vote for a proposal: 
            <TextField 
                id="outlined-basic"
                label="Proposal-id"
                variant="outlined"
                helperText="Please enter a valid id"
                value={inputValue}
                onChange={handleInputChange}
                size="normal"
                sx={{mt: 2, ml: 2}}
            />
            <Button 
                variant="contained"
                onClick={Vote}
                endIcon={<SendIcon />}
                sx={{fontSize: 19, ml: 2}}
            >
                Send
            </Button>
            <hr />
        </div>

    return (parseInt(status) === 3 ? VoteBox : null)
}

export default Vote