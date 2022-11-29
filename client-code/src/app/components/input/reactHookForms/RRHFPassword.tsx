// form
import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
import { IFieldProps } from ".";
import { TextField } from "../nativeWrappers/TextField";

export default function RRHFPassword<T>({
  name,
  label,
  rules,
  ...other
}: IFieldProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name.toString()}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        //todo add some mask
        <TextField
          name={name.toString()}
          label={label}
          placeholder={label}
          onChange={field.onChange}
          value={field.value || ""}
        />
      )}
    />
  );
}
