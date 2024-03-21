import { Input } from "@/components/ui/input";
import { RadioFormFieldProps, TOrderSchema } from "@/types/types";
import { Path } from "react-hook-form";



const RadioFormField = ({
  register,
  radioInput,
  setValue,
  errorMessage,
}: RadioFormFieldProps) => {
  return (
    <label
      htmlFor={radioInput.value}
      onKeyDown={(e) => {
        if (e.code === "Enter") {
          setValue(radioInput.name as Path<TOrderSchema>, radioInput.value);
        }
      }}
      tabIndex={0}
      className={`flex cursor-pointer flex-row-reverse items-center justify-end gap-x-[1.6rem] rounded border-2 px-small py-[1.8rem] text-subtitle text-input-text outline-accent placeholder:text-subtitle  focus-within:border-accent ${
        errorMessage
          ? "border-red-600 outline-red-600"
          : "border-input outline-accent"
      }`}
    >
      <p>{radioInput.value}</p>
      <Input
        {...register(radioInput.name as Path<TOrderSchema>)}
        type={radioInput.type}
        id={radioInput.value}
        value={radioInput.value}
        required
        tabIndex={-1}
        variant={errorMessage ? "error" : "default"}
        className="cursor-pointer accent-red-500"
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            setValue(radioInput.name as Path<TOrderSchema>, radioInput.value);
          }
        }}
      />
    </label>
  );
};

export default RadioFormField;
