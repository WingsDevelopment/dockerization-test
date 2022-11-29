import { useFormContext, Controller } from "react-hook-form";
import { IFieldProps, IOption, IOptionValue } from ".";

interface Props<T> extends IFieldProps<T> {
  options: IOption[];
}

export default function RHFRadioGroup<T>({
  name,
  rules,
  label,
  options,
  ...other
}: Props<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name.toString()}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <fieldset>
          <legend>Select a maintenance drone:</legend>
          <div>
            {options.map((option, index) => (
              <div key={`${index}-${option?.value}`}>
                <input
                  type="radio"
                  name={name.toString()}
                  value={option.value}
                  checked={field.value === option.value}
                  onChange={field.onChange}
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        </fieldset>
      )}
    />
  );
}

{
  /* <div>
          <RadioGroup {...field} row {...other}>
            {options.map((option) => (
              <FormControlLabel
                key={option.value}
                value={option.value}
                control={<Radio />}
                label={option.label}
              />
            ))}
          </RadioGroup>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div> */
}
