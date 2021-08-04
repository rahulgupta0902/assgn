import React from "react";

import { useSelector } from "react-redux";

import "./comp.css"


const ResultComponent = () => {
  const results = useSelector((state) => state.allResults.results);
  const renderList = results.map((result) => {
    const { id, urls } = result;
    return ( 
      <div className="card col-3 comp" >
      <img src={urls.small} alt={id}/>
    </div>  
    );
  });
  return <>{renderList}</>;
};

export default ResultComponent;