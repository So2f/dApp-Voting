import React from 'react'
import { useEth } from '../../contexts/EthContext'
import { useState } from 'react'
import { Button } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import '../AddVoter/Add.css'

function AddProposal({ status, setStatus, proposal, setProposal }) {
    const { state: { contract, accounts } } = useEth();
    const [inputValue, setInputValue] = useState('');

    const addProposal = async() => {
        if (inputValue !== '') {
            const transac = await contract.methods.addProposal(inputValue).send({ from: accounts[0] });
            const test = await contract.methods.getOneProposal(1).call({from: accounts[0]});
            const test1 = await contract.methods.getOneProposal(2).call({from: accounts[0]});            
            console.log(transac);
            console.log(test1);
            console.log(test)

            setInputValue("");
        } else {
                alert("cannot be empty");
            }
        }
    
    const handleInputChange = e => {
          setInputValue(e.target.value);
    }

    const addProposalComponent =
        <div className='Add'>
            Add a Proposal: 
            <TextField 
                id="outlined-basic"
                label="Proposal"
                variant="outlined"
                helperText="Please enter a Proposal"
                value={inputValue}
                onChange={handleInputChange}
                size="normal"
                sx={{mt: 2, ml: 2}}
            />
            <Button 
                variant="contained"
                onClick={addProposal}
                endIcon={<SendIcon />}
                sx={{fontSize: 19, ml: 2}}
            >
                Send
            </Button>
            <hr />
        </div>

  return (parseInt(status) === 1 ? addProposalComponent : null)
}

export default AddProposal