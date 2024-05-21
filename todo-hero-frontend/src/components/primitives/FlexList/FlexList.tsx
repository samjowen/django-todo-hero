import React, { ComponentProps } from "react";
import clsx from "clsx";

type FlexListProps = {
  direction: "row" | "column";
  children: React.ReactNode;
} & ComponentProps<"div">;

const FlexList = ({ direction, children, ...rest }: FlexListProps) => {
  const directionClass = clsx({
    flex: true,
    "flex-col": direction === "column",
    "flex-row": direction === "row",
  });
  return (
    <div {...rest} className={directionClass + " gap-4 flex-wrap"}>
      {children}
    </div>
  );
};

export default FlexList;
