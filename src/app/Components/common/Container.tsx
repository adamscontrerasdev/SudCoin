import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className=" w-full flex justify-center items-center">{children}</div>
  );
};

export default Container;
