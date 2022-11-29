import { Select } from "@mui/material";
import React, { PropsWithChildren } from "react";
import { FieldProps } from ".";
import { IOption } from "../reactHookForms";

interface SelectProps extends FieldProps {
  options: IOption[];
  value: any;
  onChange: (value?: any) => void;
  placeholder?: string;
  isMultiple?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  isDisabled?: boolean;
  loading?: boolean;
  menuIsOpen?: boolean;
  searchInputPlaceholder?: string;
  noOptionsMessage?: string;
}

export const SelectField: React.FC<SelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  isMultiple,
  isSearchable,
}) => {
  return (
    <div className="my-2 p-2 border">
      <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      {/* <Select
        isMultiple={isMultiple || false}
        isSearchable={isSearchable || false}
        onChange={(e: IOption | IOption[] | null | undefined) => {
          if (Array.isArray(e)) {
            onChange(e.map((item) => item.value));
          } else {
            onChange(e?.value || "");
          }
        }}
        value={
          Array.isArray(value)
            ? options.filter((option) => value.includes(option.value))
            : value && options.find((option) => option.value === value)
        }
        options={options.map((option) => ({
          value: option.value?.toString() || "",
          label: option.label,
        }))}
      /> */}
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};
