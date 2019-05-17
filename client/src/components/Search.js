import React from "react";

function Search() {
  return (
    <div className="col-12 col-md-5 mini-padding">
      <div className="card searching">
        <div className="card-body">		
			<input type="text" placeholder="Search over 100 assets ..." className="tt-input" autoComplete="off" spellCheck="false" dir="auto" style={{position: "relative", verticalAlign: "top", backgroundColor: "transparent"}} />			
        </div>
      </div>
    </div>
  );
}

export default Search;
