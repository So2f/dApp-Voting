import React from 'react'

function showVoter({address}) {
    const listItems = address.map((add) =>
    <li>{add}</li>
  );
  return (
    <div>{listItems}</div>
  );
}

export default showVoter