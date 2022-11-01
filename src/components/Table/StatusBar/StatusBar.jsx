import React from "react";
import CustomSelect from "./CustomSelect";
import FilterStatusButtons from "./FilterStatusButtons";

function StatusBar({ chooseProduct, clickStatus , buttons}) {

  return (
    <form action="">
      <div className="row mb-3 justify-content-start">
        <div className="col">
          <FilterStatusButtons buttons={buttons} clickStatus={clickStatus}/>
        </div>

        <div className="col">
          <CustomSelect chooseProduct={chooseProduct}/>
        </div>
      </div>
    </form>
  );
}

export default StatusBar;
