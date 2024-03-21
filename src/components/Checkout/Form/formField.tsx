import { Input } from "@/components/ui/input";
import { TOrderSchema, TextAndEmailFormFieldProps, TextAndEmailFormInputProps } from "@/types/types";

import { Path } from "react-hook-form";
import FormFieldTitle from "./formFieldTitle";


const FormField = ({
  className,
  input,
  errorMessage,
  ariaHidden,
  children,
  register,
  preventMoreThanExpected,
}: TextAndEmailFormFieldProps & TextAndEmailFormInputProps) => {
  return (
    <label className={className} htmlFor={input.name} aria-hidden={ariaHidden}>
      <FormFieldTitle label={input.label} errorMessage={errorMessage} />
      <Input
        {...register(input.name as Path<TOrderSchema>, {
          onChange: (e) => {
            if (!input.max) return;
            preventMoreThanExpected(e, input.max, input.name);
          },
        })}
        id={input.name}
        type={input.type}
        placeholder={input.placeholder}
        variant={errorMessage ? "error" : "default"}
        required
      />
      {children}
    </label>
  );
};

export default FormField;
