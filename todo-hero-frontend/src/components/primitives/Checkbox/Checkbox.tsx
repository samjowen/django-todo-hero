import React, { ComponentProps } from "react";

type CheckboxProps = {
  positiveCallback?: () => void;
  negativeCallback?: () => void;
} & ComponentProps<"input">;

const Checkbox = ({
  positiveCallback,
  negativeCallback,
  ...rest
}: CheckboxProps) => {
  return (
    <input
      {...rest}
      type="checkbox"
      className="text-blue-500 rounded border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      onChange={(e) => {
        if (e.target.checked && positiveCallback) {
          positiveCallback();
        } else if (!e.target.checked && negativeCallback) {
          negativeCallback();
        }
      }}
    />
  );
};

export default Checkbox;
