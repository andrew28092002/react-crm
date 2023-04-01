import { FC } from "react";
import CustomSelect from "./CustomSelect";
import FilterStatusButtons from "./FilterStatusButtons";

const StatusBar: FC = () => {
  return (
    <form action="">
      <div className="row mb-3 justify-content-start">
        <div className="col">
          <FilterStatusButtons/>
        </div>

        <div className="col">
          <CustomSelect />
        </div>
      </div>
    </form>
  );
}

export default StatusBar;
