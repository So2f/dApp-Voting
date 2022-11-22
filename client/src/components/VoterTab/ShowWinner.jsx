import React from 'react'

function ShowWinner({status, setStatus}) {

    const WinnerComponent =
    <div>
        Et le winner est : 
    </div>

  return (parseInt(status) === 5 ? WinnerComponent : null)
}

export default ShowWinner