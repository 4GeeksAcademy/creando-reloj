import React from "react";

function Contador({digitos1, digitos2, digitos3, digitos4, digitos5, digitos6}) {
    return (
<div className="row justify-content-md-center pt-3 pb-3 bg-secondary" >
            <div className="col-sm-auto mb-3 mb-sm-0" >
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>                   
                    <p className="card-text text-white fs-1"><i className="fa fa-clock text-white"></i> </p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0 ">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>                   
                    <p className="card-text text-white fs-1">{digitos6}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digitos5}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digitos4}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digitos3}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digitos2}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded " style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digitos1}</p>
                </div>
                </div>
            </div>
        </div>
  
   )
}

export default Contador