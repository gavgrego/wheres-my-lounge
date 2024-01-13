import { ReactElement } from "react";
import { Header } from "../components/Header";

const BaseLayout: React.FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default BaseLayout;
