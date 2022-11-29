import React, { PropsWithChildren } from "react";
import { FieldProps } from ".";

interface MultipleSelectFieldProps extends FieldProps, PropsWithChildren {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string | number | readonly string[] | undefined;
}

export const MultipleSelectField: React.FC<MultipleSelectFieldProps> = ({
  label,
  name,
  value,
  onChange,
  error,
  children,
}) => {
  return (
    <div className="my-2 p-2 border">
      <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
        {label}
      </label>
      <select
        multiple
        name={name}
        value={value}
        onChange={onChange}
        className="bg-slate-400 text-slate-800"
      >
        {children}
      </select>
      {error && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  );
};
