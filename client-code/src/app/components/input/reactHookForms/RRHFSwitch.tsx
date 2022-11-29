// form
import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
import { IFieldProps } from ".";
import { CheckboxField } from "../nativeWrappers/CheckboxField";

export default function RRHFSwitch<T>({
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
        <CheckboxField
          name={name.toString()}
          label={label}
          error={error?.message}
          placeholder={label}
          onChange={field.onChange}
          value={field.value || false}
        />
      )}
    />
  );
}
