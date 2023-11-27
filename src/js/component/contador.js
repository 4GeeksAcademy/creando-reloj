import React from "react";

function Contador({digitos1, digitos2, digitos3, digitos4, digitos5, digitos6}) {
    return (
<div className="row">

<div className="col-sm-1 mb-3 mb-sm-0">
<i class="fa-clock"></i>
      <div className="card">
        <div className="card-body bg-dark rounded">
          <p className="card-text text-white"></p>
        </div>
      </div>
    </div>
    
    <div className="col-sm-1 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body bg-dark rounded">
          <p className="card-text text-white">{digitos6}</p>
        </div>
      </div>
    </div>
    <div className="col-sm-1 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body bg-dark rounded">
          <p className="card-text text-white">{digitos5}</p>
        </div>
      </div>
    </div>
    <div className="col-sm-1 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body bg-dark rounded">
          <p className="card-text text-white">{digitos4}</p>
        </div>
      </div>
    </div>
    <div className="col-sm-1 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body bg-dark rounded">
          <p className="card-text text-white">{digitos3}</p>
        </div>
      </div>
    </div>
    <div className="col-sm-1 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body bg-dark rounded">
          <p className="card-text text-white">{digitos2}</p>
        </div>
      </div>
    </div>
    <div className="col-sm-1 mb-3 mb-sm-0">
      <div className="card">
        <div className="card-body bg-dark rounded">
          <p className="card-text text-white">{digitos1}</p>
        </div>
      </div>
    </div>

  </div>
  
   )
}

export default Contador