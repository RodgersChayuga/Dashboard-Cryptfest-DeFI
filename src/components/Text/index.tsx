import React from "react";

const sizes = {
  xs: "text-[10px] font-medium",
  lg: "text-lg font-medium",
  s: "text-xs font-medium",
  md: "text-sm font-medium",
};

export type TextProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  as,
  size = "xs",
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component className={`text-blue_gray-400 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
