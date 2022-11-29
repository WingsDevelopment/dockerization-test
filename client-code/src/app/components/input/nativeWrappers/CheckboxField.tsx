import React from "react";
import { FieldProps } from ".";

interface CheckboxFieldProps extends FieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  value: boolean;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  required,
  placeholder,
}) => {
  return (
    <div className="my-2 p-2 border">
      <input
        type="checkbox"
        name={name}
        checked={value === true}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className=""
      />
      <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};
