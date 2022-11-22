import React from 'react'
import { useState } from "react";
import { useEth } from "../../contexts/EthContext";
import StatusChange from '../Status/StatusChange';

function Owner({status, setStatus, setAddress}) {
  const { state: { contract, accounts } } = useEth();
  const [update, setUpdate] = useState();

    const isOwner =
    <>
    <StatusChange status={status} setStatus={setStatus}/>
    <hr />
    </>

    const load = async() => {
      if(contract) {
        const owner = await contract.methods.owner().call();
        //call infini
        owner === accounts[0] ? setUpdate(isOwner) : setUpdate(<></>)
      }
    }
    load();
  return (
    <>
    <div>{update}</div>
    </>
  )
}

export default Owner