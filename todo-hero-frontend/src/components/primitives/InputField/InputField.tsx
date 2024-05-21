import React, { ComponentProps } from "react";

type InputFieldProps = {
  label: string;
} & ComponentProps<"input">;

const InputField = ({ label, ...rest }: InputFieldProps) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input {...rest} className="w-full rounded bg-white" type="text">
        InputField
      </input>
    </>
  );
};

export default InputField;
