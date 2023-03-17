import { FC } from "react";
import NavBar from "../components/Navbar/Navbar";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default MainLayout;
