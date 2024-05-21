import React, { ComponentProps } from "react";

type CheckboxProps = {
  onCheck?: () => void;
  onUncheck?: () => void;
} & ComponentProps<"input">;

const Checkbox = ({ onCheck, onUncheck, ...rest }: CheckboxProps) => {
  return (
    <input
      {...rest}
      type="checkbox"
      className="text-blue-500 rounded border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      onChange={(e) => {
        if (e.target.checked && onCheck) {
          onCheck();
        } else if (!e.target.checked && onUncheck) {
          onUncheck();
        }
      }}
    />
  );
};

export default Checkbox;
