import { FC } from "react";
import MainLayout from "../../layout/MainLayout";
import CreateRequest from "./CreateRequest";

const Form: FC = () => {
  return (
    <section className="radial-bg flex-center">
      <MainLayout>
        <CreateRequest />
      </MainLayout>
    </section>
  );
};

export default Form;
