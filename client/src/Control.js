import React from "react";

function Control() {
  return (
    <div class="col-12 mini-padding">
      <div class="card">
        <div class="card-body">
          <span class="btn controller float-right">
            <i class="fa fa-undo" />
          </span>
          <span class="btn controller float-right mr-2">Filter</span>
          <span class="btn controller float-right mr-2">10 years</span>
          <span class="btn controller float-right mr-2">
            <i class="fa fa-calendar-check-o" />
          </span>
          <span class="btn controller float-right mr-2">
            <i class="fa fa-line-chart" />
          </span>
          <span class="btn controller float-right mr-2">Share</span>
          <span class="btn controller float-right mr-2">
            <i class="fa fa-question-circle" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Control;
