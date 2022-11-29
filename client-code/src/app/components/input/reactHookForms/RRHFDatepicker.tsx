// form
import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
import { IFieldProps } from ".";
import { DateField } from "../nativeWrappers/DateField";

export default function RHFDatepicker<T>({
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
        <DateField
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
