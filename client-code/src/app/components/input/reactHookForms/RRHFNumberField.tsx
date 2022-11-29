// form
import { useFormContext, Controller } from "react-hook-form";
import { IFieldProps } from ".";
import { NumberField } from "../nativeWrappers/NumberField";

export default function RRHFNumberField<T>({
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
        <NumberField
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
