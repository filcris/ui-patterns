import React, { forwardRef } from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  id?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, id, ...props },
  ref
) {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={inputId}
        className="font-medium text-gray-700 dark:text-gray-200"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`border rounded px-3 py-2 text-gray-900 dark:text-gray-100
          dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2
          ${error ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"}`}
        {...props}
      />
      {error && (
        <span id={errorId} role="alert" className="text-sm text-red-500">
          {error}
        </span>
      )}
    </div>
  );
});
