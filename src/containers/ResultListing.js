import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setResults } from "../redux/actions/resultsActions";
import ResultComponent from "./ResultComponent";
import "./resultlisting.css"






const ResultPage = () => {

  const results = useSelector((state) => state.allResults.results);
  const [value, setValue] = useState("")
  let [perpage, setPage] = useState("10")


  const clicking = () => {
    setPage(perpage + 5);


  }


  const dispatch = useDispatch();
  const fetchResults = async (value) => {
    if(value===""){
      value="random";
    }

    const response = await axios
      .get(`https://api.unsplash.com/search/photos?page=1&per_page=${perpage}&client_id=dizKzHeJHp2nuVxDh8AIh9-8acCqP61XcqKNKnKqAI4&query=${value}&orientation=squarish`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response.data.results)

    dispatch(setResults(response.data.results));

  };

  useEffect(() => {
    fetchResults(value, perpage);
  }, [value, perpage]);// eslint-disable-line react-hooks/exhaustive-deps

  console.log("Results:", results);
  return (
    <div className="resultlisting">
      <div className="mydiv">
        <input style={{ width: "70%" }} className="input" placeholder="Search for Photos"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)} />
        <button type="button" className="btn btn-dark mybtn" >Search</button>
      </div>
      <div className=" container">
        <div className="details">

          <h4>{value.toUpperCase()}</h4>
          <span>{results.length} images found</span>
        </div>
        <div className="row">
          <ResultComponent />
        </div>
        <button type="button" className="btn btn-dark mybtn" onClick={() => clicking()}>Load More..</button>
      </div>
    </div>
  );
};

export default ResultPage;