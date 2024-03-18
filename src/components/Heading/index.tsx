import React from "react";

const sizes = {
  xl: "text-[26px] font-black md:text-2xl sm:text-[22px]",
  s: "text-base font-semibold",
  md: "text-xl font-semibold",
  xs: "text-[8px] font-bold",
  lg: "text-2xl font-bold md:text-[22px]",
};

export type HeadingProps = Partial<{
  className: string;
  as: any;
  size: keyof typeof sizes;
}> &
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "s",
  as,
  ...restProps
}) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
