import { Controller, useFormContext } from "react-hook-form";
import { IFieldProps, IOption } from ".";
import { SelectField } from "../nativeWrappers/SelectField";

interface Props<T> extends IFieldProps<T> {
  options: IOption[];
  hasEmptyOption?: boolean;
  placeholder?: string;
  isMultiple?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  menuIsOpen?: boolean;
  searchInputPlaceholder?: string;
  noOptionsMessage?: string;
}

export default function RRHFSelect<T>({
  name,
  label,
  options,
  rules,
  hasEmptyOption,
  isMultiple,
  isClearable,
  isSearchable,
  isDisabled,
  isLoading,
  menuIsOpen,
  searchInputPlaceholder,
  noOptionsMessage,
  ...other
}: Props<T>) {
  const { control, watch } = useFormContext();

  return (
    <Controller
      name={name.toString()}
      control={control}
      rules={rules}
      {...other}
      render={({ field }) => (
        <SelectField
          isMultiple={isMultiple}
          isClearable={isClearable}
          isSearchable={isSearchable}
          isDisabled={isDisabled}
          loading={isLoading}
          menuIsOpen={menuIsOpen}
          searchInputPlaceholder={searchInputPlaceholder}
          noOptionsMessage={noOptionsMessage}
          label={label}
          name={name.toString()}
          options={options}
          onChange={(e) => {
            field.onChange(e);
          }}
          value={field.value}
        />
      )}
    />
  );
}
