import React, { ComponentProps } from "react";

type CheckboxProps = {
  positiveCallback?: () => void;
  negativeCallback?: () => void;
} & ComponentProps<"input">;

const Checkbox: React.FunctionComponent<CheckboxProps> = ({ ...props }) => {
  return (
    <input
      type="checkbox"
      {...props}
      className="text-blue-500 rounded border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      onChange={(e) => {
        if (e.target.checked && props.positiveCallback) {
          props.positiveCallback();
        } else if (!e.target.checked && props.negativeCallback) {
          props.negativeCallback();
        }
      }}
    />
  );
};

export default Checkbox;
