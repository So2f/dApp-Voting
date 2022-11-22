import { EthProvider } from "./contexts/EthContext";
import Intro from "./components/Intro/";
import Footer from "./components/Footer";
import "./App.css";
import AddVoter from "./components/AddVoter/AddVoter";
import Status from "./components/Status/Status";
import { useState } from "react";
import VoterTab from "./components/VoterTab/VoterTab";
import Header from "./components/Header/Header";
import AddProposal from "./components/AddProposals/AddProposal";
import Owner from "./components/isOwner/Owner";
import ShowProposal from "./components/VoterTab/showProposal";
import Vote from './components/VoterTab/Vote'
import ShowWinner from './components/VoterTab/ShowWinner'

function App() {

  const [status, setStatus] = useState(0);
  const [address, setAddress] = useState([]);
  const [proposal, setProposal] = useState([]);

  return (
    <EthProvider>
      <Header />
      <div id="App" >
        <div className="container">
          <Intro address={address}/>
          <hr />
          <Status status={status}/>
          <hr />
          <Owner status={status} setStatus={setStatus}/>
          <AddVoter status={status} setAddresses={setAddress} address={address}/>
          <AddProposal status={status} setStatus={setStatus} proposal={proposal} setProposal={setProposal}/>
          <hr />
          <Vote status={status} setStatus={setStatus}/>
          <VoterTab address={address} setAddress={setAddress}/>
          <ShowProposal proposal={proposal} setProposal={setProposal}/>
          <ShowWinner status={status} setStatus={setStatus}/>
          <Footer />
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
