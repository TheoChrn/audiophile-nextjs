import React from "react";

type FieldSectionProps = {
  value: string;
  children: React.ReactNode;
};

const FieldSection = ({ value, children }: FieldSectionProps) => {
  return (
    <section className="flex flex-col gap-y-small">
      <p className="text-subtitle uppercase text-accent">{value}</p>
      <div className="flex flex-wrap gap-small">{children}</div>
    </section>
  );
};

export default FieldSection;
