import React from "react";

const FormFieldTitle = ({
  label,
  errorMessage,
  className,
}: {
  label: string;
  errorMessage: string | undefined;
  className?: string;
}) => {
  return (
    <div className={`flex justify-between ${className}`}>
      <p>{label}</p>
      <p className={" text-red-600"}>{errorMessage}</p>
    </div>
  );
};

export default FormFieldTitle;
