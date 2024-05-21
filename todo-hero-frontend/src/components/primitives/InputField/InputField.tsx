import React, { ComponentProps } from "react";

type InputFieldProps = {
  label: string;
} & ComponentProps<"input">;

const InputField = ({ label, ...rest }: InputFieldProps) => {
  return (
    <>
      <label className="block text-xs font-medium text-gray-700 ">
        {label}
      </label>
      <input
        {...rest}
        className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
        type="text"
      />
    </>
  );
};

export default InputField;
