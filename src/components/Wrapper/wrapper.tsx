import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container custom:px-0  ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
