import { FC } from "react";
import CustomSelect from "./CustomSelect";
import FilterStatusButtons from "./FilterStatusButtons";

type Props = {
  chooseProduct: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  clickStatus: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const StatusBar: FC<Props> = ({ chooseProduct, clickStatus }) => {
  return (
    <form action="">
      <div className="row mb-3 justify-content-start">
        <div className="col">
          <FilterStatusButtons clickStatus={clickStatus} />
        </div>

        <div className="col">
          <CustomSelect chooseProduct={chooseProduct} />
        </div>
      </div>
    </form>
  );
}

export default StatusBar;
