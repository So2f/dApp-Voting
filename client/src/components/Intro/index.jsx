import Welcome from "./Welcome";
import { useEth } from '../../contexts/EthContext'
import { useEffect } from "react";
import { useState } from "react";
import './Welcome.css'

function Intro({address}) {

  const { state: { contract, accounts } } = useEth();
  const [update, setUpdate] = useState();

  useEffect(() => {
  const Owner =
    <h1 className="owner">Welcome to the session Owner</h1>

  const Voter =
    <h1 className="voter">Welcome to the session Voter</h1>


  const load = async() => {
    if(contract) {                           
      const owner = await contract.methods.owner().call();
      owner !== accounts[0] ? setUpdate(Voter) : setUpdate(Owner);
    }
  }
  load();
})

    return (
    <>
      <Welcome update={update}/>
      {update}
{/**       <Desc /> */} 
    </>
  );
}

export default Intro;
