import React from "react";

function Sidebar() {
  return (
    <div class="col-12 col-lg-3">
      <div class="row">
        <div class="col-12 mini-padding">
          <div class="card">
            <div class="card-body">
              <div class="row justify-content-center">
                <span class="btn btn-info pattern-filter">10 Dec</span>
                <span class="date-separator">-</span>
                <span class="btn btn-info pattern-filter">3 Mar</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mini-padding">
          <div class="card">
            <div class="card-body">diagram</div>
          </div>
        </div>
        <div class="col-12 mini-padding">
          <div class="card">
            <div class="card-body">return</div>
          </div>
        </div>
        <div class="col-12 mini-padding">
          <div class="card">
            <div class="card-body">profit</div>
          </div>
        </div>
        <div class="col-12 mini-padding">
          <div class="card">
            <div class="card-body">gains losses</div>
          </div>
        </div>
        <div class="col-12 mini-padding">
          <div class="card">
            <div class="card-body">miscellaneous</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
