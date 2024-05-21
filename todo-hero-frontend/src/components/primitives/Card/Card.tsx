import React, { ComponentProps, FunctionComponent } from "react";

type DivProps = ComponentProps<"div">;

type CardTitleProps = {
  children: React.ReactNode;
} & DivProps;

const CardTitle = ({ children, ...props }: CardTitleProps) => {
  return (
    <div
      {...props}
      className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-gray-200"
    >
      {children}
    </div>
  );
};

const CardContent: FunctionComponent<DivProps> = ({ children, ...props }) => {
  return (
    <div {...props} className="flex flex-col gap-2 text-base text-gray-600">
      {children}
    </div>
  );
};

const Card: FunctionComponent<DivProps> & {
  Title: typeof CardTitle;
  Content: typeof CardContent;
} = ({ children, ...props }) => {
  return (
    <div {...props} className="p-4 bg-white rounded shadow-lg">
      {children}
    </div>
  );
};

Card.Title = CardTitle;
Card.Content = CardContent;

export default Card;
