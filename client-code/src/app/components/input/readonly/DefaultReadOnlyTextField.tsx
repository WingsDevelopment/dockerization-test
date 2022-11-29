import React from "react";

interface Props {
  value: any;
  label: string;
}

export const DefaultReadOnlyTextField: React.FC<Props> = ({ value, label }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-slate-100">
        {label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          readOnly
          value={value}
          className="p-2 shadow-smblock w-full rounded-md border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 focus:outline-none focus:ring-slate-500 focus:border-slate-500 sm:text-sm"
        />
      </div>
    </div>
  );
};
