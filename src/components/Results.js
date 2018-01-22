import React from 'react';

const Results = (props) => {
  const { investment, total, percent, winlose, winlose2 } = props.globalState.status;
  return (
  <div className="col-md-6">
    <h3>Your ${investment} investment {winlose}</h3>
    <h1 className="">${total}</h1>
    <h4>{percent}% {winlose2}</h4>
  </div>
  )
}

export default Results;