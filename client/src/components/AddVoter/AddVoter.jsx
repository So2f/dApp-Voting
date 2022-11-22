import React from 'react'
import { useState } from 'react';
import { useEth } from '../../contexts/EthContext';
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import './Add.css'

function AddVoter({ status, setAddresses, address }) {

    const { state: { contract, accounts } } = useEth();
    const [inputValue, setInputValue] = useState("");

    const addVoter = async() => {
        try {
            await contract.methods.addVoter(inputValue).send({ from: accounts[0] });
            setAddresses([...address, inputValue]);
            setInputValue("");
        } catch (error) {
            if (inputValue === "") {
                alert("choose a valid address");
            }
        }
    }

    const handleInputChange = e => {
        if (/0[xX][0-9a-fA-F]+/.test(e.target.value)) {
          setInputValue(e.target.value);
        }
    };

    const addVoterComponent =
        <div className='Add'>
            Add following adress: 
            <TextField 
                id="outlined-basic"
                label="Address"
                variant="outlined"
                helperText="Please enter a valid address"
                value={inputValue}
                onChange={handleInputChange}
                size="normal"
                sx={{mt: 2, ml: 2}}
            />
            <Button 
                variant="contained"
                onClick={addVoter}
                endIcon={<SendIcon />}
                sx={{fontSize: 19, ml: 2}}
            >
                Send
            </Button>
            <hr />
        </div>

    return (parseInt(status) === 0 ? addVoterComponent : null)
}

export default AddVoter