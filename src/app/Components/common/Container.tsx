import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  id?: string;
  p?: boolean;
}

const Container: React.FC<ContainerProps> = ({ children, id, p }) => {
  return (
    <div
      className={`w-full flex justify-center items-center md:p-10 ${
        p ? "px-5" : ""
      }`}
      id={id}
    >
      {children}
    </div>
  );
};

export default Container;
