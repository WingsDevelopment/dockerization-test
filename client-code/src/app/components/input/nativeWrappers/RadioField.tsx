import React from "react";
import { FieldProps } from ".";

interface RadioFieldProps extends FieldProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
}

export const RadioField: React.FC<RadioFieldProps> = ({
  name,
  label,
  value,
  onChange,
  error,
  required,
}) => {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
      />
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};
