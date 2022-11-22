import React from 'react'

function VoterTab({address, setAddress}) {
  
  const listItems = address.map((add) =>
    <li>{add}</li>
  );

  return (
    <div>Voters Whitelist :
      {listItems}
      <hr />
    </div>
  )
}

export default VoterTab