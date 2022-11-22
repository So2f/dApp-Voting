import React from 'react'
import { useEth } from '../../contexts/EthContext';
import { useCallback } from 'react';
import Button from '@mui/material/Button';


function StatusChange({ status, setStatus }) {
    const { state: { accounts, contract } } = useEth();

    const updateStatus = useCallback(async() => {
        const currentStatus = await contract.methods.workflowStatus().call();
        console.log(currentStatus);
        setStatus(currentStatus);
        console.log(setStatus);
    }, [contract, setStatus]);

    const startProp = async() => {
        await contract.methods.startProposalsRegistering().send({ from: accounts[0] });
        updateStatus();
    }

    const endProp = async() => {
        await contract.methods.endProposalsRegistering().send({ from: accounts[0] });
        updateStatus();
    }

    const startVote = async() => {
        await contract.methods.startVotingSession().send({ from: accounts[0] });
        updateStatus();
    }

    const endVote = async() => {
        await contract.methods.endVotingSession().send({ from: accounts[0] });
        updateStatus();
    }

    const tallyVotes = async() => {
        await contract.methods.tallyVotes().send({ from: accounts[0] });
        updateStatus();
    }

    return (
        <div className='test'>
            {parseInt(status) === 0 ? <Button size='large' variant="outlined" sx={{fontSize: 15}} onClick={startProp}>Start proposal session</Button> : null}
            {parseInt(status) === 1 ? <Button size='large' variant="outlined" sx={{fontSize: 15}} onClick={endProp}>End proposal session</Button> : null}
            {parseInt(status) === 2 ? <Button size='large' variant="outlined" sx={{fontSize: 15}} onClick={startVote}>Start Voting session</Button> : null}
            {parseInt(status) === 3 ? <Button size='large' variant="outlined" sx={{fontSize: 15}} onClick={endVote}>End Voting session</Button> : null}
            {parseInt(status) === 4 ? <Button size='large' variant="outlined" sx={{fontSize: 15}} onClick={tallyVotes}>Tally Votes</Button> : null}
        </div>
    )
}

export default StatusChange